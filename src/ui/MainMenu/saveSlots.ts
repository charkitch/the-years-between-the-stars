import type { SaveData } from '../../game/GameState';
import type { GameStateData } from '../../game/GameState';

export const SLOT_COUNT = 5;
const AUTOSAVE_FILENAME = 'save-autosave.json';
const SESSION_ID = crypto.randomUUID();

export interface SlotMeta {
  systemName: string;
  credits: number;
  galaxyYear: number;
  systemsVisited: number;
  savedAt: string; // ISO string
}

interface SlotEntry {
  meta: SlotMeta;
  data: SaveData;
}

interface AutosaveEntry extends SlotEntry {
  sessionId: string;
}

let cachedDir: FileSystemDirectoryHandle | null = null;

async function getSlotDir(): Promise<FileSystemDirectoryHandle> {
  if (!cachedDir) {
    cachedDir = await navigator.storage.getDirectory();
  }
  return cachedDir;
}

function slotFileName(index: number): string {
  return `save-slot-${index}.json`;
}

export async function readSlotMeta(index: number): Promise<SlotMeta | null> {
  try {
    const dir = await getSlotDir();
    const handle = await dir.getFileHandle(slotFileName(index));
    const file = await handle.getFile();
    const entry: SlotEntry = JSON.parse(await file.text());
    return entry.meta;
  } catch {
    return null;
  }
}

export async function readAllSlotMetas(): Promise<(SlotMeta | null)[]> {
  return Promise.all(
    Array.from({ length: SLOT_COUNT }, (_, i) => readSlotMeta(i)),
  );
}

export async function saveToSlot(index: number, data: SaveData, meta: SlotMeta): Promise<void> {
  const dir = await getSlotDir();
  const handle = await dir.getFileHandle(slotFileName(index), { create: true });
  const writable = await handle.createWritable();
  const entry: SlotEntry = { meta, data };
  await writable.write(JSON.stringify(entry));
  await writable.close();
}

export async function loadFromSlot(index: number): Promise<SaveData | null> {
  try {
    const dir = await getSlotDir();
    const handle = await dir.getFileHandle(slotFileName(index));
    const file = await handle.getFile();
    const entry: SlotEntry = JSON.parse(await file.text());
    return entry.data;
  } catch {
    return null;
  }
}

export async function deleteSlot(index: number): Promise<void> {
  try {
    const dir = await getSlotDir();
    await dir.removeEntry(slotFileName(index));
  } catch {
    // file didn't exist — no-op
  }
}

export function buildSlotMeta(state: GameStateData): SlotMeta {
  const system = state.cluster.find(s => s.id === state.currentSystemId);
  return {
    systemName: system?.name ?? `System ${state.currentSystemId}`,
    credits: state.player.credits,
    galaxyYear: state.galaxyYear,
    systemsVisited: state.visitedSystems.size,
    savedAt: new Date().toISOString(),
  };
}

export async function saveAutosave(data: SaveData, meta: SlotMeta): Promise<void> {
  try {
    const dir = await getSlotDir();
    const handle = await dir.getFileHandle(AUTOSAVE_FILENAME, { create: true });
    const writable = await handle.createWritable();
    const entry: AutosaveEntry = { meta, data, sessionId: SESSION_ID };
    await writable.write(JSON.stringify(entry));
    await writable.close();
  } catch {
    // FileSystem API unavailable — autosave silently skipped
  }
}

async function readAutosaveEntry(): Promise<AutosaveEntry | null> {
  try {
    const dir = await getSlotDir();
    const handle = await dir.getFileHandle(AUTOSAVE_FILENAME);
    const file = await handle.getFile();
    return JSON.parse(await file.text()) as AutosaveEntry;
  } catch {
    return null;
  }
}

export async function readAutosaveMeta(): Promise<SlotMeta | null> {
  return (await readAutosaveEntry())?.meta ?? null;
}

export async function loadAutosave(): Promise<SaveData | null> {
  return (await readAutosaveEntry())?.data ?? null;
}

export async function isAutosaveFromCurrentSession(): Promise<boolean> {
  return (await readAutosaveEntry())?.sessionId === SESSION_ID;
}

export function formatTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const seconds = Math.floor(diff / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

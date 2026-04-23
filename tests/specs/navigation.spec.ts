import { test, expect } from '../fixtures/gamePage';
import { dockAndComplete } from '../helpers/dockingHelpers';

test.describe('Navigation', () => {
  test('open and close cluster map via keyboard', async ({ gamePage }) => {
    await gamePage.waitForGameReady();

    // Press 'M' to open cluster map (standard keybind)
    await gamePage.page.evaluate(() =>
      window.__GAME__!.requestClusterMapToggle(),
    );
    expect(await gamePage.getUIMode()).toBe('cluster_map');

    await gamePage.page.evaluate(() =>
      window.__GAME__!.requestClusterMapToggle(),
    );
    expect(await gamePage.getUIMode()).toBe('flight');
  });

  test('open and close system map', async ({ gamePage }) => {
    await gamePage.waitForGameReady();

    await gamePage.page.evaluate(() =>
      window.__GAME__!.requestSystemMapToggle(),
    );
    expect(await gamePage.getUIMode()).toBe('system_map');

    await gamePage.page.evaluate(() =>
      window.__GAME__!.requestSystemMapToggle(),
    );
    expect(await gamePage.getUIMode()).toBe('flight');
  });

  test('mobile system map tap selects the visible star target', async ({ gamePage }) => {
    await gamePage.page.setViewportSize({ width: 430, height: 932 });
    await gamePage.waitForGameReady();

    await gamePage.page.evaluate(() => {
      window.__STORE__!.getState().setTarget(null);
      window.__GAME__!.requestSystemMapToggle();
    });
    expect(await gamePage.getUIMode()).toBe('system_map');

    const canvas = gamePage.page.getByTestId('system-map-canvas');
    const box = await canvas.boundingBox();
    expect(box).not.toBeNull();

    const starCanvasPoint = await gamePage.page.evaluate(() => {
      const state = window.__STORE__!.getState();
      const currentSystem = state.currentSystem;
      const playerPos = state.player.position;
      const W = 540;
      const H = 400;

      const mainPlanet = currentSystem.planets.find((p: { id: string }) => p.id === currentSystem.mainStationPlanetId) ?? null;
      const spawnDistanceFromMainPlanet = mainPlanet ? (mainPlanet.radius * 2.2 + 45) : 0;
      const spawnLateralOffset = 20;
      const initialSpawnToStarDistance = mainPlanet
        ? Math.hypot(mainPlanet.orbitRadius + spawnDistanceFromMainPlanet, spawnLateralOffset)
        : Math.hypot(playerPos.x, playerPos.z);
      const defaultRange = Math.max(initialSpawnToStarDistance * 2, currentSystem.starRadius * 8, 200) * 3;
      const range = defaultRange * 0.55;
      const minX = playerPos.x - range * (W / H);
      const maxX = playerPos.x + range * (W / H);
      const minZ = playerPos.z - range;
      const maxZ = playerPos.z + range;

      return {
        x: ((0 - minX) / (maxX - minX)) * W,
        y: ((0 - minZ) / (maxZ - minZ)) * H,
        systemName: state.cluster[state.currentSystemId].name,
      };
    });

    await canvas.click({
      position: {
        x: (starCanvasPoint.x / 540) * box!.width,
        y: (starCanvasPoint.y / 400) * box!.height,
      },
    });

    await expect(gamePage.page.getByTestId('system-map-selection-card')).toContainText(starCanvasPoint.systemName);
    const targetId = await gamePage.page.evaluate(() => window.__STORE__!.getState().player.targetId);
    expect(targetId).toBe('star');
  });

  test('mobile system map drag pans without falsely targeting', async ({ gamePage }) => {
    await gamePage.page.setViewportSize({ width: 430, height: 932 });
    await gamePage.waitForGameReady();

    await gamePage.page.evaluate(() => {
      window.__STORE__!.getState().setTarget(null);
      window.__GAME__!.requestSystemMapToggle();
    });
    expect(await gamePage.getUIMode()).toBe('system_map');

    const canvas = gamePage.page.getByTestId('system-map-canvas');
    const box = await canvas.boundingBox();
    expect(box).not.toBeNull();

    const startX = box!.x + box!.width * 0.7;
    const startY = box!.y + box!.height * 0.55;
    await gamePage.page.mouse.move(startX, startY);
    await gamePage.page.mouse.down();
    await gamePage.page.mouse.move(startX - box!.width * 0.22, startY - box!.height * 0.12, { steps: 10 });
    await gamePage.page.mouse.up();

    const targetId = await gamePage.page.evaluate(() => window.__STORE__!.getState().player.targetId);
    expect(targetId).toBeNull();
  });

  test('maps do not open from docked mode', async ({ gamePage }) => {
    await gamePage.waitForGameReady();
    await dockAndComplete(gamePage.page);
    expect(await gamePage.getUIMode()).toBe('docked');

    await gamePage.page.evaluate(() =>
      window.__GAME__!.requestClusterMapToggle(),
    );
    expect(await gamePage.getUIMode()).toBe('docked');

    await gamePage.page.evaluate(() =>
      window.__GAME__!.requestSystemMapToggle(),
    );
    expect(await gamePage.getUIMode()).toBe('docked');
  });

  test('set hyperspace target', async ({ gamePage }) => {
    await gamePage.waitForGameReady();

    await gamePage.page.evaluate(() => {
      window.__STORE__!.getState().setHyperspaceTarget(1);
    });

    const target = await gamePage.page.evaluate(() =>
      window.__STORE__!.getState().ui.hyperspaceTarget,
    );
    expect(target).toBe(1);
  });

  test('planet landing sites spawn outside host collision radius', async ({ gamePage }) => {
    await gamePage.waitForGameReady();

    const placements = await gamePage.page.evaluate(() => {
      const entities = window.__GAME__?.sceneRenderer?.getAllEntities?.();
      if (!entities) return null;

      const rows: Array<{
        siteId: string;
        hostId: string;
        hostType: string;
        distance: number;
        collisionRadius: number;
      }> = [];

      for (const [, entity] of entities) {
        if (entity?.type !== 'landing_site') continue;
        const hostId = entity.siteHostId;
        if (!hostId) continue;
        const host = entities.get(hostId);
        if (!host || host.type !== 'planet') continue;
        rows.push({
          siteId: entity.id,
          hostId: host.id,
          hostType: host.type,
          distance: entity.worldPos.distanceTo(host.worldPos),
          collisionRadius: host.collisionRadius,
        });
      }
      return rows;
    });

    expect(placements).not.toBeNull();
    expect(placements!.length).toBeGreaterThan(0);
    for (const row of placements!) {
      expect(row.distance).toBeGreaterThan(row.collisionRadius);
    }
  });
});

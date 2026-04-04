import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import glsl from 'vite-plugin-glsl'

const repoRoot = dirname(fileURLToPath(import.meta.url))
const packageJson = JSON.parse(
  readFileSync(resolve(repoRoot, 'package.json'), 'utf-8')
) as { version?: string }

let shortSha = 'nogit'
try {
  shortSha =
    execSync('git rev-parse --short=8 HEAD', {
      cwd: repoRoot,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim() || 'nogit'
} catch {
  // Fallback for environments without git metadata.
}

let commitCount = 0
try {
  const parsedCount = Number(
    execSync('git rev-list --count HEAD', {
      cwd: repoRoot,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()
  )
  commitCount = Number.isFinite(parsedCount) ? parsedCount : 0
} catch {
  // Fallback for environments without git metadata.
}

const appBuild = {
  version: packageJson.version ?? '0.0.0',
  sha: shortSha,
  number: commitCount,
}

export default defineConfig({
  plugins: [react(), wasm(), glsl()],
  define: {
    __APP_BUILD__: JSON.stringify(appBuild),
  },
})

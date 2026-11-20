const { spawnSync } = require('node:child_process');
const { mkdtempSync, realpathSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');

// SWC refuses shared cache parents on Workers Builds. Give the build an
// owner-only temporary cache and keep the native module's checks enabled.
const cacheDir = process.env.SWC_NATIVE_BINDING_CACHE
  ? undefined
  : mkdtempSync(join(realpathSync(tmpdir()), 'hverir-swc-'));

try {
  const result = spawnSync(
    process.execPath,
    [require.resolve('next/dist/bin/next'), 'build', ...process.argv.slice(2)],
    {
      stdio: 'inherit',
      env: cacheDir ? { ...process.env, SWC_NATIVE_BINDING_CACHE: cacheDir } : process.env,
    },
  );
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} finally {
  if (cacheDir) rmSync(cacheDir, { recursive: true, force: true });
}

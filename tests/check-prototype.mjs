import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)];
assert.ok(scripts.length >= 1, 'index.html must contain an inline game script');
const gameScript = scripts[scripts.length - 1][1];
assert.ok(gameScript.length > 1000, 'game script should not be empty');
new Function(gameScript); // Parse-only syntax check; does not run browser code.

for (const selector of ['id="game"', 'id="start"', 'id="shoot"', 'id="touchshoot"', 'data-dir="up"', 'data-mode="electric"', 'data-mode="fire"', 'data-mode="energy"', 'id="timer"', 'id="restart"']) {
  assert.ok(html.includes(selector), `missing expected UI/control: ${selector}`);
}
for (const feature of ['keeperDist', 'scoreEl.textContent=score', 'function resetBall()', 'touchDirs', 'visibilitychange', 'kickTime', "mode==='electric'&&i>0", 'function resetMatch()', 'matchTime<=0', 'rival.vx', 'id="featurebar"', 'id="pass"', 'id="players"', 'id="stadium"', 'id="training"', 'id="skills"', 'id="customize"', 'id="tournament"', 'id="missions"', 'id="tutorial"', 'id="stats"', 'id="controlsConfig"', 'id="replay"']) {
  assert.ok(gameScript.includes(feature), `missing expected gameplay feature: ${feature}`);
}
console.log('Prototype static checks passed.');

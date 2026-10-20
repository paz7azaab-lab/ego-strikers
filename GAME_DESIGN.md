# EGO STRIKERS — Game Design & 100-Skill Execution Plan

## Project identity
Original anime-inspired arcade football game. Do not copy Blue Lock names, characters, art, logos, music, or proprietary assets. Target: mobile-first browser prototype, later expandable to 3D and online play.

## Core promise
Fast football matches where player skill matters, with signature abilities, readable VFX, dramatic goals, and fair competition.

## First milestone
Build a playable single-file browser prototype before adding online multiplayer or monetization.

### MVP acceptance criteria
- Responsive pitch, goals, player, ball, score and match timer.
- Keyboard controls for desktop and on-screen touch controls for phones.
- Move, dribble, aim and shoot; the ball must travel and goals must register.
- Signature shot modes: electric, fire and energy, visually distinct but not obscuring the ball.
- Shot animation and short goal camera/celebration effect; provide reduced-motion toggle.
- Restart match and readable instructions.
- No claims of mobile-device testing until tested on a physical device.

## 100-skill framework workflow
Use the existing 100-skill framework at https://github.com/paz7azaab-lab/game-dev-100-skills as a review checklist, not as a claim that 100 plugins or agents are installed. At each milestone:
1. Review relevant skills across game design, controls, physics, animation/VFX, camera, UI/accessibility, mobile performance, security, testing and monetization.
2. Record each relevant skill as planned, in progress, applied, or passed with evidence.
3. Only mark passed after an observable test; include commit and test evidence.
4. Do not mark online play, security hardening, Android packaging, or revenue as complete without implementation and evidence.

## VFX & Animation requirements
- Electric shot: controlled lightning arcs and blue-white trail.
- Fire shot: warm flame trail and brief impact burst.
- Energy shot: charged aura and expanding ring.
- Kick: wind-up, strike flash, follow-through.
- Goal: short celebratory camera punch/zoom, goal flash and celebration cue.
- Gameplay readability: keep ball and player visible; limit particle count and screen shake.
- Accessibility: reduced-motion option and restrained flashes.
- Performance: use pooled/reused particles where practical; cap effects on mobile.

## Next milestones
1. Core movement and ball interaction.
2. Shooting, scoring, goal reset and keeper/opponent AI.
3. EGO signature abilities and VFX.
4. Touch-control validation, responsive layout and accessibility.
5. Automated tests and runtime-error checks.
6. 3D visual upgrade only after the core loop is fun and stable.
7. Online multiplayer only after the offline game is tested.

## Current status
This file records approved direction and acceptance criteria. It does not itself prove the game is implemented, tested on a physical phone, deployed, or monetized.

## Honest implementation and test status (2026-10-20)

### Implemented at prototype level — not yet validated
- Fire, electric and energy shot modes exist in `index.html`; current effects are preliminary and their quality and gameplay behavior have not been confirmed through real testing.
- The project is currently a 2D top-down browser prototype, not the final 3D game.
- The current build includes basic movement, shooting, a score counter, a keeper visual, touch controls and a reduced-VFX toggle. These are prototype features, not proof of robust gameplay.

### Not implemented / not verified
- Full opponent AI and reliable goalkeeper collision/save behavior are not complete.
- Online multiplayer and team-building systems have not been built.
- No successful automated test run has been recorded.
- The game has not been tested on a physical phone.
- No claim is made that it is production-ready, deployed, monetized, or ready for a large player base.

### Next work — priority order
1. Inspect and improve the football core: player movement, ball control/dribbling, shooting, keeper collision/saves, goal detection and ball reset.
2. Validate touch controls and responsive behavior, including preventing stuck touch inputs and checking common mobile screen sizes.
3. Add repeatable automated checks and record actual results; fix runtime errors before marking tests passed.
4. Improve the pitch and player visuals toward a polished 3D style only after the core loop is stable. Keep the original visual identity and mobile performance in mind.
5. Re-check relevant areas of the 100-skill framework and record each skill's status with evidence. Do not mark a task passed without a verifiable test.

**Evidence rule:** this status is a candid project note, not a test report. Update it only when changes have actually been committed and the relevant behavior has been verified.


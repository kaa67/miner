import { createEvent, createStore } from 'effector';
import { interval } from 'patronum';

// Events
export const gameTimerStart = createEvent();
export const gameTimerStop = createEvent();
export const gameTimerReset = createEvent();

// Patronum interval = { tick(Event), isRunning(Store) }
export const gameTimerInterval = interval({
    timeout: 1000,
    start: gameTimerStart,
    stop: gameTimerStop,
});

// Store
export const $gameTimer = createStore(0)
    .on(gameTimerInterval.tick, timer => ++timer)
    .reset(gameTimerReset);

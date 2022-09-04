import { createEvent, sample } from 'effector';

import {
    gameTimerStart,
    gameTimerStop,
    gameTimerReset,
} from '../../store';

// Events
export const gameStart = createEvent();
export const gameStop = createEvent();

sample({
    clock: gameStart,
    target: [gameTimerReset, gameTimerStart],
});

sample({
    clock: gameStop,
    target: gameTimerStop,
});

import { createEvent, forward } from 'effector';

import {
    gameTimerStart,
    gameTimerStop,
    gameTimerReset,
} from '../../store';

// Events
export const gameStart = createEvent();
export const gameStop = createEvent();

// Buisness
forward({
    from: gameStart,
    to: [gameTimerReset, gameTimerStart],
});

forward({
    from: gameStop,
    to: gameTimerStop,
});

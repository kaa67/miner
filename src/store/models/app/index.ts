import {
    createEvent,
    createStore,
    guard,
    sample
} from "effector"

import {
    $mineField,
    minesGenerate,
    setReady
} from "../mineField"
import { initial } from "./lib"
import {
    TGameMode,
    IDimension
} from "../../../interfaces"

export const setGameMode = createEvent<TGameMode>()
export const setDimension = createEvent<IDimension>()
export const tick = createEvent()
export const incrementTimer = createEvent()
export const resetTimer = createEvent()

export const $app = createStore(initial)
    .on(setGameMode, (app, gameMode) => ({ ...app, gameMode }))
    .on(setDimension, (app, width) => ({ ...app, width }))
    .on(incrementTimer, app => ({ ...app, timer: app.timer + 1 }))
    .on(resetTimer, app => ({ ...app, timer: 0 }))

guard({
    clock: tick,
    source: { app: $app, mf: $mineField },
    filter: ({ app, mf }) => app.gameMode === 'game',
    target: incrementTimer
})

guard({
    clock: setGameMode,
    source: $mineField,
    filter: (mineField, gameMode) => ((gameMode === 'game') && !mineField.isReady),
    target: minesGenerate
})

sample({
    clock: minesGenerate,
    target: [
        resetTimer,
        setReady.prepend(() => true)
    ] 
})

// guard({
//     clock: mineClick,
//     source: $mineField,
//     filter: mineClickFilter,
//     target: mineSet.prepend(minePepend)
// })

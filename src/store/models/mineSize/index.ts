import {
    createEvent,
    createStore,
    sample,
} from "effector"
import { $dimensionWidth } from "../app"
import { $columnsCount, $fieldRatio } from "../mineField"

export const setMIneSize = createEvent<number>()

export const $mineSize = createStore(0)
    .on(setMIneSize, (_,size) => size)

sample({
    source: [$dimensionWidth, $columnsCount, $fieldRatio],
    fn: mineSizeCalc,
    target: setMIneSize
})

function mineSizeCalc (source: number[]): number {
    const [width, count, ratio] = source

    return Math.ceil(ratio/100*width/count)
}
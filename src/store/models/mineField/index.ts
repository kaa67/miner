import { createEvent, createStore, sample } from "effector"
import { IMine, IMineClick } from "../../../interfaces"

import { generate, initial, mineClickHandle } from "./lib"

export const minesGenerate = createEvent()
const generateEmptyMines = createEvent<IMine[][]>()
export const setReady = createEvent<boolean>()
export const setColumnsCount = createEvent<number>()
export const setRowsCount = createEvent<number>()
export const setFieldRatio = createEvent<number>()
export const setMinesRatio = createEvent<number>()
export const mineClick = createEvent<IMineClick>()

export const $mineField = createStore(initial)
    .on(generateEmptyMines, (mineField, mines) => ({ ...mineField, mines }))
    .on(setReady, (mineField, isReady) => ({ ...mineField, isReady }))
    .on(setColumnsCount, (mineField, columnsCount) => ({ ...mineField, columnsCount }))
    .on(setRowsCount, (mineField, rowsCount) => ({ ...mineField, rowsCount }))
    .on(setFieldRatio, (mineField, fieldRatio) => ({ ...mineField, fieldRatio }))
    .on(setMinesRatio, (mineField, minesRatio) => ({ ...mineField, minesRatio }))
    .on(mineClick, mineClickHandle)

// Вычисляемые сторы
export const $rowsCount = $mineField.map(field => field.rowsCount)
export const $columnsCount = $mineField.map(field => field.columnsCount)
export const $fieldRatio = $mineField.map(field => field.fieldRatio)
export const $minesRatio = $mineField.map(field => field.minesRatio)

// триггер генерации первичного минного поля
sample({
    clock: minesGenerate,
    source: [$rowsCount, $columnsCount],
    fn: generate,
    target: generateEmptyMines
})

// триггер сброса готовности поля из-за изменения настроек
sample({
    source: [$rowsCount, $columnsCount, $minesRatio],
    fn: () => false,
    target: setReady,
})

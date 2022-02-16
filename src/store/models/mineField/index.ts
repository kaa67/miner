import { createEvent, createStore } from "effector"
import { IMineClick } from "../../../interfaces"

import { generate, initial, mineClickHandle } from "./lib"

export const minesGenerate = createEvent()
export const setReady = createEvent<boolean>()
export const setColumnsCount = createEvent<number>()
export const setRowsCount = createEvent<number>()
export const setFieldRatio = createEvent<number>()
export const setMinesRatio = createEvent<number>()
export const mineClick = createEvent<IMineClick>()

export const $mineField = createStore(initial)
    .on(minesGenerate, mineField => ({ ...mineField, mines: generate() }))
    .on(setReady, (mineField, isReady) => ({ ...mineField, isReady }))
    .on(setColumnsCount, (mineField, columnsCount) => ({ ...mineField, columnsCount }))
    .on(setRowsCount, (mineField, rowsCount) => ({ ...mineField, rowsCount }))
    .on(setFieldRatio, (mineField, fieldRatio) => ({ ...mineField, fieldRatio }))
    .on(setMinesRatio, (mineField, minesRatio) => ({ ...mineField, minesRatio }))
    .on(mineClick, mineClickHandle)

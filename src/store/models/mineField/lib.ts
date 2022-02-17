import { setRowsCount } from "."
import { IMine, IMineClick, IMineField } from "../../../interfaces"

const mine: IMine = {
    isOpen: false,
    isMark: false,
    isMine: false,
    caption: ''
}

export const initial: IMineField = {
    mines: [],
    isReady: false,

    columnsCount: 16,
    columnsMin: 8,
    columnsMax: 40,
    columnsStep: 1,

    rowsCount: 10,
    rowsMin: 8,
    rowsMax: 20,
    rowsStep: 1,

    fieldRatio: 50,
    fieldMin: 10,
    fieldMax: 100,
    fieldStep: 1,

    minesRatio: 10,
    minesMin: 10,
    minesMax: 50,
    minesStep: 2,
}

export const generate = (params: number[]): IMine[][] => {
    const [rowsCount, columnsCount] = params

    return  Array(rowsCount).fill(Array(columnsCount).fill(null))
        .map(row => row.map(() => ({ ...mine })))
}

export const mineClickHandle = (
    mineField: IMineField,
    click: IMineClick
): IMineField => {
    const field = { ...mineField }
    const { rowId, colId, code } = click
    const mine = field.mines[rowId][colId]

    //Left Button
    if ((code === 0) && !mine.isOpen && !mine.isMark)
        mine.isOpen = true

    // Right Button
    if ((code === 2) && !mine.isOpen) {
        mine.isMark = !mine.isMark
        mine.caption = mine.isMark ? '*' : ''
    }

    field.mines[rowId][colId] = mine

    return field
}

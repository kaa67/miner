import { IMine, IMineClick, IMineField } from "../../../interfaces"

const primaryMine: IMine = {
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

    fieldRatio: 80,
    fieldMin: 10,
    fieldMax: 95,
    fieldStep: 5,

    minesRatio: 10,
    minesMin: 10,
    minesMax: 50,
    minesStep: 2,
}

export const generate = () => ([
    ...Array(10).fill([
        ...Array(16).fill({ ...primaryMine })
    ])
])

export const mineClickHandle = (
    mineField: IMineField,
    click: IMineClick
): IMineField => {
    const { mines } = mineField
    const { rowId, colId, code } = click
    const mine = mines[rowId][colId]

    if ((code === 0) && !mine.isOpen) mine.isOpen = true //Left Button
    if (code === 2) mine.isMark = !mine.isMark // Right Button

    return {
        ...mineField,
        ...mines,
    }
}

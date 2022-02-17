export interface IMine {
    isOpen: boolean
    isMark: boolean
    isMine: boolean
    caption: string
}

export interface IMineField {
    mines: IMine[][]
    isReady: boolean

    // Количество колонок
    columnsCount: number
    columnsMin: number
    columnsMax: number
    columnsStep: number

    // Количество рядов
    rowsCount: number
    rowsMin: number
    rowsMax: number
    rowsStep: number

    // Размер минного поля в процентах от вьюпорта
    fieldRatio: number
    fieldMin: number
    fieldMax: number
    fieldStep: number

    // Заполнение минами в процентах от количества мин
    minesRatio: number
    minesMin: number
    minesMax: number
    minesStep: number
}

export interface IMineProps {
    rowId: number
    colId: number
    mine: IMine
}

export interface IMineRowProps {
    rowId: number
    mineRow: IMine[]
}

export interface IMineClick {
    colId: number
    rowId: number
    code: number
}

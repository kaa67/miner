import React from "react"

import { IMineProps } from "../../../interfaces"
import { mineClick } from "../../../store/models/mineField"

import './styles.css'

const Mine = ({ colId, rowId, mine }: IMineProps) => {

    const className = 'closedField'
    const style = {
        width: '32px',
        height: '32px',
    }

    return (
        <div
            className={className}
            style={style}
            onContextMenu={e => e.preventDefault()}
            onMouseDown={e => mineClick({
                rowId,
                colId,
                code: e.button
            })}
        >
            {mine.isOpen && mine.caption}
        </div>
    )
}

export default Mine

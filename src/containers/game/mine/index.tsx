import React, { MouseEventHandler } from "react"
import { useStore } from 'effector-react';

import { IMineProps } from "../../../interfaces"
import { $mineSize } from "../../../store/models/mineSize"
import { mineClick } from "../../../store/models/mineField"

import './styles.css'

const Mine = ({ colId, rowId, mine }: IMineProps) => {
    const size = useStore($mineSize)
    const { isOpen, caption } = mine

    const className = isOpen ? 'openField' : 'closedField'

    const style = {
        width: `${size}px`,
        height: `${size}px`,
    }

    const mouseDown = (e: { button: number }) =>
        !isOpen && mineClick({ rowId, colId, code: e.button })

    return (
        <div
            className={className}
            style={style}
            onContextMenu={e => e.preventDefault()}
            onMouseDown={mouseDown}
        >
            {caption}
        </div>
    )
}

export default Mine

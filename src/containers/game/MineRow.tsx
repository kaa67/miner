import React from "react"

import { IMineRowProps } from "../../interfaces"
import Mine from './mine'

export const MineRow = ({ mineRow, rowId }: IMineRowProps) => (
    <div className="mineRow">
        {mineRow.map((mine, index) => (
            <Mine
                key={`mine${index}`}
                rowId={rowId}
                colId={index}
                mine={mine}
            />
        ))}
    </div>
)

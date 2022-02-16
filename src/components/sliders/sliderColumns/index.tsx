import React, { FC } from "react"
import { useStore } from "effector-react"
import { Slider } from "antd"

import { $mineField, setColumnsCount } from "../../../store/models/mineField"
import { style, marks } from '../lib'

const SliderColumns: FC = () => {
    const {
        columnsMin,
        columnsMax,
        columnsCount,
        columnsStep
    } = useStore($mineField)

    const onChange = (cc: number) => setColumnsCount(cc)

    return (
        <Slider
            style={style}
            min={columnsMin}
            max={columnsMax}
            step={columnsStep}
            value={columnsCount}
            marks={marks(columnsMin, columnsMax)}
            tipFormatter={c => `Колонок: ${c}`}
            tooltipVisible
            onChange={onChange}
        />
    )
}

export default SliderColumns

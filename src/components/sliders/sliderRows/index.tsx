import React, { FC } from "react"
import { useStore } from "effector-react"
import { Slider } from "antd"

import { $mineField, setRowsCount } from "../../../store/models/mineField"
import { style, marks } from '../lib'

const SliderRows: FC = () => {
    const {
        rowsMin,
        rowsCount,
        rowsMax,
        rowsStep,
    } = useStore($mineField)

    const setRC = (rc: number) => setRowsCount(rc)

    return (
        <Slider
            style={style}
            min={rowsMin}
            max={rowsMax}
            step={rowsStep}
            value={rowsCount}
            marks={marks(rowsMin, rowsMax)}
            tipFormatter={(v => `Рядов: ${v}`)}
            tooltipVisible
            onChange={setRC}
        />
    )
}

export default SliderRows

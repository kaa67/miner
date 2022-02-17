import React, { FC } from "react"
import { useStore } from "effector-react"
import { Slider } from "antd"

import { $mineField, setFieldRatio } from "../../../store/models/mineField"
import { style, marks } from '../lib'

const SliderFieldRatio: FC = () => {
    const {
        fieldMin,
        fieldRatio,
        fieldMax,
        fieldStep,
    } = useStore($mineField)

    const setFR = (fr: number) => setFieldRatio(fr)

    return (
        <Slider
            style={style}
            min={fieldMin}
            max={fieldMax}
            step={fieldStep}
            value={fieldRatio}
            marks={marks(fieldMin, fieldMax)}
            tipFormatter={(v => `Размер поля: ${v}%`)}
            tooltipVisible
            onChange={setFR}
        />
    )
}

export default SliderFieldRatio

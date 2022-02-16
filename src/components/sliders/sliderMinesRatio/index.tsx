import React, { FC } from "react"
import { useStore } from "effector-react"
import { Slider } from "antd"

import { $mineField, setMinesRatio } from "../../../store/models/mineField"
import { style, marks } from '../lib'

const SliderMinesRatio: FC = () => {
    const {
        minesMin,
        minesRatio,
        minesMax,
        minesStep,
    } = useStore($mineField)

    const setMR = (mr: number) => setMinesRatio(mr)

    return (
        <Slider
            style={style}
            min={minesMin}
            max={minesMax}
            step={minesStep}
            value={minesRatio}
            marks={marks(minesMin, minesMax)}
            tipFormatter={(v => `Заминировано: ${v}%`)}
            tooltipVisible
            onChange={setMR}
        />
    )
}

export default SliderMinesRatio

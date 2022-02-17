import React from "react"
import { useStore } from 'effector-react'
import { Button, Typography } from "antd"

import {
    $mineField,
    minesGenerate
} from "../../store/models/mineField"
import { SliderFieldRatio } from "../../components/sliders"
import { $app } from "../../store/models/app"
import { MineRow } from "./MineRow"

import "./styles.css"

const Game: React.FC = () => {
    const { mines } = useStore($mineField)
    const { gameMode, timer } = useStore($app)
    const { Text } = Typography

    if (gameMode !== 'game')
        return null

    const newGame = () => minesGenerate()

    return (
        <div style={{ paddingTop: '16px' }}>
            <SliderFieldRatio />

            <div>
                <Button type="primary" onClick={newGame}>
                    Новая игра
                </Button>

                <Text code>Time: {timer} sec</Text>
            </div>

            {mines.map((mineRow, index) => (
                <MineRow
                    key={`mineRow${index}`}
                    mineRow={mineRow}
                    rowId={index}
                />
            ))}
        </div>
    )
}

export default Game

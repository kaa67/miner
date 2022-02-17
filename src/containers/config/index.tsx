import React, { FC } from "react"
import { useStore } from "effector-react"
import { Space, Button } from "antd"

import {
    $app,
    setGameMode,
} from "../../store/models/app"
import {
    SliderColumns,
    SliderRows,
    SliderFieldRatio,
    SliderMinesRatio
} from '../../components/sliders'

const Config: FC = () => {
    const { gameMode } = useStore($app)

    if (gameMode !== 'config')
        return null

    const game = () => setGameMode('game')

    return (
        <Space direction="vertical" size={32}>
            <h1>Настройки минера</h1>

            <SliderColumns />
            <SliderRows />
            <SliderFieldRatio />
            <SliderMinesRatio />

            <Button
                type="primary"
                onClick={game}
            >
                Играть
            </Button>
        </Space>
    )
}

export default Config

import React from "react"
import { version } from "effector"
import { Button, Typography, Space, Divider } from 'antd';
import { useStore } from "effector-react"

import { $app, setGameMode } from "../../store/models/app"
import { TGameMode } from "../../interfaces";

const Welcome: React.FC = () => {
    const { gameMode } = useStore($app)
    const { Link } = Typography

    if (gameMode !== 'standBy')
        return null

    const setMode = (gameMode: TGameMode) => () => setGameMode(gameMode)

    return (
        <>
            <h1>Минер</h1>
            <div>
                Изучение стейт-менеджера <b>Effector</b>
                <br />
                <br />

                Основной стек:                
                <div>
                    <Link href="https://reactjs.org" target="_blank">
                        React 
                    </Link>
                    <sup>v17.0.2</sup>

                    <Divider type="vertical" />

                    <Link href="https://www.typescriptlang.org" target="_blank">
                        Typescript
                    </Link>
                    <sup>v3.9.7</sup>

                    <Divider type="vertical" />

                    <Link href="https://effector.dev" target="_blank">
                        Effector
                    </Link>
                    <sup>v{version}</sup>

                    <Divider type="vertical" />

                    <Link href="https://ant.design" target="_blank">
                        Ant design
                    </Link>
                    <sup>v4.18.6</sup>
                </div>

                <br />
                <br />

                Авторизации нет
                <br />
                Сохранения результатов игры нет
                <br />
                Бэка нет

                <br />
                <br />

                <Space size="small">
                    <Button
                        type="primary"
                        onClick={setMode('game')}
                    >
                        Играть
                    </Button>

                    <Button
                        type="default"
                        onClick={setMode('config')}
                    >
                        Изменить настройки
                    </Button>
                </Space>
            </div>
        </>
    )
}

export default Welcome

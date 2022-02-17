import React, { FC } from 'react'
import { useStore } from "effector-react"
import { Menu } from 'antd'
import { MenuInfo } from 'rc-menu/lib/interface'
import {
    HomeOutlined,
    PlayCircleOutlined,
    ToolOutlined
} from '@ant-design/icons'

import {
    $app,
    setGameMode
} from '../../../store/models/app'

const Navbar: FC = () => {
    const { gameMode } = useStore($app)

    const setKey = (e: MenuInfo) => {
        const { key } = e
        switch(key) {
            case 'standBy':
            case 'config':
            case 'game':
                setGameMode(key)
                break
            default:
        }
    };

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[gameMode]}
            onClick={setKey}
        >
            <Menu.Item key="standBy" icon={<HomeOutlined />}>Стоп</Menu.Item>                
            <Menu.Item key="game" icon={<PlayCircleOutlined />}>Игра</Menu.Item>                
            <Menu.Item key="config" icon={<ToolOutlined />}>Настройки</Menu.Item>
        </Menu>
    )
}

export default Navbar

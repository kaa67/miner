import React from 'react'
import { Typography } from 'antd';
import { useStore } from 'effector-react';

import { $app } from '../../../store/models/app';
import { $mineField } from '../../../store/models/mineField';
import { $mineSize } from '../../../store/models/mineSize';

const Stat = () => {
    const app = useStore($app)
    const mineField = useStore($mineField)
    const mineSize = useStore($mineSize)
    const { Text } = Typography
    const { gameMode, dimension } = app
    const { width, height } = dimension
    const {
        columnsCount,
        rowsCount,
        fieldRatio,
        minesRatio,
    } = mineField

    return (
        <div>
            <Text code>Screen: {width}x{height}</Text>
            <Text code>MineField: {columnsCount}x{rowsCount}</Text>
            <Text code>Screen Ratio: {fieldRatio}%</Text>
            <Text code>Mines Ratio: {minesRatio}%</Text>
            <Text code>Game mode: {gameMode}</Text>
            <Text code>Size: {mineSize}px</Text>
        </div>
    )
}

export default Stat

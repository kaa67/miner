import * as React from 'react';
import { useStore } from 'effector-react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

import {
    gameTimerReset,
    gameTimerStart,
    gameTimerStop,
    gameTimerInterval,
    $gameTimer,

    gameStart,
    gameStop,
} from '../../store';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const Timer = () => {
    const timer = useStore($gameTimer);
    const isRunning = useStore(gameTimerInterval.isRunning);
    const isPause = !isRunning && (timer > 0);
    return (
        <Box>

            <h1>Interval: {timer}</h1>

            <Button
                variant="contained"
                onClick={() => gameTimerStart()}
                disabled={isRunning}
            >
                Start
            </Button>

            <Button
                variant="contained"
                onClick={() => gameTimerStop()}
                disabled={!isRunning}
            >
                Stop
            </Button>

            <Button
                variant="contained"
                onClick={() => gameTimerReset()}
                disabled={!timer}
            >
                Reset
            </Button>

            <h2>Game</h2>

            <Button
                variant="contained"
                onClick={() => gameStart()}
                disabled={isRunning}
            >
                Game start
            </Button>

            <Button
                variant="contained"
                onClick={() => gameStop()}
                disabled={!isRunning}
            >
                Game stop
            </Button>

            {isPause && (
                <Stack sx={{ width: '30%' }} spacing={2}>
                    <Alert severity="warning">
                        <AlertTitle>Пауза</AlertTitle>
                        Игра <strong>на паузе!</strong>
                    </Alert>
                </Stack>
            )}
        </Box>
    );
};

export default Timer;

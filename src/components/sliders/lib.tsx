import React from 'react'

export const style = { width: '70vw' }

export const marks = (min: number, max: number) => ({
    [min]: {
        style: { color: '#777'},
        label: <strong>{min}</strong>
    },
    [max]: {
        style: { color: '#777'},
        label: <strong>{max}</strong>
    }
})

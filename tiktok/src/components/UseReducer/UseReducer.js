import { Button } from '@mui/material';
import React, { useReducer, useState } from 'react';

const initState = 0
// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
// Reducer
const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initState);
    return (
        <React.Fragment>
            <h1>{count}</h1>
            <Button onClick={() => dispatch(DOWN_ACTION)} variant='contained' color='error'>Down</Button>
            <Button onClick={() => dispatch(UP_ACTION)} variant='contained' color='primary'>Up</Button>
        </React.Fragment>
    )
}

export default UseReducer

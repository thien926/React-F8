import { Button } from '@mui/material';
import React, { memo, useCallback, useState } from 'react'
import Content from './Content';

// 1. memo () -> Higher Order Componert (HOC)
// 2. useCallback()
// - Reference types
// - React memo()

function UseCallBack() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(
        () => {
            setCount(prev => prev + 1)
        },
        [],
    )


    return (
        <div style={{ padding: '10px 32px' }}>
            <Content onIncrease={handleIncrease} />
            <h1>{count}</h1>
            {/* <Button onClick={increase} variant='contained' color='success'>Click me!</Button> */}
            {/* <button onClick={increase}>Click me!</button> */}
        </div>
    )
}

export default UseCallBack

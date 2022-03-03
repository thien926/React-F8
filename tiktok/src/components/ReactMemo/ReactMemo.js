import { Button } from '@mui/material';
import React, { useState } from 'react'
import Content from './Content';

// 1. memo () -> Higher Order Componert (HOC)
// 2. useCallback()

// ===========
// 1.  Sử dụng memo khi có nhiều props
// 2.  Không có props
// 3.  Thực tế màn hình phức tạp cao, nhiều chi tiết => sd memo 
function ReactMemo() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1)
    }

    return (
        <div style={{ padding: '10px 32px' }}>
            <Content />
            <h1>{count}</h1>
            <Button onClick={increase} variant='contained' color='success'>Click me!</Button>
            {/* <button onClick={increase}>Click me!</button> */}
        </div>
    )
}

export default ReactMemo

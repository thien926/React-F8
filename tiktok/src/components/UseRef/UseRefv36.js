import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'

// Lưu các giá trị qua một tham chiếu bên ngoài function component

function UseRefv36() {
    const [count, setCount] = useState(60);

    const timerId = useRef();
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count;

        //   return () => {
        //     second
        //   }
    }, [count])


    const handleStart = () => {
        if (typeof timerId.current === 'undefined') {
            timerId.current = setInterval(() => {
                setCount(prev => prev - 1);
            }, 1000);

            console.log('Start:', timerId);
        }
    }

    const handleStop = () => {
        clearInterval(timerId.current);
        timerId.current = undefined;
        console.log('Stop:', timerId);
    }

    return (
        <React.Fragment>
            <h1>{count}</h1>
            <h2>{prevCount.current}</h2>
            <Button onClick={handleStart} variant='contained' color='primary'>Start</Button>
            <Button onClick={handleStop} variant='contained' color='error'>Stop</Button>
        </React.Fragment>
    )
}

export default UseRefv36

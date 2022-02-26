import React, { useState } from 'react'
import { Button } from '@mui/material';

function UseStateDemo() {
    const [counter, setCounter] = useState(1);

    const handlIncrease = () => {
        setCounter(counter + 1);
    }

    return (
        <React.Fragment>
            <h1>{counter}</h1>
            <Button variant='contained' color='secondary' onClick={handlIncrease} >Increase</Button>
        </React.Fragment>
    );
}

export default UseStateDemo

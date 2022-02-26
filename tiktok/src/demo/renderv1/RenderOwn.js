import React, { useState } from 'react'
import { Button } from '@mui/material'
import RenderChildren from './RenderChildren';

let numberRender = 0;
function RenderOwn() {

    // khi handlIncrease thì function RenderOwn dc render lại
    // khi setTest ở function RenderChildren thì function RenderOwn không render lại
    // Khi RenderChildren nhận props từ RenderOwn và props hiện setTest props thì RenderOwn dc render lại

    numberRender++;
    console.log("RenderOwn:", numberRender);

    const [counter, setCounter] = useState(1);
    // const [test, setTest] = useState(1);

    const handlIncrease = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <h1>{counter}</h1>
            <Button variant='contained' color='secondary' onClick={handlIncrease} >Increase</Button>
            {/* <RenderChildren test={test} setTest={setTest} /> */}
            <RenderChildren />
        </div>
    );
}

export default RenderOwn

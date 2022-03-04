import { Button } from '@mui/material';
import React, { memo } from 'react'

function Content({ onIncrease }) {
    console.log('re-render');
    return (
        <React.Fragment>
            <h2>HELLO ANH EM F8</h2>
            <Button onClick={onIncrease} variant='contained' color='success'>Click me!</Button>
        </React.Fragment>
    )
}

export default memo(Content)

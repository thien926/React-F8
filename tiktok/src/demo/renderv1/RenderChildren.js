import React, { useState } from 'react'
import { Button } from '@mui/material'

function RenderChildren() {
    const [test, setTest] = useState(1);
    return (
        <React.Fragment>
            <Button variant='contained' color='success' onClick={() => setTest(test + 1)}>Click me {test}</Button>
        </React.Fragment>
    )
}

export default RenderChildren

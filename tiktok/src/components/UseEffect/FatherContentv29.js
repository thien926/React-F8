import React, { useState } from 'react'
import { Button } from '@mui/material'
import Contentv29 from './Contentv29';
function FatherContentv29() {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <Button onClick={() => setShow(!show)} variant='contained' color='warning'>Toggle</Button>
            { show && <Contentv29 /> }
        </React.Fragment>
    )
}

export default FatherContentv29

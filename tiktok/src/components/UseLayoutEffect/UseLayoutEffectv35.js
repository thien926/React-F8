import { Button } from '@mui/material';
import React, { useState } from 'react'
import Contentv35 from './Contentv35';

function UseLayoutEffectv35() {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <Button onClick={() => setShow(!show)} variant='contained' color='warning'>Toggle</Button>
            { show && <Contentv35 /> }
        </React.Fragment>
    )
}

export default UseLayoutEffectv35

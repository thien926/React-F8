import React, { useState } from 'react'
import { Button } from '@mui/material'
import Contentv29 from './Contentv29';
import Contentv32 from './Contentv32';
import Contentv33 from './Contentv33';
function FatherContentv29() {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <Button onClick={() => setShow(!show)} variant='contained' color='warning'>Toggle</Button>
            { show && <Contentv33 /> }
        </React.Fragment>
    )
}

export default FatherContentv29

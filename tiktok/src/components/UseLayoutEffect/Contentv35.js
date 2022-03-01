import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button } from '@mui/material';
// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lai UI
// 4. Goi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback


// uselayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi uselayoutEffect callback (sync)
// 5. Render lai UI

function Contentv35() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }

        //   return () => {
        //     second
        //   }
    }, [count])


    const handleRun = () => {
        setCount(count + 1);
    }

    return (
        <React.Fragment>
            <h1>{count}</h1>

            <Button onClick={handleRun} variant='contained' color='success'>Run</Button>
        </React.Fragment>
    )
}

export default Contentv35

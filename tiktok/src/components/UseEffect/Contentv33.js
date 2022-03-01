import React, { useEffect, useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';

function Contentv33() {
    // const [count, setCount] = useState(1);
    // useEffect(() => {
    //     console.log(`Mounted or Re-render lần ${count}`);

    //     return () => {
    //         console.log(`Cleanup lần ${count}`);
    //     }
    // }, [count])

    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <Button onClick={() => setCount(count + 1)} variant='contained' color='warning'>Click me!</Button>
    //     </div>
    // )

    // ========================================================================

    const [avatar, setAvatar] = useState();

    useEffect(() => {


        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar])


    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        if (file) {
            file.preview = URL.createObjectURL(file);
        }
        setAvatar(file);
    }

    return (
        <div>
            <TextField type='file' onChange={handlePreviewAvatar} />
            {avatar && (
                <Paper variant="outlined" square>
                    <img src={avatar.preview} alt='' />
                </Paper>
            )}
        </div>
    )
}

export default Contentv33

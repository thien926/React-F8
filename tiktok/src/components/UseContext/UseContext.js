import React, { createContext, useState } from 'react';
import { Button } from '@mui/material';
import Content from './Content';

const ThemeContext = createContext();

function UseContext() {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <ThemeContext.Provider>
        <div>
            <Button onClick={toggleTheme} variant='contained' color='primary'>
                Toggle theme
            </Button>
            <Content theme={theme} />
        </div>
        </ThemeContext.Provider>
    )
}

export default UseContext

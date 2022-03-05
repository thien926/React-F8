import { Button, TextField } from '@mui/material'
import React, { useReducer, useRef } from 'react';
import { addJob, deleteJob, setJob } from './actions';
import logger from './logger';
import reducer, { initialState } from './reducer';

function Todo() {
    const [state, dispatch] = useReducer(logger(reducer), initialState);

    const { job, jobs } = state;

    const inputRef = useRef();

    // console.log(state);

    const handleSubmit = () => {
        if (job) {
            dispatch(addJob(job));
            dispatch(setJob(''));
            // console.log(inputRef);
            // inputRef.current.focus();
        }
    }

    return (
        <React.Fragment>
            <h3>Todo</h3>
            <TextField ref={inputRef} value={job} onChange={e => dispatch(setJob(e.target.value))} type='text' label='Todo' placeholder='Enter todo...' /> <br />
            <Button onClick={handleSubmit} sx={{ marginTop: '20px' }} variant='contained' color='primary'>Add</Button>
            <ul>
                {
                    jobs.map((item, index) => (
                        <li key={index}>{item} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
                    ))
                }
                {/* <li>Rửa bát &times;</li>
                <li>Quét nhà &times;</li>
                <li>Lau nhà &times;</li> */}
            </ul>
        </React.Fragment>
    )
}

export default Todo

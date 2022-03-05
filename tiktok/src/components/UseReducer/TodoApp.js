import { Button, TextField } from '@mui/material'
import React, { useReducer, useRef } from 'react';

const initialState = {
    job: '',
    jobs: []
}

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            let newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);

            return {
                ...state,
                jobs: newJobs
            }
        default:
            break;
    }
}


function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { job, jobs } = state;

    const inputRef = useRef();

    console.log(state);

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

export default TodoApp

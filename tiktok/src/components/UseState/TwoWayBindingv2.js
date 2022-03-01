import React, { useState } from 'react';
import { Button, TextField, FormControlLabel, Radio, Checkbox } from '@mui/material';

// const gifts = [
//     'CPU 19',
//     'RAM 32GB RGB',
//     'RGB Keyboard'
// ];

const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascrip'
    },
    {
        id: 3,
        name: 'ReactJS'
    }
];

function TwoWayBindingv2() {

    // const [gift, setGift] = useState(null);
    // const randomGift = () => {
    //     const index = Math.floor(Math.random() * gifts.length);
    //     setGift(gifts[index]);
    // }

    // Radio
    // const [checked, setChecked] = useState('Javascrip');

    // CheckBox
    const [checked, setChecked] = useState([]);

    const handleSubmit = () => {
        console.log({ name: checked });
    }

    const handleChecked = (name) => {
        setChecked(prev => {
            if (checked.includes(name)) {
                return checked.filter(item => item !== name);
            }
            else {
                return [...prev, name];
            }
        });
    }
    console.log(checked);

    return (
        <React.Fragment>
            {/* <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <Button onClick={randomGift} variant='contained' color='primary'>Lấy thưởng</Button> */}

            {/* Radio */}
            {/* {
                courses.map(coure => (
                    <FormControlLabel checked={checked === coure.name} onChange={() => setChecked(coure.name)} key={coure.id} value={coure.name} control={<Radio />} label={coure.name} />
                ))
            } */}

            {/* CheckBox */}
            {
                courses.map(coure => (
                    <FormControlLabel checked={checked.includes(coure.name)} onChange={() => handleChecked(coure.name)} key={coure.id} value={coure.name} control={<Checkbox />} label={coure.name} />
                ))
            }

            <Button onClick={handleSubmit} variant='contained' color='success'>Submit</Button>
        </React.Fragment>
    )
}


export default TwoWayBindingv2

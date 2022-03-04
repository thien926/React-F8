import { Box, Button, TextField } from '@mui/material'
import React, { useMemo, useRef, useState } from 'react';

function UseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        console.log(name, price);
        setProducts([...products, {
            name,
            price: Number(price)
        }]);

        setName('');
        setPrice('');
        nameRef.current.focus();
    }

    console.log(products);

    // const total = products.reduce((res, product) => {
    //     console.log('Tính toán lại...')
    //     return res + product.price;
    // }, 0);

    const total = useMemo(() => {
        const result = products.reduce((res, product) => {
            console.log('Tính toán lại...')
            return res + product.price;
        }, 0);
        return result;
    }, [products])

    return (
        <React.Fragment>
            <TextField ref={nameRef} value={name} onChange={(e) => setName(e.target.value)} type='text' label='Name' placeholder='Enter name...' style={{ marginTop: '20px' }} /> <br />
            <TextField value={price} onChange={(e) => setPrice(e.target.value)} type='number' label='Price' placeholder='Enter price...' style={{ marginTop: '20px' }} /><br />
            <Button onClick={handleSubmit} variant='contained' color='success' style={{ marginTop: '20px' }}>Add</Button><br />
            <label style={{ marginTop: '20px' }}>
                Total: {total}
                <ul>
                    {
                        products.map((product, index) => (
                            <li key={index}>{product.name} - {product.price}</li>
                        ))
                    }
                </ul>
            </label><br />
        </React.Fragment>
    )
}

export default UseMemo

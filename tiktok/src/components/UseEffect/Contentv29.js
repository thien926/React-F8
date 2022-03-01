import React, { useEffect, useState } from 'react';
import { TextField, Tabs, Tab, Box, Button } from '@mui/material';


// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted

// Call API
/**
1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Clear timer
    - Remove listener / Unsubscribe
*/

/**
 * 1. useEffect(callback)
 *  - Gọi callnback mỗi khi component re-render
 *  - Gọi callback sau khi component thêm element vào DOM
 * 2. useEffect(callback, [])
 *  - Chỉ gọi callback 1 lần sau khi component mounted
 * 3. useEffect(callback, [deps])
 *  - Callback sẽ được gọi lại mỗi khi deps thay đổi
 * @returns
 */

// ----------
// 1.   Callback luôn được gọi sau khi component mounted
// 2.   Cleanup function luôn được gọi trước khi component unmounted
// 3.   Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

// FQA
// 1. Callback gọi sau khi elements duược mounted vào DOM
// 2. Phân biệt Mounted & Re-render
// 3. Có thể sử dụng nhiều dependencies, it nhất 1 dependency thay đổi
// 4. Sử dụng dependencies khi nào?
// 5. Có nên viết nhiều logic khác nhau trong 1 useEffect?
// 6. Phân biệt cách truyền callback qua props
// 7. Khi setState cùng một giá trị thi component sẽ không re-render

const tabs = ['posts', 'comments', 'albums'];

function Contentv29() {

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [showGoToTop, setShowGoToTop] = useState(false);

    const [type, setType] = useState(0);

    useEffect(() => {
        console.log(tabs[type]);
        fetch(`https://jsonplaceholder.typicode.com/${tabs[type]}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
        // console.log('Mounted Contentv29');
    }, [type]);

    const handleChange = (event, newValue) => {
        setType(newValue);
    };


    useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200);
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            // console.log('Unmounted...');
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div>
            <TextField type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            <h1>Hello ae F8</h1>

            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={type} onChange={handleChange} centered>
                    {
                        tabs.map((item, index) => (
                            <Tab key={index} label={item} />
                        ))
                    }
                    {/* <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" /> */}
                </Tabs>
            </Box>

            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>
            {/* {console.log('Gọi callback sau khi component thêm element vào DOM\n1. console.log này trước\n2. Mounted Contentv29')} */}
            {showGoToTop && <Button variant='contained' color='success' style={{ position: 'fixed', right: 20, bottom: 20, }}>Go To Top</Button>}
        </div>
    )
}

export default Contentv29

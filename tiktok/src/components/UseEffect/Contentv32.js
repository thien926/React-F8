import React, { useEffect, useState } from 'react'
/**
 * 1. SetInterval
 * 2. SetTimeout
 * 3. ListenerEvent
 * 4. Subscribe Event
 * 5. Async bất đồng bộ
 *
 * ==> useEffect có cleanup
 * @returns
 */
function Contentv32() {
    const [countDown, setCountDown] = useState(180);

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(prev => prev - 1);
            // console.log('CountDown:', countDown);
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, [])


    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}

export default Contentv32

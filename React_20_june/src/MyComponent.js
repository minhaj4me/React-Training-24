import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component did mount');

        const cI=setInterval(() => {
            setCount(count => count + 1)
        }, 1000);

        return () => {
            clearInterval(cI)
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Component did update: count changed to', count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
}

export default MyComponent;

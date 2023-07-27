import { useState, useEffect } from 'react';

export const useCustomHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`The count is now ${count}`);
    }, [count]);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const reset = () => {
        setCount(0);
    }

    return { count, incrementCount, reset };
};

import { useState, useEffect, useRef } from 'react';
import { ApiService } from '../services';

const useApp = () => {
    const ref = useRef(0);

    const [isLoading, setIsLoading] = useState(() => false);

    console.log('====================================');
    console.log(++ref.current);
    console.log('====================================');

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const result = await ApiService.post('products/add', {
                userId: 1,
                id: 1,
            });

            console.log('====================================');
            console.info(result);
            console.log('====================================');

            setIsLoading(false);
        })();
    }, []);

    return { isLoading };
};

export default useApp;

import React, { useState, useEffect } from 'react';

export const useDebounce = (input: string ='', time: number =500) => {

    const [debouncedValue, setDebouncedValue] = useState(input);


    /* con esto implemento el debouncer, cada vez que se dispara el useeefect creo una istancia de tieour y la destruyo */
    useEffect(() => {
      
        const timeout =setTimeout(() => {

            setDebouncedValue(input);
            
        }, time);
    
        return ()=>{
            clearTimeout(timeout);
        }
      
    }, [input]);
    

    return debouncedValue;

};

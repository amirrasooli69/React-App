import React, { useReducer } from 'react';

const avalie = 0;

const func = (current , action) => {
    switch(action) {
        case 'Up' : 
            return current + 1;
        case 'Down':
            return current -1;
        case 'Reset':
            return avalie;
        default: 
            return current;
    }
    
}

const Data = () => {
    
    const [number , dispatch] = useReducer(func , avalie)
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={() => dispatch('Up')}>Up</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>
            <button onClick={() => dispatch('Down')}>Down</button>

        </div>
    );
};

export default Data;
import React, { useReducer } from 'react';

const avalie = {
    num1:0,
    num2:5
};

const func = (current , action) => {
    switch(action.type) {
        case 'Up' : 
            return {...current , num1: current.num1 + action.value}
        case 'Down':
            return {...current , num1: current.num1 - action.value}
        case 'Up2' : 
            return {...current , num2: current.num2 + action.value}
        case 'Down2':
            return {...current , num2: current.num2 - action.value}
        case 'Reset':
            return avalie;
        default: 
            return current;
    }
    
}

const Data = () => {
    
    const [number , dispatch] = useReducer(func , avalie)
    const [number2 , dispatch2] = useReducer(func , avalie);
    return (
        <div>
            <h2>{number.num1}</h2>
            <button onClick={() => dispatch({type:'Up' , value:3})}>Up</button>
            <button onClick={() => dispatch({type :'Reset'})}>Reset</button>
            <button onClick={() => dispatch({type:'Down' , value:3})}>Down</button>
            <hr />
            <h2>{number2.num1}</h2>
            <button onClick={() => dispatch2({type:'Up' , value:3})}>Up</button>
            <button onClick={() => dispatch2({type :'Reset'})}>Reset</button>
            <button onClick={() => dispatch2({type:'Down' , value:3})}>Down</button>
        </div>
    );
};

export default Data;
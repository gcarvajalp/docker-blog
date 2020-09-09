import React, {useReduce} from 'react';

function init(initialCount){
    return {count: initialCount}
}

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count +1}
        case 'decrement':
            return {count: state.count -1}
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function CounterReducer({initialCount}){
    const [state, dispath] = useReduce(reducer, initialCount, init);
    return (
        <>
        Count: {state.count}
        <button onClick={() => dispath({type: 'reset', payload: initialCount})}>reset</button>
        <button onClick={() => dispath({type: 'decrement'})}>-</button>
        <button onClick={() => dispath({type: 'increment'})}>+</button>
        </>
    );
}

export default CounterReducer;

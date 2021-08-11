import React, { useReducer } from 'react'

const initialSate = {
    counter: 0,
}
const reducer = (state,action) => {
    switch (action.type){
        case 'increment':
            return {counter: state.counter + action.value};
        case 'decrement': 
            return {counter: state.counter - action.value};
         default:
             return state;       
    }
}

export default function ComplexCounter() {
   const [count,dispatch] = useReducer(reducer, initialSate)


    return (
        <div>
            <div>Count  {count.counter}</div>
            <button type="button" onClick={() => dispatch({type:'increment',value:1})}>Increment 1</button>
            <button type="button" onClick={() => dispatch({type:'increment',value:5})}>Increment 5</button>
            <button type="button" onClick={() => dispatch({ type:'decrement',value:1})}>Decrement -1</button>
            <button type="button" onClick={() => dispatch({ type:'decrement',value:5})}>Decrement -5</button>
        </div>
    )
}

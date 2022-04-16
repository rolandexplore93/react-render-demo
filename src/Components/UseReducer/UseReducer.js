import React, { useReducer } from 'react'

// useReducer and Render
// The dispatch function from a useReducer hook will cuase the component to re-render
// The exception is when you update the state value as the current state
// Same value after the initial render? The component will not re-render
// Same value after the re-renders? React will render that specific component one more time and then bails out from any susbequent renders.
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return initialState;
            
        default: return state
    }
}

function UseReducer(){
    const [count, dispatch] = useReducer(reducer, initialState)

    console.log("UseReducer")

  return (
    <div>
        <h4>{count}</h4>
        <button onClick={() => dispatch('increment')}>Increment Count</button>
        <button onClick={() => dispatch('decrement')}>Decrement Count</button>
        <button onClick={() => dispatch('reset')}> Reset Count</button>
    </div>
  )
}

export default UseReducer





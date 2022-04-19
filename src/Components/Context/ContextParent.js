import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChildren'

// Create context and provide it to the ChildA component tree
export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => {
    const [count, setCount] = useState(0)

    console.log('ContextParent Render')

  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
        <CountProvider value={count}>
            {/* Memoized solve performance optimization issue in Context API*/}
            {/* <MemoizedChildA /> */}

            {/* SERT */}
            {children}
        </CountProvider>
    </div>
  )
}

// CONTEXT AND SERT
// Destructure the children and specify the same as children to the context provider
// In App.js, modify the context parent invocation. Use opening and closing tags instead of self closing tag for the parebt component
// 

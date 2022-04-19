import React, { useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {

    console.log('Child A Render')
    return (
        <>
            <div>Child A</div>
            <ChildB />
        </>
    )
}
// Apply react memo to the component A where comp. c is a child
// This solve performance optimization issue in Context API
export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {

    console.log('Child B Render')
    return (
        <>
          <div>Child B</div>
          <ChildC />
        </>
    )
}

export const ChildC = () => {
    // This consumes the context value whose value has been changed
    const count = useContext(CountContext) 
    console.log('Child C Render')
    return (
        <>
          <div>Child C - {count }</div>
        </>
    )
}
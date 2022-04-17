import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'
import { MemoizedChildThree } from './ChildThree'

// Incorrect memo with children
function ParentThree() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Roland')

    console.log("ParentThree Render")
    
  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
        {/* <button onClick={() => setCount(0)}>Count to 0 - {count}</button> */}
        {/* <button onClick={() => setCount(5)}>Count to Five - {count}</button> */}
        <button onClick={() => setName("Codevolution")}>Change name - {name}</button>
        {/* <MemoizedChildThree name={name}>
            Hello
        </MemoizedChildThree> */}
        <MemoizedChildFour name={name} />
    </div>
  )
}

export default ParentThree
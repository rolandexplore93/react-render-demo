import React, { useState } from 'react'
import {MemoizedChildTwo} from './ChildTwo'

// BUG: Fixing unneccesary re-render in child component using React.memo() in child component
 function ParentTwo() {
    const [count, setCount] = useState(0)

    console.log("ParentTwo Render")
    // Read about object.ease()
  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
        <button onClick={() => setCount(0)}>Count to 0 - {count}</button>
        <button onClick={() => setCount(5)}>Count to Five - {count}</button>
        <MemoizedChildTwo />
    </div>
  )
}

export default ParentTwo
import React, { Children, useState } from 'react'
// import { ChildOne } from './ChildOne'

// BUG: Fixing unneccesary re-render in child component
 function ParentOne({children}) {
    const [count, setCount] = useState(0)

    console.log("ParentOne Render")
    // Read about object.ease()
  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
        <button onClick={() => setCount(0)}>Count to 0 - {count}</button>
        <button onClick={() => setCount(5)}>Count to Five - {count}</button>
        {/* <ChildOne /> */}
        {children}
    </div>
  )
}

export default ParentOne
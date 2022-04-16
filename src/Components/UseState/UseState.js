import React, { useState } from 'react'

function UseState() {
    const [count, setCount] = useState(0)

    console.log("Render UseState")
    // Read about object.ease()
  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
        <button onClick={() => setCount(0)}>Count to 0 - {count}</button>
        <button onClick={() => setCount(5)}>Count to Five - {count}</button>
    </div>
  )
}

export default UseState
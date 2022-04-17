import React, { useState } from 'react'
import { MemoizedChildFive } from './ChildFive'
// import { MemoizedChildFour } from './ChildFour'
// import { MemoizedChildThree } from './ChildThree'

// INCORRECT MEMO WITH PROPS REFERENCE
function ParentFour() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Roland') 

    // Display a person fname and lname in the component. So, we need to create an object
    const person = {
        fname: "Orobola",
        lname: "Ogundipe"
    }

    // a click handler function also have the same behavior
    const handleClick =  () => {}

    console.log("ParentFour Render")
    
  return (
    <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
        {/* <button onClick={() => setCount(0)}>Count to 0 - {count}</button> */}
        {/* <button onClick={() => setCount(5)}>Count to Five - {count}</button> */}
        <button onClick={() => setName("Codevolution")}>Change name - {name}</button>
        {/* <MemoizedChildThree name={name}>
            Hello
        </MemoizedChildThree> */}
        {/* <MemoizedChildFour name={name} /> */}
        <MemoizedChildFive name={name} person={person} />
    </div>
  )
}

export default ParentFour
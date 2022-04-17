import React, { useCallback, useMemo, useState } from 'react'
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

    // useMemo() solves the problem of incorrect memo with {} props reference
    // import useMemo() and wrap the person objectinside
    const memoizedPerson = useMemo(() => person, [])

    // a click handler function also have the same behavior
    const handleClick =  () => {}
    // useCallback() solves the problem of incorrect memo with ()=>{} props reference
    // import useCallback() and wrap the handleclick function inside
    const memoizedHandleClick = useCallback(handleClick, [])

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
        <MemoizedChildFive name={name} person={memoizedPerson} />
        {/* <MemoizedChildFive name={name} handleClick={memoizedHandleClick} /> */}
    </div>
  )
}

export default ParentFour
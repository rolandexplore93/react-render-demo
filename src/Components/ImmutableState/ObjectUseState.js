import React, {useState} from 'react'

// Rendering and immutability of {} and []
// 2. Create an object which is the initial value state {} of the useState Hook
const initialState = {
    firstname: "Orobola",
    lastname: "Ogundipe"
}
export const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState)
    const {firstname, lastname} = person


    const changeStateName = () => {
        // To change the value of an {}, do not mutate it directly. Bcos, the Object.is Algorithms in React will not allow it to work
        // Instead, create a replica of the object using spread operators
        // Update the new {} with the intended change
        // Call the setPerson() function and passing the new {} values for the state
        const newPerson = {...person}
        newPerson.firstname = "Adeboye"
        newPerson.lastname = "Malik"
        setPerson(newPerson)   
        console.log(newPerson)

    
    }
    console.log("Render ObjectUseState")
  return (
    <div>
        <button onClick={changeStateName}>{firstname} {lastname}</button>
    </div>
  )
}

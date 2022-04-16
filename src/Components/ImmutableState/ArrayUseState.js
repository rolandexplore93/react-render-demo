import React, {useState} from 'react'

// Create an [] containing the initial values
const initArray = ["Roland", "Prowess"]

export const ArrayUseState = () => {
    const [person, setPerson] = useState(initArray)

    const handleClick = () => {
        // [] do not re-render in first instance. So, do not mutate an array directly. Bcos, Array reference will not change for React to queue up a re-rendering
        // [] values can change but [] reference cannot change
        // Solution: create a replica of the [] using spread operators
        // push new values to the [] 
        // Call the setter function and passing the new [] values
        const newPerson = [...person]
        newPerson.push("Adeboye")
        newPerson.push("Jason")
        setPerson(newPerson)
        console.log(newPerson)
    }

  return (
    <div>
        <button onClick={handleClick}>Populate Names</button>
        {
            person.map(each => (
                <p key={each}>{each}</p>
            ))
        }
    </div>
  )
}

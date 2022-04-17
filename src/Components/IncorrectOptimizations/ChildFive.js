import React from 'react'

// INCORRECT MEMO WITH PROPS REFERENCE
export const ChildFive = ({name, person}) => {

    console.log("ChildFive Render")
  return (
    <div>
        Hello {name} {person.fname} {person.lname}
        {/* clickHandler Testing */}
        {/* Hello {name} */}

    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)
import React from 'react'

// INCORRECT MEMO WITH PROPS REFERENCE
export const ChildFive = ({name}) => {

    console.log("ChildFive Render")
  return (
    <div>
        Hello {name}
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)
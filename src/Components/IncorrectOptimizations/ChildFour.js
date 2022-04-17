import React from 'react'

// INCORRECT MEMO WITH IMPURE COMPONENT
export const ChildFour = ({name}) => {
    const date = new Date()

    console.log("ChildFour Render")

  return (
    <div>
        Hello {name}. Time now is {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
    </div>
  )
}

// export the memoized version of ChildFour
// optimized component
export const MemoizedChildFour = React.memo(ChildFour)


// NOTE
// When dealing with impure component, be aware of the consequences when using React.memo()
// Impure components are components where their JSX can change even though props and state remain the same

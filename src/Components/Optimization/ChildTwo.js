import React from 'react'

// BUG: Fixing unneccesary re-render in child component using React.memo()
export const ChildTwo = () => {

    console.log("ChildTwo Render")

  return (
    <div>ChildTwo</div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)

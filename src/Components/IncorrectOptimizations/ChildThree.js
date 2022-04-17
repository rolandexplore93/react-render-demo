import React from 'react'

// INCORRECT MEMO WITH CHILDREN
export const ChildThree = ({children, name}) => {

    console.log("ChildThree Render")

  return (
    <div>
        {children} {name}
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)

// Memonization also works if you pass in a text node (i.e childcren props)
{/* <MemoizedChildThree name={name}>
           <strong> Hello <strong>
        </MemoizedChildThree> 

        This will cause the above the parent component to re-render bcos we are passing in an incorrect memo as children
*/}
// There is no need to wrap child component with React.memo if the child component itself has children element

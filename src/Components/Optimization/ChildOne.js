import React from 'react'

// BUG: Fixing unneccesary re-render in child component
export const ChildOne = () => {
    console.log("ChildOne Render")
  return (
    <div>ChildOne</div>
  )
}

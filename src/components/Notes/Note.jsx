import React, { forwardRef } from 'react'

const Note = forwardRef(({ content, initialPos, ...props }, ref) => {
  return (
    <div 
        ref={ref}
        style={{
            position: "absolute",
            left: initialPos?.x,
            top: initialPos?.y,
            border: "1px solid black",
            userSelect: "none",
            padding: "10px",
            width: "200px",
            cursor: "move",
            backgroundColor: "lightyellow"
        }}
        {...props}
    >
      <h2>{content}</h2>
    </div>
  )
})

export default Note

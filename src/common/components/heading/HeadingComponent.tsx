import React from 'react'

interface HeadingProps {
    heading: string
}

const HeadingComponent = ({heading}: HeadingProps) => {
  return (
    <div className='heading'>{heading}</div>
  )
}

export default HeadingComponent
import React from 'react'

interface SubHeadingProps {
    subHeading: string
}

const SubHeadingComponent = ({subHeading}: SubHeadingProps) => {
  return (
    <div className='sub-heading'>{subHeading}</div>
  )
}

export default SubHeadingComponent
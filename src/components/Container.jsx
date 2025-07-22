import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 ${className}`}>{children}</div>
  )
}

export default Container
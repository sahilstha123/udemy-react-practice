import React from 'react'
import "../App.css"
const TabButton = ({children}) => {
  return (
    <div>
        <button className=' px-4 py-2  hover:bg-[#76447a] hover:cursor-pointer'>{children}</button>
    </div>
  )
}

export default TabButton
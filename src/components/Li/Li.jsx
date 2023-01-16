import React from "react"
 
const Li = ({ href, li_name, setMenuOpen }) => {
  return (
    <a href={href} onClick={() => setMenuOpen(false)}>
      <li>{li_name}</li>
    </a>
  )
}

export default Li

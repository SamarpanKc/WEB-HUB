import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav>
          <div className="Logo">
            Samarpan KC
          </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Follow Me</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
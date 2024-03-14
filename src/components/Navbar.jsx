import React from 'react'
import Logo from '../img/logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'><img src={Logo} alt="" /></div>
        <div className='navigation'>
                <div>About Us</div>
                <div>Careers</div>
                <div>Presence Across India</div>
        </div>
        <div className='contactDetails'>
            <div>twinhatch64@gmail.com</div>
            <div>+9187798236</div>
        </div>
    </div>
  )
}

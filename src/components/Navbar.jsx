import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">OCT</span>
        <div className="user">
            <img src="https://cdn5.vectorstock.com/i/1000x1000/32/64/portrait-of-a-muslim-man-vector-22393264.jpg" alt="" />
            <span>Yamin</span>
            <button>Logout</button>

        </div>
    </div>
  )
}

export default Navbar
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const {logOut, currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <span className="logo">OCT</span>
        <div className="user">
            <img src="https://cdn5.vectorstock.com/i/1000x1000/32/64/portrait-of-a-muslim-man-vector-22393264.jpg" alt="" />
            <span>Yamin</span>
            {currentUser?
              <button onClick={()=>logOut()} className='button'>LogOut</button>:
              <Link to="/login" className="">LogIn</Link>
            }
            
            

        </div>
    </div>
  )
}

export default Navbar
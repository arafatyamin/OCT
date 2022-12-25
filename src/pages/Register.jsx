import React from 'react';
import img from '../img/OIP.jfif'

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">
                OCT Chat
                </span>
                    <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="full name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{display:"none"}} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={img} alt="" />
                        <p>Add an avatar</p>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;
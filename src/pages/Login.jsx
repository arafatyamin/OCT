import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    const handleSubmit = (e) =>{
        console.log(e)
    }

    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">
                OCT Chat
                </span>
                    <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    
                    <button>Sign In</button>
                </form>
                <p>You do have an account? <Link to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
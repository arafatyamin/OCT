import React, { useContext, useState } from 'react';
import img from '../img/OIP.jfif'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].value;
    
        console.log(file,displayName,email,password);

            
        const url = `https://api.imgbb.com/1/upload?key=21faedf05bc7952fab40f5291fa76110`
        fetch(url, {
            method: 'POST',
            body: file,
        })
        .then(res => res.json())
        .then(imgData => {
            console.log(imgData)
            if(imgData.success) {

                createUser(email, password)
            .then(result => {
                updateUserProfile(displayName, imgData.url)
                .then(result =>{
                    alert('User Created Successfully.')
                })

        
        })
        .catch(error => {
            console.log(error)
            setSignUPError(error.message)
        });
    }
})
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">
                OCT Chat
                </span>
                    <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="full name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{display:"none"}} type="file" id='file' />
                    <label htmlFor="file">
                        <img src={img} alt="" />
                        <p>Add an avatar</p>
                    </label>
                    <button>Sign Up</button>
                    {signUpError && <span>Something went wrong</span>}
                </form>
                <p>You do have an account? <Link to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
import React from 'react';
import './Login.css'
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name,
                email,
                password,
                loggedIn: true
            })
        )
    }
    return (
        <div className='login'>
            <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here </h1>
                <input type='text' name='login' placeholder='Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type='email' name='login' placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type='password' name='login' placeholder='Password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="submit__btn" type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
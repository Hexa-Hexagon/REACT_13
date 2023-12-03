import React from 'react';
import './Logout.css'
import { selectUser, logout } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Logout = () => {
    
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            logout({
                loggedIn: false
            })
        )
    }
    return (
        <div className='logout'>
            <form action="" onSubmit={e => handleSubmit(e)}>
            <h1>
                Welkome <span className='user__name'>{user.name}</span>
            </h1>
            <input type='submit' className='logout__button' value={'Logout'} />
            </form>
        </div>
    );
};

export default Logout;
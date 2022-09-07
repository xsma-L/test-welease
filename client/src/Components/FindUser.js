import axios from 'axios';
import { React, useEffect, useState } from 'react';

function FindUser(props) {

    const userId = props.id;

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${userId}`)
        .then(res => {
            setUser(res.data)
        }).catch(err => console.log(err))
    },[])
    return (
        <>
            { Object.keys(user).length ?
                <>
                    <div className='user-pic-container'>
                        <img src={user.image} alt={`${user.firstName} ${user.lastName} profile picture`} />
                    </div> 
                    <span className='user-name'>{`${user.firstName} ${user.lastName}`}</span>
                </>
            :""}
        </>
    );
}

export default FindUser;
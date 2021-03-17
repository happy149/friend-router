import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    let {friendId} = useParams()
    const [friend, setFriend] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    }, [])
    return (
        <div>
            <h1>This is friend details {friendId}</h1>

            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>url: {friend.url}</p>
        </div>
    );
};

export default FriendDetail;
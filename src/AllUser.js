import React, {useEffect, useState} from 'react';
import './AllUser.css'

function AllUser() {

    const [users, setUsers] = useState([]);

    console.log(users)

    useEffect(() =>{
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    },[])

    return (
        <div>
            <h2>
                All User...
            </h2>
            <div className="">
                {
                    users.map(user=> 
                        <div className="user">
                            <p>{user.name}</p> 
                            <p>{user.user}</p> 
                            <p>{user.email}</p> 
                            <p>{user.phone}</p>
                            <button>edit</button>
                            <button>Delete</button>
                        </div>                                               
                    )
                }
            </div>
        </div>
    )
}

export default AllUser

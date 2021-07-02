import React, { useState } from 'react'
import AddUser from './AddUser'
import AllUser from './AllUser'

function Home() {

    const [ show, setShow ] = useState(true);

    return (
        <div>
            <button onClick={()=>setShow(true)}>All User</button>
            <button onClick={()=>setShow(false)}>Add User</button>
            {
                show?<AllUser />:
                <AddUser />
            }
        </div>
    )
}

export default Home

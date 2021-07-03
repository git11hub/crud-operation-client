import React, { useEffect, useState } from "react";
import "./AllUser.css";

function AllUser() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  console.log(users);

  const loadProduct = (id) => {
    fetch(`http://localhost:5000/user/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data)
      });
  };

  const updateProduct = () => {
      console.log('updating...', user._id)
      const userInfo = {id:user._id, name: user.name, user: user.user, email: user.email, phone: user.phone }
      fetch(`http://localhost:5000/update/${user._id}`, {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      .then(res => res.json())
      .then(data => {
          console.log("updated hohoho...")
      })
  }

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("DELETED SUCCESSFULLY YAHOO!...", data);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h2>All User...</h2>
      <div className="">
        {users.map((user) => (
          <div key={user._id} className="user">
            <p>{user.name}</p>
            <p>{user.user}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={() => loadProduct(user._id)}>edit</button>
            <button onClick={() => deleteProduct(user._id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="edit">
          
        <h4>Name: <input type="text" value={user.name} /></h4>
        <h4>User: <input type="text" value={user.user} /></h4>
        <h4>Email: <input type="text" value={user.email} /></h4>
        <h4>Phone: <input type="text" value={user.phone} /></h4>
        <button onClick={() => updateProduct()}>Submit</button>
            
      </div>
    </div>
  );
}

export default AllUser;

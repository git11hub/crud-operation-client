import React, { useEffect, useState } from "react";
import "./AllUser.css";

function AllUser() {
  const [users, setUsers] = useState([]);

  console.log(users);

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
            <button>edit</button>
            <button onClick={() => deleteProduct(user._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllUser;

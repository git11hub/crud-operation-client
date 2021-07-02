import React from 'react';
import { useForm } from "react-hook-form";

function AddUser() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            user: data.user,
            email: data.email,
            phone: data.phone
        };
        console.log(eventData);
        const url = `http://localhost:5000/addUser`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };

    return (
        <div>
            <h3>add user...</h3>
            

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" defaultValue="" {...register("name")} /><br /><br />
                <input placeholder="User Name" defaultValue="" {...register("user")} /><br /><br />
                <input placeholder="Email" defaultValue="" {...register("email")} /><br /><br />
                <input placeholder="Phone" defaultValue="" {...register("phone")} /><br /><br />
                
                {/* <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}<br /><br /> */}
                
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddUser

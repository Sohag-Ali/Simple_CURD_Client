import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData();
    console.log(user);
    const handleUpdateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name,email);
        const updateUser = {name, email}
        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateUser

            )
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                alert('User update')
            }
            console.log('after update', data);
        })

    }
    return (
        <div>
            <h3>updte data</h3>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" defaultValue={user.name} />
                <br />
                <input type="email" name="email" id="" defaultValue={user.email} />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;
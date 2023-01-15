import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, selectUser, userSelected}) => {

    const {handleSubmit, register, reset} = useForm()   

    const emptyUser = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    }

    useEffect(() => {
        if (userSelected) {
        reset(userSelected)
        } else {
            reset(emptyUser);
        }
    },[userSelected]);
    
    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://users-crud.academlo.tech/users/${id}/`, data)
            .then(() => getUsers())
            .catch(error => console.log(error))
            getUsers();
            selectUser(null);
        } else {
            axios.post("https://users-crud.academlo.tech/users/", data)
        .then(() => getUsers())
        .catch(error => console.log(error))
        reset(emptyUser)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" 
                id='email'
                {...register("email")}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" 
                id='password'
                {...register("password")}
                />
            </div>
            <div>
                <label htmlFor="first_name">First Name</label>
                <input type="texto" 
                id='first_name'
                {...register("first_name")}
                />
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input type="texto" 
                id='last_name'
                {...register("last_name")}
                />
            </div>
            <div>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" 
                id='birthday'
                {...register("birthday")}
                />
            </div>
            <button>Submit</button>
        </form>
    );
};

export default UsersForm;
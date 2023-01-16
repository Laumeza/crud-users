import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUsers, selectUser, userSelected}) => {

    const {handleSubmit, register, reset} = useForm()   

    const emptyUser = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
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
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
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
        <form onSubmit={handleSubmit(submit)} className="form">
            <div className='form__input-container'>
                <label htmlFor="first_name" className='form__label'>First Name</label>
                <input type="texto" className='form__input'
                id='first_name'
                {...register("first_name")}
                />
            </div>
            <div  className='form__input-container'>
                <label htmlFor="last_name" className='form__label' >Last Name</label>
                <input type="texto"  className='form__input'
                id='last_name'
                {...register("last_name")}
                />
            </div>
            <div className='form__input-container'>
                <label htmlFor="email"className='form__label'>Email</label>
                <input type="email" 
                id='email' className='form__input'
                {...register("email")}
                />
            </div>
            <div className='form__input-container'>
                <label htmlFor="password" className='form__label'>Password</label>
                <input type="password"  className='form__input'
                id='password'
                {...register("password")}
                />
            </div>
            <div className='form__input-container'>
                <label htmlFor="birthday" className='form__label'>Birthday</label>
                <input type="date"  className='form__input'
                id='birthday'
                {...register("birthday")}
                />
            </div>
            <button className='form__btn-submit'>{userSelected ? "Update" : "Create"}</button>
        </form>
    );
};

export default UsersForm;
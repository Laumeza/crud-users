import React from 'react';

    const UsersList = ({user, deleteUser, selectUser}) => {
    return (
        <div className='user'>
            <h2 className='user__name'>{user.first_name} {user.last_name}</h2> <hr />
            <ul className='user__info-container'>
                <li className='user__info'>
                    <span className='user__label'>Email: </span>
                    {user.email}
                </li>
                <li className='user__info'>
                    <span className='user__label'>Birthday: </span>
                    {user.birthday}
                </li> 
            </ul> <hr />
            <div className='btn-container'>
                <button onClick={() => deleteUser(user.id)} className="btn btn--delete"><i className='bx bx-trash'></i></button>
                <button onClick={() => selectUser(user)} className="btn btn--edit"><i className='bx bx-edit-alt'></i></button>
            </div>
        </div>
    );
};

export default UsersList;
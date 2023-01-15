import React from 'react';

    const UsersList = ({user, deleteUser, selectUser}) => {
    return (
        <div>
            
            <h2>{user.first_name} {user.last_name}</h2>
            <ul>
                <li>
                    <span>Email: </span>
                    {user.email}
                </li>
                <li>
                    <span>Birthday: </span>
                    {user.birthday}
                </li>
            </ul>
            <div>
                <button onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
                <button onClick={() => selectUser(user.id)}><i className='bx bx-edit-alt'></i></button>
            </div>
        </div>
    );
};

export default UsersList;
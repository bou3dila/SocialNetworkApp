import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{ id: 'u1', name: 'Max Schawrz', image: 'https://images-na.ssl-images-amazon.com/images/I/81tGpBQtMfL.png', place: 3 }]

    return <UsersList items={USERS} />
}

export default Users;
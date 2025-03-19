import React from 'react';
import UserCard from './UserCard';
import './UserList.css';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <div className="no-users">No users found</div>;
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
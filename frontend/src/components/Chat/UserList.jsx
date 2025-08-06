// src/components/Chat/UserList.jsx
import React from 'react';

const users = ['Siddhi', 'Sanskruti', 'Rohit', 'Neha'];

const UserList = () => {
    return (
        <div className="w-1/4 bg-white border-r p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <ul>
                {users.map((user, idx) => (
                    <li key={idx} className="py-2 px-3 rounded hover:bg-gray-100 cursor-pointer">
                        {user}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

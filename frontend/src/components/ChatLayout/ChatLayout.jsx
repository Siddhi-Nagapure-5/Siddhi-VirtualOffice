// src/components/Layout/ChatLayout.jsx
import React from 'react';
import UserList from '../Chat/UserList';
import ChatWindow from '../Chat/ChatWindow';

const ChatLayout = () => {
    return (
        <div className="flex h-full">
            <UserList />
            <ChatWindow />
        </div>
    );
};

export default ChatLayout;

// src/components/Room/RoomHeader.jsx
import React from 'react';

const RoomHeader = ({ roomName }) => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">{roomName}</h1>
            <span className="text-sm text-gray-500">Room Code: #ABC123</span>
        </div>
    );
};

export default RoomHeader;

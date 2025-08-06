// src/components/Room/RoomActions.jsx
import React from 'react';

const RoomActions = () => {
    return (
        <div className="mt-6 flex justify-center gap-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
                Join Call
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                Share Screen
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Leave Room
            </button>
        </div>
    );
};

export default RoomActions;

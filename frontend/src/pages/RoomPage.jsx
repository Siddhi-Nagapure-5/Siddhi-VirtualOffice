// src/pages/RoomPage.jsx
import React from 'react';
import RoomHeader from '../components/Room/RoomHeader';
import ParticipantList from '../components/Room/ParticipantList';
import RoomActions from '../components/Room/RoomActions';

const RoomPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <RoomHeader roomName="Team Sync Room" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="col-span-1">
                    <ParticipantList />
                </div>
                <div className="col-span-2">
                    <div className="bg-white p-6 rounded shadow text-center text-gray-500">
                        <p className="text-xl">🔴 Video area / screen sharing placeholder</p>
                    </div>
                    <RoomActions />
                </div>
            </div>
        </div>
    );
};

export default RoomPage;

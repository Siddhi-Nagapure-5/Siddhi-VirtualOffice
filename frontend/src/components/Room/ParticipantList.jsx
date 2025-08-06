// src/components/Room/ParticipantList.jsx
import React from 'react';

const participants = ['Siddhi', 'Sanskruti', 'Neha', 'Rohit'];

const ParticipantList = () => {
    return (
        <div className="bg-white p-4 rounded shadow h-full">
            <h2 className="text-lg font-semibold mb-4">Participants</h2>
            <ul className="space-y-2">
                {participants.map((name, idx) => (
                    <li
                        key={idx}
                        className="bg-gray-100 p-2 rounded flex items-center gap-2"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ParticipantList;

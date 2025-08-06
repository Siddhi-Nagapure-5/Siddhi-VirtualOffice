// src/components/Chat/MessageBubble.jsx
import React from 'react';

const MessageBubble = ({ message }) => {
    const align = message.type === 'sent' ? 'justify-end' : 'justify-start';
    const bubbleColor = message.type === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black';

    return (
        <div className={`flex ${align}`}>
            <div className={`px-4 py-2 rounded-xl max-w-md ${bubbleColor}`}>
                <p>{message.text}</p>
            </div>
        </div>
    );
};

export default MessageBubble;

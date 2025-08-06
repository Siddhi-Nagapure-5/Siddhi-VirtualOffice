// src/components/Chat/MessageInput.jsx
import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <div className="p-4 border-t flex gap-2">
            <input
                className="flex-1 px-4 py-2 rounded-full border"
                type="text"
                placeholder="Type a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
                Send
            </button>
        </div>
    );
};

export default MessageInput;

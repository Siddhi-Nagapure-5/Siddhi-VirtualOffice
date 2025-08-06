// src/components/Chat/ChatWindow.jsx
import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';

const ChatWindow = () => {
    const [messages, setMessages] = useState([
        { sender: 'Siddhi', text: 'Hey there!', type: 'received' },
        { sender: 'You', text: 'Hi! How’s work going?', type: 'sent' },
    ]);

    const sendMessage = (text) => {
        setMessages([...messages, { sender: 'You', text, type: 'sent' }]);
    };

    return (
        <div className="w-3/4 flex flex-col justify-between bg-gray-50">
            <div className="flex-1 p-4 overflow-y-auto space-y-2">
                {messages.map((msg, idx) => (
                    <MessageBubble key={idx} message={msg} />
                ))}
            </div>
            <MessageInput onSend={sendMessage} />
        </div>
    );
};

export default ChatWindow;

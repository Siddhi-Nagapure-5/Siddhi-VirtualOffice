// src/App.jsx
import React from 'react';
import RoomPage from './pages/RoomPage';
import ChatPage from './pages/ChatPage';
const App = () => {
  return (
    <div className="font-sans">
      {/* <RoomPage /> */}
      <ChatPage />
      {/* Uncomment the line above to switch to the RoomPage */}
    </div>
  );
};

export default App;

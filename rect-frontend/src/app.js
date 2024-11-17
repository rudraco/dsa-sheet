// Main App component
import React, { useState } from 'react';
import Login from './components/login';
import Topics from './components/topic';

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <Topics token={token} />
      )}
    </div>
  );
};

export default App;
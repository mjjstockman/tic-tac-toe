import React from 'react';
import Game from './components/Game';
import LoginForm from './components/auth/login/LoginForm';

function App() {
  return (
    <div className='App'>
      <LoginForm />
      <Game />
    </div>
  );
}

export default App;

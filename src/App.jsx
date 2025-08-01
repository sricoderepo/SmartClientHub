// import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
import Login from './login/login';
import AppLayout from './pages/layouts/appLayout';

function App() {
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  function checkIsUserLoggedIn() {
    setIsUserLoggedIn(true);
  }
  return (
    <div className="App">
      {
        isUserLoggedIn ? <AppLayout /> : <Login isLoggedIn={checkIsUserLoggedIn}/>
      }
    </div>
  );
}

export default App;

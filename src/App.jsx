// import logo from './logo.svg';
import { useState } from 'react';

import './App.css';
import Login from './login/login';
import Dashboard from './dashboard/dashboard';

function App() {
  let [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  function checkIsUserLoggedIn() {
    setIsUserLoggedIn(true);
  }
  return (
    <div className="App">
      {
        isUserLoggedIn ? <Dashboard /> : <Login isLoggedIn={checkIsUserLoggedIn}/>
      }
    </div>
  );
}

export default App;

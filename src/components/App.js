import React, {useState} from "react";
import AppRouter from './Router';
import {authService} from "../fbase";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //기본값 false 대신 authService.currentUser 넣기 
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Switter {new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
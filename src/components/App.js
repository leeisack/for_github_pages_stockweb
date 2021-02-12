import React, {useState, useEffect} from "react";
import AppRouter from './Router';
import {authService} from "../fbase";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //기본값 false 대신 authService.currentUser 넣기 
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; Switter {new Date().getFullYear()}</footer>
    </>
  );
};

export default App;
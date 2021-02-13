import React from "react";
import Name from "./Name";
import "./Home.css";
import Logout from "../profile";

const Home = () => {
  return (
    <div>
      <Logout />
      <Name />
    </div>
  );
};

export default Home;

import React from "react";
import { ProvedorLogin } from "./src/context/LoginContext";
import { Routes } from "./src/routes";

const App = () => {
  return(
    <ProvedorLogin>
  <Routes/>
   </ProvedorLogin>
  )
}

export default App;

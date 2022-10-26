import React from "react";

import "./styles.css";
import image from "./react.png";
import logo from "./logo.svg";


export const App = () => {
  return (
    <>
      <h1>
        React Typescript webpack starter Template - {process.env.NODE_ENV} -
        {process.env.name}
      </h1>
      <img src={image} alt="React logo" width="300" height="200" />
      <img src={logo} alt="React logo" width="300" />
    </>
  );
};

import React from "react";

import "./categories.styles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/HomeComponent";
import Navigiation from "./routes/Navigation/Navigiation";
 import Authentication from './routes/Login/Authentication'

const Shop = () => {
  return (
    <div className="shop">
      <h1>I am sale SHOP</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigiation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;

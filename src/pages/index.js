import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./home";

const Pages = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Pages
import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto my-16 border-2 border-green-100 pb-12 ">
      <h1 className="text-xl text-center p-4 bg-green-400">
        User Management System
      </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

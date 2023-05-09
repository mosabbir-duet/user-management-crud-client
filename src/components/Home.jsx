import React from "react";
import { Link } from "react-router-dom";
import ViewUser from "./ViewUser";

const Home = () => {
  return (
    <>
      <div className="p-8">
        <Link to="/addUser">
          <button className="btn btn-sm bg-white text-violet-600 border-none drop-shadow-xl shadow-indigo-100 px-4 py-2 text-md my-8 capitalize hover:bg-indigo-50">
            New User
          </button>
        </Link>
        <ViewUser></ViewUser>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddUser = () => {
  const handleToFormValue = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const status = form.status.value;

    const user = { name, email, gender, status };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Wow",
            text: "User added successfully",
          });
        }
        form.reset();
      });

    console.log(user);
  };
  return (
    <div>
      <div className="p-4 md:p-16">
        <Link to="/">
          <button className="btn btn-sm bg-white text-violet-600 border-none  px-4 py-2 text-md my-8 capitalize hover:bg-indigo-50">
            {`<< All Users`}
          </button>
        </Link>

        <div className="">
          <h3 className="text-center text-xl mb-3 ">New User</h3>
          <p className="text-center text-indigo-200">
            Use the below form to add new user
          </p>
          <div className="mx-24 my-16">
            <form onSubmit={handleToFormValue}>
              {/* name input  */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-xl">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="your name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* email input  */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="your name"
                    name="email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>

              {/* gender radio input  */}
              <div className=" text-lg mt-4">
                <label className="mr-12">
                  <span>Gender</span>
                </label>
                <span className="mr-12">
                  <input
                    type="radio"
                    placeholder="your name"
                    name="gender"
                    value="Female"
                    className="mr-1"
                  />
                  Female
                </span>
                <input
                  type="radio"
                  placeholder="your name"
                  name="gender"
                  value="Male"
                  className="mr-1"
                />{" "}
                Male
              </div>
              {/* status radio input */}
              <div className=" text-lg mt-4">
                <label className="mr-12">
                  <span>Status</span>
                </label>
                <span className="mr-12">
                  <input
                    type="radio"
                    name="status"
                    value="Active"
                    className="mr-1"
                  />
                  Active
                </span>
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  className="mr-1"
                />{" "}
                Inactive
              </div>
              <input
                type="submit"
                value="Add User"
                className="w-full bg-green-400 my-6 p-4 cursor-pointer "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;

import React, { useState, } from "react";
import "./CreateUser.css";
import Select from "react-select";

import { ImCamera } from "react-icons/im";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    country: "",
    username: "",
    password: "",
  });
  const [userRole, setUserRole] = useState('');

  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, address, country, username, password } = user;

    const res = await fetch("/admin/Dashboard/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        address,
        country,
        username,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("invalid creation");
      console.log("user cannot  created");
    }
    if (res.status === 422) {
      window.alert("email allready exist");
      console.log("email exist already");
    } else {
      window.alert("user created");
      console.log("user created");
    }
  };
  // ROLES .......... STARTING..........{
  const options = [
    { value: "manager", label: "Manager" },
    { value: "teamleader", label: "Teamleader" },
    { value: "employee", label: "Employee" },
  ];
  // ROLES .......... STARTING..........}
  return (
    <>
      <div className="">
        <form
          action=""
          method="POST"
          className="create-user-form bg-white shadow-md dark:bg-navy-800"
        >
          <div className="user-image-wrapper ">
            <div className="user-image bg-navy-600 shadow-lg dark:bg-navy-900">
              <img src="#" alt="" />{" "}
              <ImCamera className="text-white dark:text-gray-500" />
            </div>
            <div className="user-image-upload"> </div>
          </div>
          <div className="create-form-wrapper">
            <div className="field">
              <div className="input">
                <label
                  htmlFor="name "
                  className="text-navy-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Robert"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
              <div className="input">
                <label
                  htmlFor="username"
                  className="text-navy-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  placeholder="robert@123"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="field">
              <div className="input">
                <label
                  htmlFor="email"
                  className="text-navy-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="robert@gmail.com"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="input">
                {" "}
                <label
                  htmlFor="password"
                  className="text-navy-900 dark:text-white"
                >
                  password
                </label>
                <input
                  type="text"
                  placeholder="r@b#e$"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="field">
              <div className="input">
                <label
                  htmlFor="address"
                  className="text-navy-900 dark:text-white"
                >
                  Role
                </label>
                <Select
                
                defaultValue={userRole}
                  onChange={setUserRole}
                  className="mt-4"
                  options={options}
                />
              </div>
              <div className="input">
                <label
                  htmlFor="country"
                  className="text-navy-900 dark:text-white"
                >
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={user.country}
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="field">
              <div className="input ">
                <button
                  className="bg-navy-600 dark:bg-navy-900"
                  onClick={sendData}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;

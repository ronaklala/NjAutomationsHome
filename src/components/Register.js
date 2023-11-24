import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [user, setUesr] = useState({
    name: "",
    email: "",
    phno: "",
    password: "",
    cp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUesr((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    if (
      user.cp === "" ||
      user.email === "" ||
      user.name === "" ||
      user.password === "" ||
      user.phno === ""
    ) {
      toast.error("Please Complete the whole Form");
    } else if (user.password !== user.cp) {
      toast.error("Passwords Do Not Match");
    } else {
      axios
        .post(
          "https://nj-automations-api.vercel.app/api/user/register_uesr",
          user
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("User Registered Successfully");
            setTimeout(() => {
              window.location.href = "/Login";
            }, 1000);
          }
        })
        .catch((err) => {
          toast.error("Internal Server Erorr");
        });
    }
  };

  return (
    <>
      <div className="body">
        <form className="sub-form">
          <div className="input-contain">
            <div className="circle circle-quill">
              <svg
                className="quill"
                x="0px"
                y="0px"
                width="25.167px"
                height="25.167px"
                viewBox="0 0 25.167 25.167"
                enableBackground="new 0 0 25.167 25.167"
                xmlSpace="preserve"
              >
                <path
                  fill="#4e3332"
                  d="M0,25C3.125,15.625,11.304,0,25,0c-6.421,5.151-9.375,17.188-14.062,17.188s-4.688,0-4.688,0L1.562,25H0z"
                />
              </svg>
            </div>
            <div className="circle circle-paper">
              <svg
                className="paper"
                x={0}
                y={0}
                width="25.1"
                height="25.1"
                viewBox="0 0 25.1 25.1"
                enableBackground="new 0 0 25.125 25.125"
                xmlSpace="preserve"
              >
                <path
                  fill="#b1dbd3"
                  d="M24 2.1C23.5 2.3 1.2 10.2 0.8 10.3c-0.4 0.1-0.5 0.5 0 0.6 0.5 0.2 5 2 5 2H5.8l3 1.2c0 0 14.2-10.4 14.4-10.6 0.2-0.1 0.4 0.1 0.3 0.3 -0.1 0.2-10.3 11.2-10.3 11.2 0 0 0 0 0 0l-0.6 0.7 0.8 0.4c0 0 6.1 3.3 6.5 3.5 0.4 0.2 0.9 0 1-0.4 0.1-0.6 3.7-16.1 3.8-16.4C24.7 2.3 24.4 2 24 2.1zM8.7 21.2c0 0.3 0.2 0.4 0.4 0.2 0.3-0.3 3.7-3.4 3.7-3.4l-4.2-2.2V21.2z"
                />
              </svg>
            </div>
            <h2 className="info">
              <b>Register Now </b>
            </h2>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              defaultValue={user.name}
              onChange={handleChange}
              maxLength={100}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@njautomations.com"
              defaultValue={user.email}
              onChange={handleChange}
              maxLength={100}
            />
            <input
              type="number"
              id="phno"
              name="phno"
              defaultValue={user.phno}
              onChange={handleChange}
              placeholder="123456789"
              maxLength={10}
            />
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={user.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              maxLength={100}
            />
            <input
              type="password"
              placeholder="Confirm Pasword"
              name="cp"
              defaultValue={user.cp}
              onChange={handleChange}
            />
            <div className="allsub">
              <div className="submit" onClick={handleSubmit}>
                Register Now
              </div>
              <br />
              <p>
                Already Registered? <a href="/Login">Login Here</a>
              </p>
              <div className="submit-under" />
            </div>
          </div>
          {/*input-contain*/}
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;

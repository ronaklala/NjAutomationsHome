import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./css/login.css";
import Spinner from "./Spinner";

const Register = () => {
  const [user, setUesr] = useState({
    name: "",
    email: "",
    phno: "",
    password: "",
    cp: "",
  });

  const [loading, setLoading] = useState(false);

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
    e.preventDefault();
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
      setLoading(true);
      axios
        .post(
          "https://determined-pear-apron.cyclic.app/api/user/register_uesr",
          user
        )
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            toast.success("User Registered Successfully");
            setTimeout(() => {
              window.location.href = "/Login";
            }, 1000);
          }
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Internal Server Erorr");
        });
    }
  };

  return (
    <>
      <div
        className="wrapper"
        style={{
          backgroundImage:
            'url("https://www.pgftech.com/wp-content/uploads/2023/06/factory-1.png")',
        }}
      >
        <div className="inner">
          <div className="image-holder">
            <img
              src="https://www.pgftech.com/wp-content/uploads/2023/06/DSC_0016.png"
              style={{ height: "100%" }}
              alt="register_img"
            />
          </div>
          <form action="#/">
            <h3>Registration Form</h3>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                className="form-control"
                id="name"
                name="name"
                defaultValue={user.name}
                onChange={handleChange}
                maxLength={100}
              />
              <input
                type="email"
                placeholder="john@njautomations.com"
                id="email"
                name="email"
                defaultValue={user.email}
                onChange={handleChange}
                maxLength={100}
                className="form-control"
              />
            </div>
            <div className="form-wrapper">
              <input
                type="number"
                id="phno"
                name="phno"
                defaultValue={user.phno}
                onChange={handleChange}
                placeholder="123456789"
                maxLength={10}
                className="form-control"
              />
              <i className="zmdi zmdi-account" />
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                id="password"
                name="password"
                defaultValue={user.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                maxLength={100}
                className="form-control"
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Confirm Pasword"
                name="cp"
                defaultValue={user.cp}
                onChange={handleChange}
                className="form-control"
              />
              <i className="zmdi zmdi-lock" />
              <button onClick={handleSubmit} style={{ margin: "0" }}>
                {!loading ? (
                  <>
                    {" "}
                    Register
                    <i className="zmdi zmdi-arrow-right" />
                  </>
                ) : (
                  <>
                    {" "}
                    <Spinner />
                  </>
                )}
              </button>{" "}
            </div>
            <br />
            <p>
              Already Registered? <a href="/Login">Login Here</a>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Register;

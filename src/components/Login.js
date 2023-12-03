import React, { useState } from "react";
import "./css/login.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email === "" || user.pass === "") {
      toast.error("Please Complete the Whole Form");
    } else {
      setLoading(true);
      axios
        .post(
          "https://determined-pear-apron.cyclic.app/api/user/login_user",
          user
        )
        .then((res) => {
          if (res.status === 200) {
            setLoading(false);
            toast.success("Logged in Successfully");
            localStorage.setItem("user", JSON.stringify(res.data));
            setInterval(() => {
              window.location.href = "/";
            }, 1500);
          }
        })
        .catch((err) => {
          if (err.response.status === 500) {
            toast.error("Invalid Password");
            setLoading(false);
          } else if (err.response.status === 404) {
            toast.error("No Such User Found");
            setLoading(false);
          } else {
            toast.error("Internal Server Error, Please Try Again Later");
            setLoading(false);
          }
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
            <h3>Login into Nj Automations</h3>

            <div className="form-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@njautomations.com"
                required=""
                onChange={handleChange}
                defaultValue={user.email}
                maxLength={100}
                className="form-control"
              />
              <i className="zmdi zmdi-account" />
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                placeholder="Enter Your password"
                name="pass"
                onChange={handleChange}
                defaultValue={user.pass}
                required="required"
                className="form-control"
              />
              <i className="zmdi zmdi-email" />
            </div>

            <div className="form-wrapper">
              <i className="zmdi zmdi-lock" />
              <button onClick={handleSubmit} style={{ margin: "0" }}>
                {loading ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  <>
                    {" "}
                    Login Now
                    <i className="zmdi zmdi-arrow-right" />
                  </>
                )}
              </button>{" "}
            </div>
            <br />
            <p>
              Now Registered? <a href="/Register">Register Here</a>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;

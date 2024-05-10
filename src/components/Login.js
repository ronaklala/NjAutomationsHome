import React, { useState } from "react";
import "./css/login.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";
import { useLogin } from "./Api";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pass: "",
  });

  const { mutate: LoginUser, isLoading } = useLogin();

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
      LoginUser(user);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign In Now</title>
        <meta
          name="description"
          content="Log in to our PCB board e-commerce platform for seamless access to your account. Explore our comprehensive selection of high-quality printed circuit boards for manufacturing and purchase. Discover cutting-edge technology and reliable solutions at Nj Automations."
        />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="PCB boards, printed circuit boards, electronic components, PCB manufacturing, circuit board assembly, customer login, e-commerce platform, technology solutions, electronics manufacturing, circuit board design, PCB supplier, Nj Automations"
        ></meta>
        <meta property="og:title" content="Sign In Now"></meta>
        <meta
          property="og:description"
          content="Log in to our PCB board e-commerce platform for seamless access to your account. Explore our comprehensive selection of high-quality printed circuit boards for manufacturing and purchase. Discover cutting-edge technology and reliable solutions at Nj Automations."
        ></meta>
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/njautomations-f8156.appspot.com/o/image-removebg-preview%5B1%5D.webp?alt=media&token=f624d0a0-f802-4e8e-9114-9534a862fc52"
        ></meta>
        <link rel="canonical" href="https://njautomation.in/Login"></link>
      </Helmet>
      <div
        className="wrapper"
        style={{
          backgroundImage:
            'url("https://www.pgftech.com/wp-content/uploads/2023/06/factory-1.png")',
        }}
      >
        <div className="inner">
          <div className="image-holder">
            <LazyLoadImage
              src="https://www.pgftech.com/wp-content/uploads/2023/06/DSC_0016.png"
              style={{ height: "100%" }}
              alt="register_img"
              effect="blur"
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
                {isLoading ? (
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

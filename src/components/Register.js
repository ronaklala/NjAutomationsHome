import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./css/login.css";
import Spinner from "./Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";
import { useRegister } from "./Api";

const Register = () => {
  const [user, setUesr] = useState({
    name: "",
    email: "",
    phno: "",
    password: "",
    cp: "",
  });

  const { mutate: registerUser, isLoading } = useRegister();

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
      registerUser(user);
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up Now</title>
        <meta
          name="description"
          content="Register with us at Nj Automations to unlock a seamless experience in PCB board solutions. Sign up for exclusive access to a diverse range of high-quality printed circuit boards for various applications. Join our community of electronics enthusiasts, engineers, and businesses. Accelerate your projects with our cutting-edge PCB manufacturing and selling services. Register now for personalized recommendations, order tracking, and priority customer support. Your journey towards reliable and advanced PCB solutions begins here."
        />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="PCB boards, printed circuit boards, PCB manufacturing, circuit board design, electronics components, PCB for sale, electronic components store, custom PCB, circuit board assembly, electronics manufacturing services, register for an account, customer registration"
        ></meta>
        <meta property="og:title" content="Sign Up Now"></meta>
        <meta
          property="og:description"
          content="Register with us at Nj Automations to unlock a seamless experience in PCB board solutions. Sign up for exclusive access to a diverse range of high-quality printed circuit boards for various applications. Join our community of electronics enthusiasts, engineers, and businesses. Accelerate your projects with our cutting-edge PCB manufacturing and selling services. Register now for personalized recommendations, order tracking, and priority customer support. Your journey towards reliable and advanced PCB solutions begins here."
        ></meta>
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/njautomations-f8156.appspot.com/o/image-removebg-preview%5B1%5D.webp?alt=media&token=f624d0a0-f802-4e8e-9114-9534a862fc52"
        ></meta>
        <link rel="canonical" href="https://njautomation.in/Register"></link>
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
                {!isLoading ? (
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

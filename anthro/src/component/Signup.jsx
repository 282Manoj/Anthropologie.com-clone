import React from "react";
import { useState } from "react";
import "./Signup.css";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";

import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

const initialsate = {
  username: "",
  email: "",
  mobile_no: "",
  role: "user",
  password: "",
};

const Signup = () => {
  const [pass, setpass] = useState(false);
  const [user, setuser] = useState(initialsate);
  const [tologin, settologin] = useState(false);
  const toast = useToast();

  const handleuser = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const registeruser = () => {
    if (
      user.username === "" ||
      user.password === "" ||
      user.email === "" ||
      user.mobile_no === ""
    ) {
      toast({
        title: "Please Give All the credentials",
        position: "top",
        status: "error",
        isClosable: true,
      });
    } else if (!user.email.includes("@")) {
      toast({
        title: "Please Give Proper Email(missing @)",
        position: "top",
        status: "error",
        isClosable: true,
      });
    } else if (!user.email.includes(".")) {
      toast({
        title: "Please Give Proper Email(missing .)",
        position: "top",
        status: "error",
        isClosable: true,
      });
    } else if (user.password.length <= 7) {
      toast({
        title: "Password Length Should Be Greater Than 7",
        position: "top",
        status: "error",
        isClosable: true,
      });
    } else {
      axios({
        method: "post",
        url: "https://anthropologyapi-2nd.onrender.com/user",
        data: user,
      })
        .then((res) => {
          toast({
            title: `Sign Up successful`,
            position: "top",
            status: "success",
            isClosable: true,
          });
          settologin(true);
        })
        .catch((err) => {
          // console.log(err)
          toast({
            title: "Please try again",
            position: "top",
            status: "error",
            isClosable: true,
          });
        });
    }
  };

  if (tologin) {
    return <Navigate to="/login" />;
  }

  const { username, email, mobile_no, password } = user;
  return (
    <div className="signup">
      <div className="box">
        <img
          src="https://akns-images.eonline.com/eol_images/Entire_Site/202306/rs_1024x759-230106184155-anthropologie-1024-.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top"
          alt="signup-box-images"
        />
        <div>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleuser}
          />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleuser}
          />
          <input
            type="text"
            name="mobile_no"
            value={mobile_no}
            placeholder="Mobile number"
            onChange={handleuser}
          />
          <div>
            <input
              type={pass ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleuser}
            />
            <i onClick={() => setpass(!pass)}>
              {pass ? <RiEyeCloseFill /> : <RiEyeFill />}
            </i>
          </div>
          <button className="button" onClick={registeruser}>
            Sign Up
          </button>
          <p>
            Already have account?{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import { useState, useEffect, useContext } from "react";
import "./Signup.css";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";
import { AuthContext } from "./AuthContext";
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const initialsate = {
  username: "",
  password: "",
};

const Login = () => {
  const [pass, setpass] = useState(false);
  const [user, setuser] = useState(initialsate);
  const [dataUser, setDataUser] = useState("");
  const naviagte = useNavigate();
  const { userDetails, setUserDetails, setLogIn } = useContext(AuthContext);

  const toast = useToast();

  const handleuser = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  console.log(user);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDataUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const loginuser = (e) => {
    const userDetailsUserName = dataUser.filter(
      (ele) => ele.username === user.username
    );

    let ud = userDetailsUserName[0].username;

    const userPassword = dataUser.filter(
      (ele) => ele.password === user.password
    );

    if (userPassword.length === 1 && userDetailsUserName.length === 1) {
      setUserDetails(ud);
      setLogIn(true);
      toast({
        title: `Login successful`,
        position: "top",
        status: "success",
        isClosable: true,
      });
      naviagte("/");
    } else {
      toast({
        title: "Wrong credentials",
        position: "top",
        status: "error",
        isClosable: true,
      });
    }
    console.log("userDetails", userDetails);
  };

  const { username, password } = user;

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
          <button className="button" onClick={loginuser}>
            Login
          </button>

          <p>
            Dont't have account?{" "}
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

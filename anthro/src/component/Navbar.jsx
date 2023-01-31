import React, { useEffect, useState, useContext } from "react";
import "./Nabar.css";
import { SlGlobeAlt } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../Redux/clotheproduct/action";
import { AuthContext } from "./AuthContext";
import { useToast } from "@chakra-ui/react";

function Navbar() {
  const [active1, setAvtive1] = useState(true);
  const [active2, setAvtive2] = useState(false);
  const [fetchData, setFetchData] = useState([]);
  const [seachData, setSearchData] = useState("");
  const [click, setClick] = useState(false);
  const clothe = useSelector((store) => store.clotheReducer.cloths);
  const dispatch = useDispatch();
  const { userDetails, setUserDetails, setLogIn, logIn } =
    useContext(AuthContext);
  const naviagte = useNavigate();
  const toast = useToast();

  console.log(logIn);

  useEffect(() => {
    dispatch(getClothes(clothe));
  }, []);

  const GetData = (change) => {
    let changes = "";
    for (let i = 0; i < change.length; i++) {
      if (i === 0) {
        changes += change[i].toUpperCase();
      } else {
        changes += change[i];
      }
    }

    const data = clothe.filter((ele) => ele.title.includes(changes));

    // console.log("change", changes);
    setSearchData(data);
    // console.log("Data", seachData);
  };

  const HandleChange = (e) => {
    GetData(e.target.value);
  };

  const handleClick1 = () => {
    setAvtive1(true);
    setAvtive2(false);
  };

  const handleClick2 = () => {
    setAvtive2(true);
    setAvtive1(false);
  };

  const handleClick = () => {
    setClick(!click);
  };

  const setLogout = () => {
    naviagte("/login");
    toast({
      title: `Logout successful`,
      position: "top",
      status: "success",
      isClosable: true,
    });
    setLogIn(false);
  };

  return (
    <>
      <div className="nav-bar-main">
        {/* top navbbar */}
        <div className="top-navbar">
          <div className="top-navbar-right">
            <div className="glove-logo-navbar">
              <SlGlobeAlt size={20} color="teal" />
              <div className="text-navbar">English($)</div>
            </div>

            <div className="user-navbar">
              <CiUser fontSize={22} color="teal" />

              {!logIn ? (
                <div className="text-navbar">
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Log In{" "}
                  </Link>{" "}
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    / Sign Up
                  </Link>
                </div>
              ) : (
                <>
                  <p className="X-y-z">{userDetails}</p>
                  <button className="A-b-c" onClick={setLogout}>
                    Log Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Buttom Navbar */}

        {/* Left Side */}
        <div className="buttom-navbar">
          {/* right side */}
          <div className="left-buttom-navbar">
            <div
              className={`left-buttom-navbar-left ${active1 ? "set" : ""}`}
              onClick={handleClick1}
            >
              <NavLink to="/">
                <img
                  src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
                  alt=""
                />
              </NavLink>
            </div>
            <div
              className={`left-buttom-navbar-right ${active2 ? "set" : ""}`}
              onClick={handleClick2}
            >
              <NavLink>
                <img
                  src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                  alt=""
                />
              </NavLink>
            </div>
          </div>

          {/* Right Side */}

          <div className="right-buttom-navbar">
            <div className="input-div-navbar">
              <input
                type="text"
                placeholder="Search Anthropologie"
                onChange={HandleChange}
                onClick={handleClick}
              />
              <BsSearch fontSize={20} />
            </div>

            <div className="bga-navbar">
              <Link to="/cart">
                <BsHandbag fontSize={30} color="teal" />
              </Link>
            </div>
          </div>
        </div>

        {/* dhkfggfkggkgfkgfgkg */}

        <div className="below-navbar">
          <ul>
            <l1 className="color-red">Gifts</l1>
            <l1 className="color-teal">New!</l1>
            <l1 className="color-teal">Dresses</l1>
            <Link to="/shoes" style={{ textDecoration: "none" }}>
              <l1 className="color-teal">Shoes</l1>
            </Link>
            <Link to="/clothe" style={{ textDecoration: "none" }}>
              <l1 className="color-teal">Clothing</l1>
            </Link>
            <l1 className="color-teal">Accessories</l1>
            <l1 className="color-teal">BHLDN Wedding</l1>
            <l1 className="color-teal">Home & Furniture </l1>
            <l1 className="color-teal">Beauty & Wellness</l1>
            <l1 className="color-teal">Garden & Outdoor</l1>
            <l1 className="color-teal">Sale</l1>
          </ul>
        </div>
        {click && (
          <div className="search_engine">
            {seachData.length !== 0 ? (
              <div className="search_data_append">
                {seachData.map((ele) => (
                  <Link to={`/clothe/${ele.id}`}>
                    {" "}
                    <div className="search_div_sudev">
                      <p>{ele.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              "No Search Item Found."
            )}
          </div>
        )}
      </div>

      {/* Below Navbar */}
    </>
  );
}

export default Navbar;

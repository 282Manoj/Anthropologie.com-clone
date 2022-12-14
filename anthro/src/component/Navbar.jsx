import React, { useState } from "react";
import "./Nabar.css";
import { SlGlobeAlt } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";

function Navbar() {
  const [inputTab, setInputTab] = useState("");

  const handleOnClick = () => {
    setInputTab("active");
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
              <div className="text-navbar">Sign In / Sign Up</div>
            </div>
          </div>
        </div>

        {/* Buttom Navbar */}

        {/* Left Side */}
        <div className="buttom-navbar">
          {/* right side */}
          <div className="left-buttom-navbar">
            <div className="left-buttom-navbar-left">
              <img
                src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
                alt=""
              />
            </div>
            <div className="left-buttom-navbar-right">
              <img
                src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                alt=""
              />
            </div>
          </div>

          {/* Right Side */}

          <div className="right-buttom-navbar">
            <div className="input-div-navbar">
              <input
                type="text"
                className={inputTab === "active" ? "active" : ""}
                onClick={handleOnClick}
                placeholder="Search Anthropologie"
              />
              <BsSearch fontSize={20} />
            </div>

            <div className="bga-navbar">
              <BsHandbag fontSize={30} color="teal" />
            </div>
          </div>
        </div>

        <div className="below-navbar">
          <ul>
            <l1 className="color-red">Gifts</l1>
            <l1 className="color-teal">New!</l1>
            <l1 className="color-teal">Dresses</l1>
            <l1 className="color-teal">Clothing</l1>
            <l1 className="color-teal">Shoes</l1>
            <l1 className="color-teal">Accessories</l1>
            <l1 className="color-teal">BHLDN Wedding</l1>
            <l1 className="color-teal">Home & Furniture </l1>
            <l1 className="color-teal">Beauty & Wellness</l1>
            <l1 className="color-teal">Garden & Outdoor</l1>
            <l1 className="color-teal">Sale</l1>
          </ul>
        </div>
      </div>

      {/* Below Navbar */}
    </>
  );
}

export default Navbar;

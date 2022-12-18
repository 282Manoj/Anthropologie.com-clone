import React, { useState } from "react";
import "./Address.css";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";
import { RiStore2Line } from "react-icons/ri";
import { TfiGift } from "react-icons/tfi";

function Address() {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);

  const handleClick1 = () => {
    setState1(true);
    setState2(false);
  };

  const handleClick2 = () => {
    setState1(false);
    setState2(true);
  };

  return (
    <>
      <div className="address-nav">
        <div className="left-address-nav">
          <div className="left-address-nav-left">
            <Link to="/">
              <img
                src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="left-address-nav-right">
            <img
              src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
              alt=""
            />
          </div>
        </div>
        <div className="right-address-nav">
          <div>
            <BsHandbag size={30} color="teal" />
          </div>
        </div>
      </div>

      <hr />

      <div className="ship-or-pick-up">
        <div className="ship">
          <p>Ship or Pick Up</p>
        </div>

        <div className="slash">
          <p>/</p>
        </div>

        <div className="pay">
          <p>Payment</p>
        </div>
        <div className="slash">
          <p>/</p>
        </div>
        <div className="review">
          <p>Review</p>
        </div>
      </div>

      {/* Order summerry */}

      <div className="order-summery">
        <div className="heading-order">
          <p>Order Summary</p>
          <p>800.309.2500</p>
        </div>

        <div className="main-order-summery">
          <div>
            <p>Subtotal</p>
            <p>$460.00</p>
          </div>

          <div>
            <p>Shipping</p>
            <p>TBD</p>
          </div>

          <div>
            <p>Estimated Tax</p>
            <p>$0.00</p>
          </div>
          <div>
            <p>Total</p>
            <p>$460.00</p>
          </div>
        </div>
<Link to="/sucess">
        <div className="ord-btn">
          <button>SHIP TO THIS ADDRESS</button>
        </div>
        </Link>
        <hr className="hr-tag" />

        <div className="main-order-summery1">
          <div>
            <p>Promo Code</p>
            <p>+</p>
          </div>
        </div>
      </div>

      {/*/////////////////////////  ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="ship-oder-details">
        <div className="ship-order">
          <div className="addres-bar">
            <div className="address-btn">
              <div
                className={`ship-btn ${state1 ? "activeBtn" : ""}`}
                onClick={handleClick1}
              >
                <button>
                  {" "}
                  <BsBoxSeam className="box-box-btn" /> <span>&nbsp;</span> Ship
                </button>
              </div>

              <div
                className={`ship-btn ${state2 ? "activeBtn" : ""}`}
                onClick={handleClick2}
              >
                <button>
                  {" "}
                  <RiStore2Line className="box-box-btn" /> <span>&nbsp;</span>{" "}
                  Pick Up
                </button>
              </div>
            </div>
          </div>

          {state1 ? (
            <div className="shoping-user-details">
              <div className="heading-shop">
                <p>Shipping Address</p>
              </div>

              <form>
                <div className="region-form">
                  <p className="para-form">Country/Region*</p>
                  <select>
                    <option value="">Inida</option>
                    <option value="">USA</option>
                    <option value="">UK</option>
                    <option value="">Austrelia</option>
                    <option value="">Poland</option>
                    <option value="">West Inidis</option>
                    <option value="">South Africa</option>
                    <option value="">Netherland</option>
                    <option value="">Singapor</option>
                    <option value="">Ireland</option>
                    <option value="">Hungry</option>
                    <option value="">Isle Of Man</option>
                    <option value="">Japan</option>
                    <option value="">China</option>
                    <option value="">Thailand</option>
                    <option value="">Italy</option>
                    <option value="">Jordan</option>
                    <option value="">Jamaica</option>
                    <option value="">Kuweit</option>
                    <option value="">Latvia</option>
                    <option value="">Mexico</option>
                    <option value="">Malta</option>
                    <option value="">Oman</option>
                    <option value="">Qatar</option>
                  </select>
                </div>

                <div className="name-form">
                  <div className="firstlast-name-form">
                    <p className="para-form">First Name*</p>
                    <input type="text" className="input-form" />
                  </div>

                  <div className="firstlast-name-form">
                    <p className="para-form">Last Name*</p>
                    <input type="text" className="input-form" />
                  </div>
                </div>

                <div className="address-form">
                  <p className="para-form">Street Address1*</p>
                  <input
                    type="text"
                    className="input-form"
                    placeholder="35 character limit, continue below."
                  />
                </div>

                <div className="address-form">
                  <p className="para-form">Address 2</p>
                  <input
                    type="text"
                    className="input-form"
                    placeholder="35 character limit, continue below."
                  />
                </div>

                <div className="check-box-form">
                  <input type="checkbox" name="" id="" />
                  <p className="para-form">PO Box</p>
                </div>

                <div className="city-region">
                  <div className="cityregion-form">
                    <p className="para-form">City*</p>
                    <input type="text" className="input-form" />
                  </div>

                  <div className="cityregion-form">
                    <p className="para-form">City*</p>
                    <input type="text" className="input-form" />
                  </div>
                </div>

                <div className="post-code">
                  <div className="postcode-form">
                    <p className="para-form">Postcode*</p>
                    <input type="text" className="input-form" />
                  </div>
                </div>

                <div className="mobile-code">
                  <div className="mobile-form">
                    <p className="para-form">Mobile Number*</p>
                    <input
                      type="number"
                      className="input-form"
                      placeholder="+91"
                    />
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="shoping-user-details-pick">
              <div className="para-tag">
                <p>Find a Pickup Location</p>
                <p>Locate a store or a Collection Point near you:</p>
                <p>
                  <TfiGift color="#a56a3a" />
                  <span>&nbsp;</span>
                  Sorry – gift wrap is unavailable with Store Pickup and
                  Collection Point orders.
                </p>

                <div className="input-tag-pick-up">
                  <div>
                    <p id="para-pick-up">City or ZIP Code*</p>
                    <input type="text" id="inp-pick-up1" />
                  </div>

                  <div>
                    <p id="para-pick-up">City or ZIP Code*</p>
                    <select id="inp-pick-up">
                      <option value="">25 mi.</option>
                      <option value="">35 mi.</option>
                      <option value="">45 mi.</option>
                      <option value="">55 mi.</option>
                      <option value="">65 mi.</option>
                      <option value="">75 mi.</option>
                      <option value="">85 mi.</option>
                    </select>
                  </div>

                  <div>
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////// */}
      <div className="footer-address">
        <div className="top-address">
          <div className="one">
            <ul>
              <li>Store Locator</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="two">
            <p>
              Questions?<span> Contact Us</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;

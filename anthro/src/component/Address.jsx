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
      <div className="Address-Nav">
        <div className="Left-Address-Nav">
          <div className="Left-Address-Nav-Left">
            <Link to="/">
              <img
                src="https://images.ctfassets.net/5de70he6op10/7q3Z6vJ6UEPFyAPKAFZZxl/1a22eec777828277571187c43306e983/Anthropologie_Holiday_Lockup__1_update.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="Left-Address-Nav-Right">
            <img
              src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
              alt=""
            />
          </div>
        </div>
        <div className="Right-Address-Nav">
          <div>
            <BsHandbag size={30} color="teal" />
          </div>
        </div>
      </div>

      <hr />

      <div className="Ship-Or-Pick-Up">
        <div className="Ship">
          <p>Ship or Pick Up</p>
        </div>

        <div className="Slash">
          <p>/</p>
        </div>

        <div className="Pay">
          <p>Payment</p>
        </div>
        <div className="Slash">
          <p>/</p>
        </div>
        <div className="Review">
          <p>Review</p>
        </div>
      </div>

      {/* Order summerry */}

      <div className="Order-Summery">
        <div className="Heading-Order">
          <p>Order Summary</p>
          <p>800.309.2500</p>
        </div>

        <div className="Main-Order-Summery">
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
        <div className="Ord-Btn">
          <button>SHIP TO THIS ADDRESS</button>
        </div>
        </Link>
        <hr className="Hr-Tag" />

        <div className="Main-Order-Summery1">
          <div>
            <p>Promo Code</p>
            <p>+</p>
          </div>
        </div>
      </div>

      {/*/////////////////////////  ///////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="Ship-Oder-Details">
        <div className="Ship-Order">
          <div className="Addres-Bar">
            <div className="Address-Btn">
              <div
                className={`Ship-Btn ${state1 ? "ActiveBtn" : ""}`}
                onClick={handleClick1}
              >
                <button>
                  {" "}
                  <BsBoxSeam className="Box-Box-Btn" /> <span>&nbsp;</span> Ship
                </button>
              </div>

              <div
                className={`Ship-Btn ${state2 ? "ActiveBtn" : ""}`}
                onClick={handleClick2}
              >
                <button>
                  {" "}
                  <RiStore2Line className="Box-Box-Btn" /> <span>&nbsp;</span>{" "}
                  Pick Up
                </button>
              </div>
            </div>
          </div>

          {state1 ? (
            <div className="Shoping-User-Details">
              <div className="Heading-Shop">
                <p>Shipping Address</p>
              </div>

              <form>
                <div className="Region-Form">
                  <p className="Para-Form">Country/Region*</p>
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

                <div className="Name-Form">
                  <div className="Firstlast-Name-Form">
                    <p className="Para-Form">First Name*</p>
                    <input type="text" className="Input-Form" />
                  </div>

                  <div className="Firstlast-Name-Form">
                    <p className="Para-Form">Last Name*</p>
                    <input type="text" className="Input-Form" />
                  </div>
                </div>

                <div className="Address-Form">
                  <p className="Para-Form">Street Address1*</p>
                  <input
                    type="text"
                    className="Input-Form"
                    placeholder="35 character limit, continue below."
                  />
                </div>

                <div className="Address-Form">
                  <p className="Para-Form">Address 2</p>
                  <input
                    type="text"
                    className="Input-Form"
                    placeholder="35 character limit, continue below."
                  />
                </div>

                <div className="Check-Box-Form">
                  <input type="checkbox" name="" id="" />
                  <p className="Para-Form">PO Box</p>
                </div>

                <div className="City-Region">
                  <div className="Cityregion-Form">
                    <p className="Para-Form">City*</p>
                    <input type="text" className="Input-Form" />
                  </div>

                  <div className="Cityregion-Form">
                    <p className="Para-Form">City*</p>
                    <input type="text" className="Input-Form" />
                  </div>
                </div>

                <div className="Post-Code">
                  <div className="Postcode-Form">
                    <p className="Para-Form">Postcode*</p>
                    <input type="text" className="Input-Form" />
                  </div>
                </div>

                <div className="Mobile-Code">
                  <div className="Mobile-Form">
                    <p className="Para-Form">Mobile Number*</p>
                    <input
                      type="number"
                      className="Input-Form"
                      placeholder="+91"
                    />
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="Shoping-User-Details-Pick">
              <div className="Para-Tag">
                <p>Find a Pickup Location</p>
                <p>Locate a store or a Collection Point near you:</p>
                <p>
                  <TfiGift color="#a56a3a" />
                  <span>&nbsp;</span>
                  Sorry – gift wrap is unavailable with Store Pickup and
                  Collection Point orders.
                </p>

                <div className="Input-Tag-Pick-Up">
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
      <div className="Footer-Address">
        <div className="Top-Address">
          <div className="One">
            <ul>
              <li>Store Locator</li>
              <li>Shipping Information</li>
              <li>Returns & Exchanges</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="Two">
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

import React from "react";
import "./Footer.css";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className="footer">
        {/* Upper-footer */}
        <div className="upper-footer">
          <div className="sign-up-for-email">
            <p>Sign Up for Email</p>
            <p>
              Receive early access to new arrivals, sales, exclusive content,
              events and much more!
            </p>
          </div>

          <div className="input-singn-up">
            <div className="lable">Email Address*</div>
            <div className="input-btn-field">
              <div className="input-field">
                <input type="text" />
              </div>

              <div className="input-btn">
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>

        <div className="random-text">
          <p>
            By signing up, you will receive Anthropologie offers, promotions and
            other commercial messages. You are also agreeing to Anthropologie’s
            <span> Privacy Policy</span>. You may unsubscribe at any time.
          </p>
        </div>
        <hr />

        {/* Lower-footer */}

        <div className="lower-footer">
          <div className="lower-footers">
            <p>Help</p>
            <p>Track Your Order</p>
            <p>Start A Return Or Exchange (US)</p>
            <p>Returns & Exchanges</p>
            <p>Shipping</p>
            <p>Customer Service</p>
            <p>Current Promotions</p>
            <p>Product Recalls</p>
          </div>

          {/*  */}

          <div className="lower-footers">
            <p>About Us</p>
            <p>Our Story</p>
            <p>Events</p>
            <p>A Greater Good</p>
            <p>Diversity & Inclusion</p>
            <p>Stories</p>
          </div>

          {/*  */}

          <div className="lower-footers">
            <p>Services</p>
            <p>AnthroPerks</p>
            <p>Gift Cards</p>
            <p>
              AnthroLiving Designer & Trade <br /> Program
            </p>
            <p>Furniture: Guides & Services</p>
            <p>Store Pickup & Collection Points</p>
            <p>Klarna</p>
          </div>

          {/*  */}

          <div className="lower-footers">
            <p>Connect</p>
            <p>Contact Us</p>
            <p>Stay Connected</p>
            <p>Careers</p>
            <p>Styling Services</p>
            <p>Request A Catalog</p>
          </div>

          {/*  */}

          <div className="lower-footers">
            <div className="store-location">
              <SlLocationPin size={30} color="teal" />
              <p>Store Locator</p>
            </div>

            <div className="store-location">
              <CiMail size={30} color="teal" />
              <p>Get Email</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

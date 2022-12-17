import React, { useState } from "react";
import "./Footer.css";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { BsPinterest, BsTwitter } from "react-icons/bs";

function Footer() {
  const [inputChange, setInputChange] = useState("");

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
                <input
                  type="email"
                  onChange={(e) => setInputChange(e.target.value)}
                  value={inputChange}
                />
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

        <div className="social-media">
          <div className="social-medias">
            <img
              src="https://images.ctfassets.net/5de70he6op10/4gWq1G4qLLgmqlNeHfzV2T/55298745127c36c5876f4013434c0c37/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917_Copy_2.svg"
              alt="apple-store"
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="social-medias">
            <BsPinterest size={33} className="socials" />
          </div>
          <div className="social-medias">
            <AiOutlineInstagram size={33} className="socials" />
          </div>
          <div className="social-medias">
            <AiFillFacebook size={33} className="socials" />
          </div>
          <div className="social-medias">
            <BsTwitter size={33} className="socials" />
          </div>
        </div>

        <div className="hero-banner">
          <img
            src="https://images.ctfassets.net/5de70he6op10/5abqlDYI7LAz0XOd8EVs4c/963b96e3993c731561bcf2e11ffd984a/Holiday22_SiteFooter_EGiftCards_LS.jpg"
            alt=""
          />
        </div>

        <div className="countries">
          <div className="country">
            <p>US</p>
          </div>
          <div className="country">
            <p>France</p>
          </div>
          <div className="country">
            <p>Germany</p>
          </div>
          <div className="country">
            <p>Italy</p>
          </div>
          <div className="country">
            <p>Spain</p>
          </div>
          <div className="country">
            <p>US</p>
          </div>
        </div>
        <div className="copy-right">
          <div className="copy-right-left">
            <li>Privacy Policy</li>
            <div className="vertical-bar">
              <p>|</p>
            </div>
            <li>Terms of Use</li>
            <div className="vertical-bar">
              <p>|</p>
            </div>
            <li>CA Transparency</li>
            <div className="vertical-bar">
              <p>|</p>
            </div>
            <li>Accessibility</li>
            <div className="vertical-bar">
              <p>|</p>
            </div>
            <li>URBN.com</li>
            <div className="vertical-bar">
              <p>|</p>
            </div>
            <li>For CA Residents</li>
          </div>

          <div className="copy-right-right">
            <p>2022 URBN.com. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

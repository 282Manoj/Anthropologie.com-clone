import React, { useState } from "react";
import "./HomePage.css";
// import HomepageCaroulser from "./HomepageCaroulser";
import Navbar from "./Navbar";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import MyCard from "./MyCard";
import ReadMore from "./ReadMore";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="banner-homepage">
          <img
            src="https://images.ctfassets.net/5de70he6op10/g4Rao5dp4XYh9mHJ31Mku/d4fa659fb2753c2aba8ff20538ba126f/121322_Upto50Off_SelectGifting_HPGSecondaryBanner_LS.jpg?w=2882&q=80&fm=webp"
            alt=""
          />
        </div>

        <div className="shop-by-pics">
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/1UtgIRn3AHo7yfB3CsbYdw/ced16c178459bc64efcf64a82422808b/LL_M1a.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/3RVZ7uybOuPPShdGFMqT8v/b5959346a8523c91664dd622f29f0b42/LL_M1b.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/29ixjcb2lf5i9QNbF0PWJq/6548be3127a3a13e7b4f13e6f029d059/LL_M1c.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/575n66TNKySGUMZHoEPyk1/a8c0be74eb5f6fb558385a19b5cfc120/LL_M1d.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/2FN1eYunGjb7iEefWXUqzL/9ebe26aa22ab3e675b1f27195af512f6/LL_M1e.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/5de70he6op10/4zCA1PXpVLBKmHSl7Od02R/1b5efdb8c8bb14c2edfa17d49818a4b5/LL_M1f.jpg?w=856&q=80&fm=webp"
              alt=""
            />
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        {/* Big BAnner */}

        <div className="big-banner">
          <div className="image-homepage">
            <img
              src="https://images.ctfassets.net/5de70he6op10/4HydoM22nviTQ7ogIXrduJ/a7e098f7d22cf03de5087f1bfcbabdbd/HPGModule_LS.jpg?w=2640&q=80&fm=webp"
              alt=""
            />
          </div>

          <div className="button-homepage">
            <button>ready to ship. ready to give (or get!)</button>
          </div>
        </div>

        <div className="big-banner">
          <div className="image-homepage">
            <img
              src="https://images.ctfassets.net/5de70he6op10/4Coxu47V0tyfirEz2UcoJM/176476dd10f81019582c3e3de68eaefa/LS_M4_Winterwhites.jpg?w=2641&q=80&fm=webp"
              alt=""
            />
          </div>

          <div className="button-homepage">
            <button>shop all clothing</button>
          </div>
        </div>

        <div className="big-banner">
          <div className="image-homepage">
            <img
              src="https://images.ctfassets.net/5de70he6op10/6smg43UznC0EXEEvtUZOeK/2d857986576d95ecf780716a37fc0b77/LS_M5_BHLDN.jpg?w=2641&q=80&fm=webp"
              alt=""
            />
          </div>

          <div className="button-homepage">
            <button>shop the sping '23 collection</button>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        {/* 3 small banner */}

        <div className="small-banners">
          <div className="small-banner">
            <div className="image-small-banner">
              <img
                src="https://images.ctfassets.net/5de70he6op10/6HzwDJ0UOm79B8yDxaLdZl/706de5f3b83a54dd4bb0a54f48738f1a/RR_Tops_Default.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </div>

            <div className="button-small-banner">
              <button>shop tops</button>
            </div>
          </div>

          <div className="small-banner">
            <div className="image-small-banner">
              <img
                src="https://images.ctfassets.net/5de70he6op10/6TIhpD3Lh2NHWsTFjH5A4h/abd257d017b494dc9cf077bc14906653/RR_Shoes_Default.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </div>

            <div className="button-small-banner">
              <button>shop shoes</button>
            </div>
          </div>

          <div className="small-banner">
            <div className="image-small-banner">
              <img
                src="https://images.ctfassets.net/5de70he6op10/CShsGv8tmOEkdHcEZKrZn/4496b2a68f8b9d4b5efee0ed2fb17690/RR_BeddingPillowsThrows.jpg?w=856&q=80&fm=webp"
                alt=""
              />
            </div>

            <div className="button-small-banner">
              <button>shop bedding, pillows & throws</button>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////// */}

        {/* You may also like */}

        <div className="you-may-also-like">
          <div className="heading-you-may-also-like">
            <p>You May Also Like</p>
            <hr />
            <div className="product-carousel">
              <ScrollMenu>
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/68319789_907_b10?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/58458985_031_b?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/79069688_001_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/42754788_095_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/78275666_042_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/55371884_010_a?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/31613169_010_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/68394402_050_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/78010303_000_b2?$an-category$&qlt=80&fit=constrain" />
              </ScrollMenu>
            </div>
          </div>
        </div>

        {/* Treding Now */}

        <div className="trending-now">
          <div className="heading-trending-now">
            <p>Treding Now</p>
            <hr />
            <div className="product-carousel">
              <ScrollMenu>
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/68739671_052_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/39567797_001_b?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/57626095_801_b11?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/64769615_060_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/67417980_037_b?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/4130344600167_015_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/60465937_046_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/60465937_046_b2?$an-category$&qlt=80&fit=constrain" />
                <MyCard cardUrl="https://images.urbndata.com/is/image/Anthropologie/62737606_070_b10?$an-category$&qlt=80&fit=constrain" />
              </ScrollMenu>
            </div>
          </div>
        </div>

        {/* More To Explore */}

        <div className="more-to-explores">
          <div className="heading-more-to-explore">
            <p>More to Explore</p>
          </div>
          <hr />

          <div className="more-to-explore-image">
            <div className="explore-image">
              <div>
                <img
                  src="https://images.ctfassets.net/5de70he6op10/61SwHEwIBXGqyievjZO7vG/4399fed484247331197d235ddd824007/MTE_1_Giftcards.jpg?w=856&q=80&fm=webp"
                  alt=""
                />
              </div>
              <div>
                <p>The Sure-to-Please Shop</p>
                <p>The best present? The one they pick themselves!</p>
                <p>send a gift card or e-gift card</p>
              </div>
            </div>
            <div className="explore-image">
              <div>
                <img
                  src="https://images.ctfassets.net/5de70he6op10/5rXqHDYoqXytAscv6my5TW/26470fa9cfec82723705866d62c341bb/MTE_3.jpg?w=856&q=80&fm=webp"
                  alt=""
                />
              </div>
              <div>
                <p>The Art of the Dress</p>
                <p>
                  Introducing a lovingly curated collection of sculptural
                  silhouettes, enlightened details, and everlasting impressions.
                </p>
                <p>shop BHLDN weddings</p>
              </div>
            </div>
            <div className="explore-image">
              <div>
                <img
                  src="https://images.ctfassets.net/5de70he6op10/4lWXFXOjiia6HPkbeCNQGK/47e13656ccbcb123efc765f17b3d903d/MTE_3_Resortwear.jpg?w=856&q=80&fm=webp"
                  alt=""
                />
              </div>
              <div>
                <p>Destination: Vacation</p>
                <p>
                  If sunshine is a state of mind, consider these looks your
                  virtual boarding pass.
                </p>
                <p>shop getaway & resortwear</p>
              </div>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="details">
          <div className="apply">
            <p>
              * Exclusions apply. See <span>details</span>.
            </p>
          </div>
          <hr />

          <div className="about">
            <div className="about-heading">
              <p>About Us</p>
            </div>
            <div className="about-para">
              <ReadMore>
                Our mission at Anthropologie has always been to surprise and
                delight you with unexpected, distinctive finds for your closet
                and home. We source and craft all of our products with care,
                ensuring that any treasure you find at Anthropologie is unique,
                just like you. Explore our shop to find styles and fits perfect
                for any occasion, from cocktail party dresses to wedding guest
                dresses to casual daytime silhouettes. Shop BHLDN and take a
                look at our selection of wedding dresses. Browse party skirts,
                wide-leg pants and jeans, and blouses that will turn heads.
                Complete your look with uncommon accessories—think only-here
                slides and head-turning totes. Discover our expansive home
                collections, from furniture to curtains, decorative pillows to
                duvets, wall art to Moroccan-inspired rugs. Looking for a
                housewarming gift? Try a coffee table book, original glassware
                or a set of coasters.
              </ReadMore>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;

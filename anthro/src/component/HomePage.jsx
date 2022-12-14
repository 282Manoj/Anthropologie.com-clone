import React from "react";
import "./HomePage.css";
import Navbar from "./Navbar";

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
          
        </div>
      </div>
    </>
  );
}

export default HomePage;

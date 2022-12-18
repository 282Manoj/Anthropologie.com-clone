
import React from "react";
import { BsAlignBottom, BsTypeUnderline } from "react-icons/bs";
import "./Singlepage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const Singlepage = () => {
  const { id } = useParams();

  const clothesingleData = useSelector((store) => store.cloths);

import React from 'react'
// import { BsAlignBottom, BsTypeUnderline } from 'react-icons/bs';
import "./Singlepage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector,useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { addCartItem } from '../Redux/cart/action';
const Singlepage = () => {
  const {id} =useParams();
  const dispatch=useDispatch();
  
const clothesingleData=useSelector((store)=>store.clotheReducer.cloths );
const shoessingleData=useSelector((store)=>store.shoesReducer.Shoes);
// console.log(shoessingleData);
 
  const[clotheData,setClotheData] =useState({});
  const[shoesData,setShoesData] =useState({});


  const [clotheData, setClotheData] = useState({});


  useEffect(() => {
    if (id) {
      const clothe = clothesingleData.find((item) => item.id === Number(id));

      clothe && setClotheData(clothe);
    }
  }, [id, clothesingleData]);

  console.log(clotheData);
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="container">
        <div className="small-img">
          <img src={clotheData.img1} alt="" />
          <img src={clotheData.img2} alt="" />
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
            alt=""
          />
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
            alt=""
          />

  clothe && setClotheData(clothe);
}

if(id){
  const shoes=shoessingleData.find(item=>item.id===Number(id));
  shoes && setShoesData(shoes);
}
  },[id, clothesingleData,shoessingleData])

  // console.log(shoesData)
  return (
    <>
    <div className='nav'>

    <Navbar/>
    </div>
    <div className='container'>
      <div className='small-img'>
        <img src={clotheData.img1 || shoesData.img1}  alt="" />
        <img src={clotheData.img2 || shoesData.img2} alt="" />
        <img src={clotheData.img1 || shoesData.img1} alt="" />
        <img src={clotheData.img2 || shoesData.img2} alt="" />
      </div>
      <div className='large-img'>
        <img src={clotheData.img1 || shoesData.img1}  alt="" />
      </div>
      <div className='details'>
        <h2 style={{marginBottom:"10px",marginTop:"0px"}}>Stella Nova Emblellished <br/>One-Shoulder Dress</h2>
        <p style={{marginBottom:"10px",textDecoration:"underline"}}>Stella Nova</p>
        <p style={{marginBottom:"10px",textDecoration:"underline"}}>Write a Review</p>
        <p style={{marginBottom:"20px"}}>${clotheData.price}</p>
        <p>Or 4 interest free installments of  $106.25 with</p>
        <p style={{marginBottom:"20px"}}>Klarna. <span>or</span> afterpay</p>
        <hr />
        <div className='color-div'>
            <p>Color:<span style={{fontSize:"20px"}}>  Assorted</span></p>
            <img src="https://images.urbndata.com/is/image/Anthropologie/4130573040021_000_s?fit=constrain&hei=56&qlt=75" alt="color" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Black.png/220px-Black.png" alt="color" />
            <img src="https://about.canva.com/wp-content/uploads/sites/8/2019/03/pink.png" alt="color" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Light_blue.png" alt="color" />

        </div>
        <div className="large-img">
          <img src={clotheData.img1} alt="" />
        </div>
        <div className="details">
          <h2 style={{ marginBottom: "10px", marginTop: "0px" }}>
            Stella Nova Emblellished <br />
            One-Shoulder Dress
          </h2>
          <p style={{ marginBottom: "10px", textDecoration: "underline" }}>
            Stella Nova
          </p>
          <p style={{ marginBottom: "10px", textDecoration: "underline" }}>
            Write a Review
          </p>
          <p style={{ marginBottom: "20px" }}>${clotheData.price}</p>
          <p>Or 4 interest free installments of $106.25 with</p>
          <p style={{ marginBottom: "20px" }}>
            Klarna. <span>or</span> afterpay
          </p>
          <hr />
          <div className="color-div">
            <p>
              Color:<span style={{ fontSize: "20px" }}> Assorted</span>
            </p>
            <img
              src="https://images.urbndata.com/is/image/Anthropologie/4130573040021_000_s?fit=constrain&hei=56&qlt=75"
              alt=""
            />
          </div>
          <p className="size-star">Size*</p>
          <div className="size">
            <div>2</div>
            <div>4</div>
            <div>6</div>
            <div>8</div>
            <div>10</div>
          </div>
          <p
            style={{
              marginBottom: "5px",
              marginTop: "16px",
              fontSize: "20px",
              textDecoration: "underline",
            }}
          >
            Size Guide
          </p>
          <p style={{ marginBottom: "5px", fontSize: "20px" }}>Qty*</p>
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>

          </select>
          <div className="button-div">
            <button>ADD TO BASKET</button>
          </div>
          <div className="addto">
            <p>Add To Registry</p>
            <p>Add to Wish List</p>
          </div>
        </div>
        <div className="like">
          <h3>You May Also Like</h3>
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
            alt=""
          />
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
            alt=""
          />
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
            alt=""
          />
          <img
            src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
            alt=""
          />
        </div>

        </select>
        <Link to="/cart">
        <div className='button-div'>

        <button onClick={()=>dispatch(addCartItem(
          clotheData || shoesData
        ))}>ADD  TO  BASKET</button>       
        </div>
        </Link>
      <div className='addto'>
        <p>Add To Registry</p>
        <p>Add to Wish List</p>
      </div>
      </div>
      <div className='like'>
        <h3>You May Also Like</h3>
        <img src={clotheData.img1 || shoesData.img1} alt="pic" />
        <img src={clotheData.img2 || shoesData.img2} alt="pic" />
        <img src= {clotheData.img1 || shoesData.img1}alt="pic" />
        <img src={clotheData.img2 || shoesData.img2}alt="pic" />

      </div>

      {/* <div className='footer'> */}
      <Footer />
      {/* </div> */}
    </>
  );
};

export default Singlepage;

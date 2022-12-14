import React from 'react'
import { BsAlignBottom, BsTypeUnderline } from 'react-icons/bs';
import "./Singlepage.css";
const Singlepage = () => {
  return (
    <div className='container'>
      <div className='small-img'>
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
      </div>
      <div className='large-img'>
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
      </div>
      <div className='details'>
        <h2 style={{marginBottom:"10px",marginTop:"0px"}}>Stella Nova Emblellished <br/>One-Shoulder Dress</h2>
        <p style={{marginBottom:"10px",textDecoration:"underline"}}>Stella Nova</p>
        <p style={{marginBottom:"10px",textDecoration:"underline"}}>Write a Review</p>
        <p style={{marginBottom:"20px"}}>$425.00</p>
        <p>Or 4 interest free installments of  $106.25 with</p>
        <p style={{marginBottom:"20px"}}>Klarna. <span>or</span> afterpay</p>
        <hr />
        <div className='color-div'>
            <p>Color:<span style={{fontSize:"20px"}}>  Assorted</span></p>
            <img src="https://images.urbndata.com/is/image/Anthropologie/4130573040021_000_s?fit=constrain&hei=56&qlt=75" alt="" />
        </div>
        <p className='size-star'>Size*</p>
        <div className='size'>
            <div>2</div>
            <div>4</div>
            <div>6</div>
            <div>8</div>
            <div>10</div>
        </div>
        <p  style={{marginBottom:"5px",marginTop:"16px",fontSize:"20px",textDecoration:"underline"}}>Size Guide</p>
        <p style={{marginBottom:"5px",fontSize:"20px"}}>Qty*</p>
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
        <div className='button-div'>

        <button>ADD  TO  BASKET</button>
        </div>
      <div className='addto'>
        <p>Add To Registry</p>
        <p>Add to Wish List</p>
      </div>
      </div>
      <div className='like'>
        <h3>You May Also Like</h3>
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
        <img src="https://images.urbndata.com/is/image/Anthropologie/66667379_042_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
      </div>
    </div>
  )
}

export default Singlepage

import "./App.css";
import HomePage from "./component/HomePage";
import Singlepage from "./component/Singlepage";
// import Details from "./Pages/Details";
import {Route,Routes} from "react-router-dom"
import Login from "./Akash/Login";
import Signup from "./Akash/Signup";
import  {CartPage}  from "./Akash/Cart/CartPage";
import Clothe from "./Pages/Clothe";
import Address from "./component/Address";
import Shoes from "./Pages/Shoes";

function App() {
  return (
    <>
      {/* <Singlepage/> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/cart" element={<Cartpage/>}></Route> */}    
        <Route path="/singlepage" element={<Singlepage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/clothe" element={<Clothe />}></Route>
        <Route path="/address" element={<Address />}></Route>
        <Route path="/shoes" element={<Shoes/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/clothe/:id" element={<Singlepage />}></Route>
        <Route path="/shoes/:id" element={<Singlepage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        

      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import HomePage from "./component/HomePage";
import Singlepage from "./component/Singlepage";
// import Details from "./Pages/Details";
import {Route,Routes} from "react-router-dom"
import Login from "./Akash/Login";
import Signup from "./Akash/Signup";
import { CartPage } from "./Akash/Cart/CartPage";
function App() {
  return (
    <>
      {/* <Singlepage/> */}
      <Routes>
     <Route path="/" element={<HomePage/>}></Route>
        {/* <Route path="/cart" element={<Cartpage/>}></Route> */}
        <Route path="/singlepage" element={<Singlepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>


     </Routes>

    </>
  );
}

export default App;

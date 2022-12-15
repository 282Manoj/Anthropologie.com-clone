import "./App.css";
import HomePage from "./component/HomePage";
import Singlepage from "./component/Singlepage";
// import Details from "./Pages/Details";
import {Route,Routes} from "react-router-dom"
import Clothe from "./Pages/Clothe";
function App() {
  return (
    <>
      {/* <Singlepage/> */}
      <Routes>
     <Route path="/" element={<HomePage/>}></Route>
     <Route path="/clothe" element={<Clothe/>}></Route>
        {/* <Route path="/cart" element={<Cartpage/>}></Route> */}
        <Route path="/clothe/:id" element={<Singlepage/>}></Route>
   
      
     </Routes>

    </>
  );
}

export default App;

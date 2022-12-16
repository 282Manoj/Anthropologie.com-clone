import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./component/HomePage";
import Singlepage from "./component/Singlepage";
import Details from "./Akash/Details";
import Errror from "./Akash/Errror"
import {Route,Routes} from "react-router-dom"
import Signup from "./Akash/Signup";
import SignIn from "./Akash/SignIn";

function App() {
  return (
    <>
      {/* <Singlepage/> */}
      <Routes>
     <Route path="/" element={<HomePage/>}></Route>
        {/* <Route path="/cart" element={<Cartpage/>}></Route> */}
        <Route path="/singlepage" element={<Singlepage/>}></Route>
        <Route path="/singlepage" element={<Singlepage/>}></Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/details' element={<Details />} />
        <Route path='*' element={<Errror />} />

      
     </Routes>

    </>
  );
}

export default App;

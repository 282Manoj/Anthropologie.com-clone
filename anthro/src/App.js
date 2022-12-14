import "./App.css";
import HomePage from "./component/HomePage";
import Singlepage from "./component/Singlepage";
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
      {/* <Singlepage/> */}
      <Routes>
     <Route path="/" element={<HomePage/>}></Route>
        {/* <Route path="/cart" element={<Cartpage/>}></Route> */}
        <Route path="/singlepage" element={<Singlepage/>}></Route>
        {/* <Route path="/singlepage/:id" element={}></Route> */}
        {/* <Route path='/login' element={<Login/>}></Route> */}
        {/* <Route path='/clothing' element={}></Route> */}
        {/* <Route path='/shoes' element={/>}></Route> */}
        {/* <Route path='*' element={<Error/>}></Route> */}
      
     </Routes>

    </>
  );
}

export default App;

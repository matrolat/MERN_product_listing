import Navbar from "./Components/Navbar";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import AddProducts from "./Components/AddProducts";
import { EditProducts } from "./Components/EditProducts";
import { Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        
        <Navbar />

        <Routes>
          <Route path="/" element={<AllProducts/>} />
          <Route path="/addproducts" element={<AddProducts/>} />
          <Route path="/editproducts/:id" exact={true} element={<EditProducts/>} />
  
        </Routes>
        
      </div>



   
  );
}

export default App;

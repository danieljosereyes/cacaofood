import "./App.css";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Menus from "./pages/Menus";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/cacaofood" element={<Main />} />
      <Route path="/cacaofood/about" element={<About />} />
      <Route path="/cacaofood/contactus" element={<ContactUs />} />
      <Route path="/cacaofood/menus" element={<Menus />} />
      <Route path="/cacaofood/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;

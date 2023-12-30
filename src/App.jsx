import "./App.css";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/cacaofood" element={<Main />} />
      <Route path="/cacaofood/about" element={<About />} />
    </Routes>
  );
}

export default App;

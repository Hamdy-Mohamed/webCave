import "./App.css";
import AboutUs from "./Component/AboutUs";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

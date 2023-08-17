import "./App.css";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div style={{ background: "#EEE" }} className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

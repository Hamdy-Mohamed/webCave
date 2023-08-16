import "./App.css";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div style={{background:"#EEE"}} className="App">
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;

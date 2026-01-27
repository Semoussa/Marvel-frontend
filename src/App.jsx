import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/Marvel_Logo.svg";
import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

function App() {
  return (
    <Router>
      <Header logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;

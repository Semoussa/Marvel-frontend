import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/Marvel_Logo.svg";
import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import CharacterComics from "./pages/CharacterComics";
import Favorites from "./pages/Favorites";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header logo={logo} search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters search={search} />} />
        <Route path="/comics" element={<Comics search={search} />} />
        <Route path="/character/:id" element={<CharacterComics />} />
        <Route path="/favoris" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;

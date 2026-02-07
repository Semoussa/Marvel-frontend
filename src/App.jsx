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
import Footer from "./components/Footer";
import Cookies from "js-cookie";
function App() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const stored = Cookies.get("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const toogleFavorite = (favorite) => {
    setFavorites((prev) => {
      const exists = prev.find(
        (fav) => fav.id === favorite.id && fav.type === favorite.type,
      );

      const newFavorites = exists
        ? prev.filter(
            (fav) => !(fav.id === favorite.id && fav.type === favorite.type),
          )
        : [...prev, favorite];
      Cookies.set("favorites", JSON.stringify(newFavorites), { expires: 10 });
      return newFavorites;
    });
  };

  return (
    <Router>
      <div className="app">
        <Header
          logo={logo}
          search={search}
          setSearch={setSearch}
          favorites={favorites}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/characters"
              element={
                <Characters
                  search={search}
                  favorites={favorites}
                  toogleFavorite={toogleFavorite}
                />
              }
            />
            <Route
              path="/comics"
              element={
                <Comics
                  search={search}
                  favorites={favorites}
                  toogleFavorite={toogleFavorite}
                />
              }
            />
            <Route
              path="/character/:id"
              element={
                <CharacterComics
                  favorites={favorites}
                  toogleFavorite={toogleFavorite}
                />
              }
            />
            <Route
              path="/favoris"
              element={<Favorites favorites={favorites} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

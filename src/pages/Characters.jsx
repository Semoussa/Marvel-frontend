import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Characters() {
  const [charactersData, setCharactersData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--vh5s8x8f2hgt.code.run/api/characters",
        );
        // console.log(response.data.results);
        setCharactersData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Téléchargement...</p>
  ) : (
    <div className="wrapper characters">
      {charactersData.map((elem, index) => {
        return (
          <Link
            to={`/character/${elem._id}`}
            key={`${elem._id}${index}`}
            className="character-card"
          >
            <div className="card-image">
              <img
                src={`${elem.thumbnail.path}/portrait_uncanny.${elem.thumbnail.extension}`}
                alt={elem.name}
              />
            </div>
            <div className="overlay"></div>
            <div className="content">
              <p className="orbitron-title">{elem.name}</p>
              <p className="desc">{elem.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

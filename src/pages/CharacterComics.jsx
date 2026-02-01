import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CharacterComics() {
  const { id } = useParams();
  // console.log(id);
  const [isLoading, setIsLoading] = useState(true);
  const [characterData, setCharacterData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--vh5s8x8f2hgt.code.run/api/character/" +
            `${id}`,
        );

        console.log(response.data);
        setCharacterData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Téléchargement...</p>
  ) : (
    <div>
      <div className="wrapper chara-infos">
        <div className="banner">
          <img
            src={`${characterData.thumbnail.path}/standard_fantastic.${characterData.thumbnail.extension}`}
            alt={characterData.name}
          />
        </div>
        <div className="content">
          <h2>{characterData.name}</h2>
          <p>{characterData.description}</p>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ComicCard from "../components/ComicCard";
import secureImagesUrls from "../utils/secureImagesUrls";
export default function CharacterComics() {
  const { id } = useParams();
  // console.log(id);
  const [isLoading, setIsLoading] = useState(true);
  const [characterData, setCharacterData] = useState("");
  const [comicData, setComicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--vh5s8x8f2hgt.code.run/api/character/" +
            `${id}`,
        );

        // console.log(response.data.comics);
        setCharacterData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (!characterData || characterData.comics.length === 0) return;

    const fetchComics = async () => {
      try {
        const response = await Promise.all(
          characterData.comics.map((comicId) => {
            return axios.get(
              `https://site--marvel-backend--vh5s8x8f2hgt.code.run/api/comic/${comicId}`,
            );
          }),
        );

        const comics = response.map((elem) => elem.data);

        setComicData(comics);
        // console.log("COMIC >>>", comics);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchComics();
  }, [characterData]);

  // console.log("COMIC ICI>>>", comicData);

  return isLoading ? (
    <p>Téléchargement...</p>
  ) : (
    <div>
      <div className="wrapper chara-infos">
        <div className="banner">
          <img
            src={secureImagesUrls(
              characterData.thumbnail.path,
              "standard_fantastic",
              characterData.thumbnail.extension,
            )}
            alt={characterData.name}
          />
        </div>
        <div className="content">
          <h2>{characterData.name}</h2>
          <p>{characterData.description}</p>
        </div>
      </div>
      <div className="wrapper comics">
        {comicData.map((comic) => {
          return <ComicCard elem={comic} key={comic._id} />;
        })}
      </div>
    </div>
  );
}

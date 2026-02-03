import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";

export default function Characters(props) {
  const { search } = props;
  const [charactersData, setCharactersData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--vh5s8x8f2hgt.code.run/api/characters",
          {
            params: {
              name: debouncedSearch,
            },
          },
        );
        // console.log(response.data.results);
        setCharactersData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [debouncedSearch]);

  return isLoading ? (
    <p>Téléchargement...</p>
  ) : (
    <div className="wrapper characters">
      {charactersData.map((elem, index) => {
        return <CharacterCard elem={elem} key={`${elem._id}${index}`} />;
      })}
    </div>
  );
}

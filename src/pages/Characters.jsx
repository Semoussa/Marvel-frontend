import { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

export default function Characters(props) {
  const { search, favorites, toogleFavorite } = props;
  const [charactersData, setCharactersData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 18;

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
              limit,
              skip: (page - 1) * limit,
            },
          },
        );
        // console.log(response.data.results);
        setCharactersData(response.data.results);
        setTotal(response.data.count);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [debouncedSearch, page]);

  const totalPage = Math.ceil(total / limit);
  // console.log(totalPage);

  return isLoading ? (
    <p>Téléchargement...</p>
  ) : (
    <>
      <div className="wrapper characters">
        {charactersData.map((elem, index) => {
          return (
            <CharacterCard
              elem={elem}
              key={`${elem._id}${index}`}
              favorites={favorites}
              toogleFavorite={toogleFavorite}
            />
          );
        })}
      </div>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </>
  );
}

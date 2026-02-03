import { useEffect, useState } from "react";
import axios from "axios";
import ComicCard from "../components/ComicCard";

export default function Comics(props) {
  const { search } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [comicsData, setComicsData] = useState("");
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
          "https://site--marvel-backend--vh5s8x8f2hgt.code.run/api/comics",
          {
            params: {
              title: debouncedSearch,
            },
          },
        );
        // console.log(response.data);

        setComicsData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [debouncedSearch]);

  const sortedComics = [...comicsData].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  return isLoading ? (
    <p>Téléchargement</p>
  ) : (
    <div className="wrapper comics">
      {sortedComics.map((elem) => {
        return <ComicCard elem={elem} key={elem._id} />;
      })}
    </div>
  );
}

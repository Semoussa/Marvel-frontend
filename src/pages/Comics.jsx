import { useEffect, useState } from "react";
import axios from "axios";

export default function Comics() {
  const [isLoading, setIsLoading] = useState(true);
  const [comicsData, setComicsData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--marvel-backend--vh5s8x8f2hgt.code.run/api/comics",
        );
        // console.log(response.data);

        setComicsData(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Téléchargement</p>
  ) : (
    <div className="wrapper comics">
      {comicsData.map((elem) => {
        // {
        //   if (!elem.name) {
        //     return;
        //   }
        // }
        return (
          <div key={elem._id} className="comic-card">
            <div>
              <img
                src={`${elem.thumbnail.path}/portrait_uncanny.${elem.thumbnail.extension}`}
                alt={elem.name}
              />
            </div>
            <div className="overlay"></div>
            <div className="content">
              <p>{elem.name}</p>
              <p>{elem.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

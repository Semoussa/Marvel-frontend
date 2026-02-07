import secureImagesUrls from "../utils/secureImagesUrls";
import FavorisIcon from "./FavorisIcon";
import { Link } from "react-router-dom";
export default function CharacterCard(props) {
  const { elem, favorites, toogleFavorite } = props;
  const favoriteObj = {
    id: elem._id,
    type: "character",
    title: elem.title,
    description: elem.description,
    thumbnail: elem.thumbnail,
  };
  const isFavorite = favorites.some(
    (fav) => fav.id === elem._id && fav.type === "character",
  );
  return (
    <>
      <Link to={`/character/${elem._id}`} className="character-card">
        <div className="card-image">
          <img
            src={secureImagesUrls(
              elem.thumbnail.path,
              "portrait_uncanny",
              elem.thumbnail.extension,
            )}
            alt={elem.name}
          />
        </div>
        <div className="overlay"></div>
        <div className="content">
          <p className="orbitron-title card-title">{elem.name}</p>
          <p className="desc">
            {elem.description || "Aucune description disponible"}
          </p>
        </div>
        <FavorisIcon
          isFavorite={isFavorite}
          onToogle={() => {
            toogleFavorite(favoriteObj);
          }}
        />
      </Link>
    </>
  );
}

import secureImagesUrls from "../utils/secureImagesUrls";
import FavorisIcon from "./FavorisIcon";
export default function ComicCard(props) {
  const { elem, favorites, toogleFavorite } = props;
  const favoriteObj = {
    id: elem._id,
    type: "comic",
    title: elem.title,
    description: elem.description,
    thumbnail: elem.thumbnail,
  };

  const isFavorite = favorites.some(
    (fav) => fav.id === elem._id && fav.type === "comic",
  );
  return (
    <div className="comic-card">
      <div className="card-image">
        <img
          src={secureImagesUrls(
            elem.thumbnail.path,
            "portrait_uncanny",
            elem.thumbnail.extension,
          )}
          alt={elem.title}
        />
      </div>
      <div className="overlay"></div>
      <div className="content">
        <p className="orbitron-title card-title">{elem.title}</p>
        <p className="desc">
          {elem.description || "Aucune description disponible"}{" "}
        </p>
      </div>
      <FavorisIcon
        isFavorite={isFavorite}
        onToogle={() => {
          toogleFavorite(favoriteObj);
        }}
      />
    </div>
  );
}

import CharacterCard from "../components/CharacterCard";
import secureImagesUrls from "../utils/secureImagesUrls";
export default function Favorites(props) {
  const { favorites, toogleFavorite } = props;
  console.log(favorites);

  const favoriteCharacters = favorites.filter((f) => f.type === "character");
  const favoriteComics = favorites.filter((f) => f.type === "comic");
  {
    if (favorites.length === 0) {
      return (
        <div className="orbitron-title no-fav">
          <p>Vous n'avez encore aucun favoris ⭐</p>
        </div>
      );
    }
  }
  return (
    <div className="wrapper">
      <p className="orbitron-title fav-chara">Mes personnages Favoris</p>
      {favoriteCharacters.length !== 0 ? (
        <div className="characters">
          {favoriteCharacters.map((elem) => {
            return (
              <div className="character-card">
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
                    {elem.description || "Aucune description disponible"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="fav-chara">Aucun personnage favoris disponible</p>
      )}

      <p className="orbitron-title fav-chara">Mes Comics favoris</p>
      {favoriteComics.length !== 0 ? (
        <div className="comics">
          {favoriteComics.map((elem) => {
            return (
              <div className="character-card">
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
                    {elem.description || "Aucune description disponible"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="fav-chara">Aucun comic favoris est disponible</p>
      )}
    </div>
  );
}

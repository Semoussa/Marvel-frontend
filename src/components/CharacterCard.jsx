import secureImagesUrls from "../utils/secureImagesUrls";
import FavorisIcon from "./FavorisIcon";
import { Link } from "react-router-dom";
export default function CharacterCard({ elem }) {
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
          <p className="orbitron-title">{elem.name}</p>
          <p className="desc">{elem.description}</p>
        </div>
        <FavorisIcon />
      </Link>
    </>
  );
}

import { FaHeart } from "react-icons/fa";
export default function FavorisIcon(props) {
  const { onToogle, isFavorite } = props;
  return (
    <div className="icone-card">
      <FaHeart
        className="heart-icon"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onToogle();
        }}
        color={isFavorite ? "red" : "white"}
        aria-label="Ajouter aux favoris"
      />
    </div>
  );
}

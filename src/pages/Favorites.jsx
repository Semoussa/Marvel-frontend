export default function Favorites(props) {
  const { favorites } = props;

  return favorites.length !== 0 ? (
    <div>Favorites</div>
  ) : (
    <div className="orbitron-title no-fav">
      <p>Tu n'as encore aucun favoris ⭐</p>
    </div>
  );
}

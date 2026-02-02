export default function ComicCard({ elem }) {
  return (
    <div className="comic-card">
      <div className="card-image">
        <img
          src={`${elem.thumbnail.path}/portrait_uncanny.${elem.thumbnail.extension}`}
          alt={elem.title}
        />
      </div>
      <div className="overlay"></div>
      <div className="content">
        <p className="orbitron-title">{elem.title}</p>
        <p className="desc">{elem.description}</p>
      </div>
    </div>
  );
}

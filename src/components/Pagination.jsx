export default function Pagination(props) {
  const { page, setPage, totalPage } = props;
  // console.log(page);

  return (
    <div className="wrapper pagination">
      <button
        className="orbitron-title"
        onClick={() => {
          setPage((prev) => Math.max(prev - 1, 1));
        }}
        disabled={page === 1}
      >
        PRECEDENT
      </button>
      <p className="orbitron-title page">
        Page {page} sur {totalPage}
      </p>
      <button
        className="orbitron-title"
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
        disabled={page === totalPage}
      >
        SUIVANT
      </button>
    </div>
  );
}

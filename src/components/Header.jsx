import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const { logo } = props;
  const navigate = useNavigate();
  return (
    <header>
      <div className="wrapper">
        <div
          className="header-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="" />
        </div>
        <input type="text" placeholder="Trouver un film, ou un personnage" />
        <div className="header-button">
          <button>S'inscrire</button>
          <button>Se connecter</button>
        </div>
      </div>
      <div className="menu">
        <div
          onClick={() => {
            navigate("/characters");
          }}
        >
          <p>PERSONNAGE</p>
        </div>
        <div
          onClick={() => {
            navigate("/comics");
          }}
        >
          <p>COMICS</p>
        </div>
        <div>
          <p>FAVORIS</p>
        </div>
      </div>
    </header>
  );
}

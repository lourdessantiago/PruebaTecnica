import"../styles/header.scss"

import ButtonBackground from "./buttonBackground";

function Header(props) {
  const { mostrar } = props;
  const selection = (categoria) => {
    mostrar(categoria);
  };
  return (
    <div className="header-align">
      <div className="header-container">
        <div>
          <p style={{ textAlign: "center" }}>
            <span className="title-app font-white">Harry Potter</span>
          </p>
        </div>
        <div>
          <p className="select-filter font-white" style={{ textAlign: "center" }}>Seleecciona tu filtro</p>
        </div>
        <ButtonBackground action={selection} />
      </div>
    </div>
  );
}
export default Header;

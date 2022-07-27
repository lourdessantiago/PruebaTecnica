import "../styles/cardBackground.scss";
import { BiBookmark } from "react-icons/bi";
import data from "../db/hp-characters.json";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useState } from "react";

function CardBackground(props) {
  const { element } = props;
  const [favorito, setFavorito] = useState(false);
  const colorHouse = (house) => {
    switch (house) {
      case "Gryffindor":
        return "house-bg-Gryffindor";
      case "Slytherin":
        return "house-bg-Slytherin";
      case "Hufflepuff":
        return "house-bg-Hufflepuff";
      case "Ravenclaw":
        return "house-bg-Ravenclaw";
      default:
        return "house-bg";
    }
  };

  return (
    <div className="tarjeta">
      <div className={"tarjeta-imagen " + colorHouse(element.house)}>
        <div className="tarjeta-contiene-img">
          <img className="img-tarjeta" src={element.image} alt={element.name} />
        </div>
      </div>

      <div className="tarjeta-info">
        <div className="container-info">
          <div className="info-header">
            <span>
              {element.alive ? "vivo" : "muerto"}/
              {element.hogwartsStudent ? "Estudiante" : "Staff"}
            </span>
            {favorito ? (
              <BsFillBookmarkFill
                className="btn-fav"
                onClick={() => setFavorito(!favorito)}
              />
            ) : (
              <BiBookmark
                className="btn-fav"
                onClick={() => setFavorito(!favorito)}
              />
            )}
          </div>

          <div className="info-title">
            <h2 className="title"> {element.name}</h2>
          </div>

          <div className="info-desc">
            <p className="desc">
              <span>Cumpleaños</span>
              <span>{element.dateOfBirth}</span>
            </p>
            <p className="desc">
              <span>Género</span>
              <span>{element.gender}</span>
            </p>
            <p className="desc">
              <span>Color de ojos</span>
              <span>{element.eyeColour}</span>
            </p>
            <p className="desc">
              <span>Color de cabello</span>
              <span>{element.hairColour}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardBackground;

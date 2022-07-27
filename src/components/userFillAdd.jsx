import "../styles/userFillAdd.scss"
import { BiBookmark } from "react-icons/bi";
import { ImUserPlus } from "react-icons/im";
function UserFillAdd() {
  return (
    <div className="boton-fav-agr">
      <div className="boton-fav">
        <button type="button" className="favoritos">
          FAVORITOS <BiBookmark id="icon-fav"/>
        </button>
      </div>
      <div className="boton-agr">
        <button type="button" className="agregar">
          AGREGAR<ImUserPlus className="fa-solid fa-user-plus" id="icon-agr"/>
        </button>
      </div>
    </div>
  );
}
export default UserFillAdd

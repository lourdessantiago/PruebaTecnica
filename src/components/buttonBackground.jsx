import "../styles/butoonBackground.scss"
function ButtonBackground(props) {
  const{action}=props;
  const estudiantes=()=>{
    action("estudiantes");
  }
  const staff= ()=>{
    action("staff");
  }

  
  return <div className="buttons">

    <div className="boton">
      <button type="button" className="boton-grande" onClick={estudiantes}>
        ESTUDIANTE
      </button>
    </div>
    <div className="boton">
      <button type="button" className="boton-grande" onClick={staff}>
        STAFF
      </button>
    </div>
  </div>;
}

export default ButtonBackground;

import "../styles/modal.scss"
import {CgClose} from "react-icons/cg"
function Modal() {
    return (
        <div>
    <div className="modal">
        <div className="header-modal">
            <p className="title-modal">Agrega personaje</p>
            <button type="button" className="close-modal"><CgClose id="icon-close"/></button>
        </div>

        <form className="datos-form">
            <div className="datos-nuevos">
                <label className="datos">Nombre</label>
                <input type="text" className="inp-datos"/>
            </div>
            <div className="datos-nuevos">
                <label className="datos">Cumpleaños</label>
                <input type="text" className="inp-datos"/>
            </div>
            <div className="datos-nuevos">
                <label className="datos">Color de ojos</label>
                <input type="text" className="inp-datos"/>
            </div>
            <div className="datos-nuevos">
                <label className="datos">Color de cabello</label>
                <input type="text" className="inp-datos"/>
            </div>


            <div className="option">
                <div className="options-radus">
                    <div>
                        <label>Género</label>
                    </div>
                    <div>
                        <input type="radio"/>
                        <label>Mujer</label>
                        <input type="radio"/>
                        <label>Hombre</label>
                    </div>

                </div>
                <div>
                    <div>
                        <label>Posición</label>

                    </div>
                    <div>
                        <input type="radio"/>
                        <label>Estudiante</label>
                        <input type="radio"/>
                        <label>Staff</label>
                    </div>


                </div>
            </div>
            <div className="box-botton">
                <div className="button-salve">
                    <button type="button" className="salve">Guardar</button>
                </div>

            </div>

        </form>

    </div>
</div>
    );
    
}
export default Modal;
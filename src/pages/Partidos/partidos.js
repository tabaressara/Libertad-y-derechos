
import styles from "./partidos.module.css"
import AppModal from '../../componentes/LoginModal/Login';
import Rmodal from '../../componentes/RegisterModal/register';

function Partidos() {
    return (
        <div className = {styles.fondo}>
            <AppModal/>
            <Rmodal />
            <div className = {styles.base}>
                <img src="imagen6.jpg" className = {styles.imagen} alt="Imagen" />
                <div>
                    <h1 className = {styles.titulo}>
                        A jugar!
                    </h1>
                    <p className = {styles.texto}>
                        ¡Prepárate para jugar y <br/>
                        disfrutar al máximo en la cancha!</p>
                </div>
            </div>
        </div>
    );
}


export default Partidos;
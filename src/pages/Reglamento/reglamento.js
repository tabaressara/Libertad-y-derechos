import styles from "./reglamento.module.css"
import AppModal from '../../componentes/LoginModal/Login';
import Rmodal from '../../componentes/RegisterModal/register';

function Reglamento() {
    return (
        <div className = {styles.fondo}>
            <AppModal/>
            <Rmodal />
            <div className = {styles.base}>
                <img src="imagen4.jpg" className = {styles.imagen} alt="Imagen" /> 
                <div>
                    <h1 className = {styles.titulo}>
                        Reglamento del <br/>
                        voleibol
                    </h1>
                    <p className = {styles.texto}>
                        Antes de dar el primer saque, es esencial conocer <br/> 
                        las reglas básicas del voleibol. <br/><br/>
                        En esta sección, te ofrecemos una introducción al reglamento básico del <br/> 
                        voleibol, para que puedas disfrutar de cada set.</p>
                    <a href="#reglamento" className={styles.boton}>
                        ver reglamento
                    </a>
                </div>
            </div>    
        </div>
    );
}

export default Reglamento;
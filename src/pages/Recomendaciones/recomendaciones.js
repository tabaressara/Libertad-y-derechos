import styles from "./recomendaciones.module.css";
import { useDispatch } from 'react-redux';
import AppModal from '../../componentes/LoginModal/Login';
import Rmodal from '../../componentes/RegisterModal/register';

function Recomendaciones() {
    const dispatch = useDispatch();
    return (
        <div className = {styles.fondo}>
            <AppModal/>
            <Rmodal/>
            <div className = {styles.base}>
                <img src="imagen5.jpg" className = {styles.imagen} alt="Imagen" />
                <div> 
                    <p className = {styles.texto}>
                        Te invitamos a explorar nuestra sección de recomendaciones <br/>
                        para jugar, donde encontrarás valiosos consejos y <br/>
                        estrategias para mejorar tus habilidades en el voleibol.
                        <br/> <br/> <br/>
                        No importa si eres un principiante o un jugador experimentado, <br/>
                        siempre hay espacio para aprender.</p>
                    <a href="#recomendacion" className={styles.boton}>
                        ver recomendaciones
                    </a>
                </div>
            </div>
            <div id = "recomendacion">
                <div className = {styles.base2}>
                    <img src="imagen7.jpg" className = {styles.imagen2} alt="Imagen" />
                    <h1 className = {styles.titulo}>
                        Recomendaciones
                    </h1>
                    <div className = {styles.separador}>
                        <div className = {styles.caja}>
                            <p className = {styles.parrafos}> 
                                Ropa Adecuada: <br/> <br/>
                                Usa ropa cómoda y transpirable. La mayoría de los jugadores usan camisetas de manga corta y pantalones cortos o mallas deportivas.
                            </p>
                        </div>
                        <div className = {styles.caja2}>
                            <p className = {styles.parrafos}> 
                                Hidratación: <br/> <br/>
                                Lleva agua para mantenerte hidratado durante el juego y los entrenamientos. </p>
                        </div>
                    </div>
                    <div className = {styles.separador}>
                        <div className = {styles.caja}>
                            <p className = {styles.parrafos}> 
                                Mochila o Bolsa:  <br/> <br/>
                                Una mochila o una bolsa de deporte es útil para llevar tu equipo y accesorios de forma organizada.
                            </p>
                        </div>
                        <div className = {styles.caja2}>
                            <p className = {styles.parrafos}> 
                                Balón de Voleibol:  <br/> <br/>
                                Asegúrate de jugar con una pelota de voleibol oficial y adecuadamente inflada.
                            </p>
                        </div>
                    </div>
                    <div className = {styles.separador}>
                        <div className = {styles.caja}>
                            <p className = {styles.parrafos}> 
                                Protección para las Articulaciones: <br/> <br/>
                                Considera el uso de rodilleras para proteger tus rodillas durante las caídas y los movimientos bruscos.
                            </p>
                        </div>
                        <div className = {styles.caja2}>
                            <p className = {styles.parrafos}> 
                                Zapatillas: <br/> <br/>
                                Que ofrezcan soporte, estabilidad y tracción en la cancha. Evita las zapatillas de correr, ya que no proporcionan la misma estabilidad lateral.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recomendaciones;
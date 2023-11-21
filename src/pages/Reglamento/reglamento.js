import styles from "./reglamento.module.css"
import { motion } from 'framer-motion';
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
            <div id = "reglamento">
                <div className = {styles.base2}>
                    <h1 className = {styles.titulo2}>
                        Reglamento
                    </h1>
                    <div className ={styles.contenido}>
                        <div className={styles.fila}>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo1.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Equipos: <br/></b>
                                    Cada equipo está formado por seis 
                                    jugadores en la cancha al mismo tiempo.
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo2.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Puntuación: <br/></b>
                                    El juego se juega a un número predeterminado de puntos 
                                    (generalmente 25, 21 o 15) y un equipo debe ganar por al
                                    menos dos puntos. Los puntos se ganan cuando el balón 
                                    toca el suelo dentro del campo del equipo contrario.
                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo4.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Bloqueo: <br/></b>
                                    Los jugadores pueden intentar bloquear el balón en la red 
                                    cuando el equipo contrario ataca.
                                    No se permite el bloqueo del saque.

                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo5.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Toques: <br/></b>
                                    Cada equipo tiene tres toques (toques de balón) para pasar 
                                    el balón al campo contrario. Los toques típicamente incluyen 
                                    un pase (recepción), una colocación (set) y un remate (ataque).

                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo3.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Saque:  <br/></b>
                                    El saque se realiza desde la línea de fondo y debe pasar por 
                                    encima de la red hacia el campo contrario. El saque debe ser 
                                    ejecutado correctamente para que sea válido.

                                </p>
                            </motion.div>
                        </div>
                        <div className={styles.fila}>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo6.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Rotación:: <br/></b>
                                    Los jugadores deben rotar en sentido horario cuando su equipo gana el saque.

                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo7.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Contacto neto:  <br/></b>
                                    Los jugadores no pueden tocar la red durante el juego, excepto en ciertas circunstancias específicas.

                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo8.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Líneas: <br/></b>
                                    El balón se considera dentro si cualquier parte de él toca la línea de la cancha.

                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo9.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Substituciones: <br/></b>
                                    Los equipos pueden realizar sustituciones en posiciones específicas de manera limitada durante el juego.    

                                </p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: '0px 0px 15px 3px rgba(255,255,255,0.5)' }}
                                className={styles.caja}
                            >
                                <img src="logo10.png" className = {styles.imagen2} alt="Imagen" />
                                <p className={styles.textos}>
                                    <b>Libero:  <br/></b>
                                    Un jugador designado como "libero" tiene ciertas 
                                    restricciones pero puede entrar y salir del juego sin
                                    restricciones en las rotaciones.

                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Reglamento;
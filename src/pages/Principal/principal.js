
import styles from "./principal.module.css";
import { useDispatch } from 'react-redux';
import AppModal from '../../componentes/LoginModal/Login';
import Rmodal from '../../componentes/RegisterModal/register';
import { RtoggleModal } from '../../redux/registerSlice';

function Principal() {
    const dispatch = useDispatch();
    return (
        <div className = {styles.fondo}>
            <AppModal/>
            <Rmodal />
            <div className = {styles.base}>
                <img src="fotoInicio.jpg" className = {styles.imagen} alt="Imagen" />
                <div> 
                    <p className = {styles.texto}>
                    El voleibol es más que un deporte, es una pasión que te llevará a nuevas alturas. 
                    <br/><br/><br/>
                    ¡Sé parte de nuestro equipo y descubre tu potencial en la red!</p>
                </div>
                <button className = {styles.botonR} onClick={() => dispatch(RtoggleModal())}>Regístrese ahora</button>
            </div>
            <div>
                <img src="imagen1.jpg" className = {styles.imagen1} alt="Imagen" />
                <div className = {styles.baseDos}>
                    <h1 className = {styles.titulo}>
                        Quiénes somos
                    </h1>
                    <p className = {styles.textoDos}>
                        ¡Bienvenido a nuestra página dedicada a la enseñanza del voleibol <br/>
                        y la programación de partidos con personas de tu comunidad!
                        <br/><br/><br/>
                        Aquí, nos apasiona el voleibol y estamos comprometidos a <br/> ayudarte a mejorar tus habilidades en este emocionante deporte, <br/> 
                        al tiempo que te conectamos con otros entusiastas del voleibol en tu área.
                        <br/><br/><br/>
                        Únete a nuestra comunidad de amantes del voleibol, descubre nuevas amistades <br/> y mejora tus habilidades en la cancha mientras te diviertes.</p>
                </div>
            </div>
            <div> 
                <img src="imagen2.jpg" className = {styles.imagen2} alt="Imagen" />
                <div className = {styles.baseTres}>
                    <h1 className = {styles.tituloDos}>
                        ¿Cómo se inicia?
                    </h1>
                    <p className = {styles.textoTres}>
                        Aquí, podrás acceder a una amplia variedad de tutoriales<br/>
                        diseñados para perfeccionar tus habilidades en la cancha.<br/><br/><br/>
                        Lo mejor de todo es que tu progreso quedará registrado, <br/>
                        permitiéndote seguir de cerca tus avances y 
                        marcar tus metas de mejora.
                        <br/><br/><br/>
                        Además, facilitamos la organización de partidos 
                        y encuentros amigables con otros apasionados <br/>
                        del voleibol en tu área,
                        podrás seleccionar la ubicación y la disponibilidad <br/>
                        que prefieras, para que jugar una partida
                        sea tan sencillo como unos cuantos clics.</p>
                </div>
            </div>
        </div>
    );
}

export default Principal;
import styles from './aprendeLogin.module.css'
import { Link } from 'react-router-dom';

const AprendeLogin = () => {
    
    
    return (
    <div className = {styles.fondo}>
        <div className = {styles.base}>
            <img src="imagen8.jpg" className = {styles.imagen} alt="Imagen" />
            <p className = {styles.texto}>
            El aprendizaje es la puerta que te lleva a un mundo lleno de posibilidades infinitas.<br/><br/><br/>
            ¡Abre esa puerta y descubre todo lo que puedes lograr!</p>   
        </div>
        <div className = {styles.contenedor}>
            <h2 className = {styles.nombre}>Saque</h2>
            <div className = {styles.caja}>
                <Link to="/Saque1">
                <div className = {styles.cajitas}>
                    <img src="imagen9.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
                <Link to="/Saque2">
                <div className = {styles.cajitas}>
                    <img src="imagen10.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
                <Link to="/Saque3">
                <div className = {styles.cajitas}>
                    <img src="imagen11.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
            </div>
        </div>
        <div className = {styles.contenedor2}>
            <h2 className = {styles.nombre}>Control</h2>
            <div className = {styles.caja}>
                <Link to="/Control1">
                <div className = {styles.cajitas}>
                    <img src="imagen12.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
                <Link to="/Control2">
                <div className = {styles.cajitas}>
                    <img src="imagen13.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
                <Link to="/Control3">
                <div className = {styles.cajitas}>
                    <img src="imagen14.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
            </div>
        </div>
        <div className = {styles.contenedor3}>
            <h2 className = {styles.nombre}>Remate</h2>
            <div className = {styles.caja}>
                <Link to="/Remate1">
                <div className = {styles.cajitas}>
                    <img src="imagen15.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
                <Link to="/Remate2">
                <div className = {styles.cajitas}>
                    <img src="imagen16.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
                <Link to="/Remate3">
                <div className = {styles.cajitas}>
                    <img src="imagen17.jpg" className = {styles.imagen2} alt="Imagen" />
                </div>
                </Link>
            </div>
        </div>
    </div>
    );
   };
   
   export default AprendeLogin;
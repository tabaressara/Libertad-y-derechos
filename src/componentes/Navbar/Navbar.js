
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoggedIn } from '../../redux/controlSlice';
import { toggleModal } from '../../redux/loginSlice';
import { RtoggleModal } from '../../redux/registerSlice';
import { Link } from 'react-router-dom';
import styles from "../Navbar/Navbar.module.css";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const isLoggedIn = useSelector((state) => state.control.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(toggleLoggedIn());
    navigate('/');
  };

  return (
    <nav className={styles.header}>
      {isLoggedIn ? (
        <>
        <Link to="/Inicio" className={styles.links}>
          <img 
              src='Logo.png'  
              className={styles.logo} 
              alt='Logo'/>
        </Link>
        <Link to="/AprendeLogin" className={styles.links}>
            Aprende a jugar
        </Link>
        <Link to="/ReglamentoLogin" className={styles.links}>
            Reglamento
        </Link>
        <Link to="/RecomendacionesLogin" className={styles.links}>
            Recomendaciones
        </Link>
        <Link to="/PartidosLogin" className={styles.links}>
            Partidos
        </Link>
        <Link to="/User" className={styles.links}>
            User
        </Link>
        <button onClick={handleLogin} className={styles.registro}>
          Cerrar sesión
        </button>
      </>
      ) : (
        <>
          <Link to="/" className={styles.links}>
            <img 
              src='Logo.png'  
              className={styles.logo} 
              alt='Logo'/> 
          </Link>
          <Link to="/Aprende" className={styles.links}>
            Aprende a jugar
          </Link>
          <Link to="/Reglamento" className={styles.links}>
            Reglamento
          </Link>
          <Link to="/Recomendaciones" className={styles.links}>
            Recomendaciones
          </Link>
          <Link to="/Partidos" className={styles.links}>
            Partidos
          </Link>
          <button onClick={() => dispatch(toggleModal())} className = {styles.botonModel}>
            Iniciar sesión
          </button>
          <button onClick={() => dispatch(RtoggleModal())} className = {styles.registro}>
            Registrarse
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;



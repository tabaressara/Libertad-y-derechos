import { useSelector, useDispatch } from 'react-redux';
import { RtoggleModal} from '../../redux/registerSlice';
import { toggleLoggedIn } from '../../redux/controlSlice';
import styles from './register.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../../firebase/fireStore'
import { createUserWithEmailAndPassword } from 'firebase/auth';


function Register() {
    const dispatch = useDispatch();
    const abierto = useSelector((state) => state.registro.abierto);
    const navigate = useNavigate();
    const [error, setError] = useState(false);
  
    const controlFormulario = (e) => {
      e.preventDefault();
      const nombre = e.target.name.value;
      const email = e.target.email.value;
      const contraseña = e.target.password.value;
      console.log("Nombre:", nombre)
      console.log('Email:', email);
      console.log('Contraseña:', contraseña);

      createUserWithEmailAndPassword(auth, email, contraseña).then((usuario) => {
        dispatch(toggleLoggedIn());
        dispatch(RtoggleModal());
        navigate('/Inicio');
      }).catch((error) => {
        setError(true);
        })
    };
  
    return (
      <div >
        {abierto && (
          <div className = {styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.base}>
              <button className={styles.cerrar} onClick={() => dispatch(RtoggleModal())}>
                X
              </button>
              <h1 className={styles.titulo}>Registrarse</h1>
              <p className={styles.texto}>
                ¡No esperes más para explorar todas las oportunidades que tenemos para ti!
              </p>
              <form onSubmit={controlFormulario} className={styles.formulario}>
              <div className={styles.inputContainer}>
                <input
                    type="name"
                    id="name"
                    name="name"
                    required
                    className={styles.input}
                    placeholder="Nombre"
                />
                </div>
                <div className={styles.inputContainer}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={styles.input}
                    placeholder="Email"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className={styles.input}
                    placeholder="Contraseña"
                  />
                </div>
                <div>
                {error ? <p>Error</p> : null}
                  <button className={styles.botonModel} type="submit">
                    Registrarse
                  </button>
                </div>
              </form>
              <p className={styles.texto}>
                <br/>Al registrarte aceptas nuestros términos y condiciones
              </p>
            </div>
          </div>
          </div>
        )}
      </div>
    );
  }
  
  export default Register;

import { useSelector, useDispatch } from 'react-redux';
import { toggleModal} from '../../redux/loginSlice';
import { toggleLoggedIn } from '../../redux/controlSlice';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/fireStore'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


function Login() {
  const dispatch = useDispatch();
  const abierto = useSelector((state) => state.modal.abierto);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const controlFormulario = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const contraseña = e.target.password.value;
    console.log('Email:', email);
    console.log('Contraseña:', contraseña);

    signInWithEmailAndPassword(auth, email, contraseña).then((usuario) => {
      dispatch(toggleLoggedIn());
      dispatch(toggleModal());
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
            <button className={styles.cerrar} onClick={() => dispatch(toggleModal())}>
              X
            </button>
            <h1 className={styles.titulo}>Inicia sesión</h1>
            <p className={styles.texto}>
              ¡Bienvenido de nuevo! <br /> Estamos encantados de tenerte de regreso
            </p>
            <form onSubmit={controlFormulario} className={styles.formulario}>
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
                  Inicia sesión
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Login;


import styles from './error.module.css'

const Error = () => {
  return (
    <div className = {styles.fondo}>
      <p className = {styles.texto}>Lo sentimos, la página que estás buscando no se ha encontrado.</p>
      <img src='error.png' className = {styles.imagen} alt='error'/> 
    </div>
  );
};

export default Error;

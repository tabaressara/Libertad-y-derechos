import styles from './saque2.module.css'; // Importa los estilos CSS

function App() {
  return (
      <div className = {styles.fondo}>
          <div className = {styles.base}>
              <div>
                  <h1 className = {styles.titulo}>
                      Tipos de saque
                  </h1>
              </div>
              <div className={styles.basef}>
                <img src="saque1.jpg" className = {styles.imagen1} alt="Imagen" />
                <img src="saque2.jpg" className = {styles.imagen2} alt="Imagen" />
                <img src="saque3.jpeg" className = {styles.imagen3} alt="Imagen" />
                <img src="saque4.jpg" className = {styles.imagen4} alt="Imagen" />
              </div>
              <div className={styles.basef1}>
                <img src="saque8.jpg" className = {styles.imagen5} alt="Imagen" />
                <img src="saque6.jpg" className = {styles.imagen6} alt="Imagen" />
                <img src="saque5.jpg" className = {styles.imagen7} alt="Imagen" />
                <img src="saque7.jpeg" className = {styles.imagen8} alt="Imagen" />
              </div>
          </div>
      </div>
  );
}

export default App;


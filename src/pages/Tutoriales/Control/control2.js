import styles from './control2.module.css'; // Importa los estilos CSS

function App2() {
  return (
      <div className = {styles.fondo}>
          <div className = {styles.base}>
              <div>
                  <h1 className = {styles.titulo}>
                      Tipos de control
                  </h1>
              </div>
              <div className={styles.basef}>
                <img src="control1.jpeg" className = {styles.imagen1} alt="Imagen" />
                <img src="control2.jpeg" className = {styles.imagen2} alt="Imagen" />
                <img src="contro3.png" className = {styles.imagen3} alt="Imagen" />
                <img src="control4.jpg" className = {styles.imagen4} alt="Imagen" />
              </div>
              <div className={styles.basef1}>
                <img src="control5.jpeg" className = {styles.imagen5} alt="Imagen" />
                <img src="control6.jpg" className = {styles.imagen6} alt="Imagen" />
                <img src="control7.jpg" className = {styles.imagen7} alt="Imagen" />
                <img src="control8.png" className = {styles.imagen8} alt="Imagen" />
              </div>
          </div>
      </div>
  );
}

export default App2;
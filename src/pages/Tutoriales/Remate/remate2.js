import styles from './remate2.module.css'; // Importa los estilos CSS

function App() {
  return (
      <div className = {styles.fondo}>
          <div className = {styles.base}>
              <div>
                  <h1 className = {styles.titulo}>
                      Tipos de remate
                  </h1>
              </div>
              <div className={styles.basef}>
                <img src="remate1.jpg" className = {styles.imagen1} alt="Imagen" />
                <img src="remate2.jpg" className = {styles.imagen2} alt="Imagen" />
                <img src="remate7.jpg" className = {styles.imagen3} alt="Imagen" />
                <img src="remate4.png" className = {styles.imagen4} alt="Imagen" />
              </div>
              <div className={styles.basef1}>
                <img src="remate5.jpg" className = {styles.imagen5} alt="Imagen" />
                <img src="remate6.jpeg" className = {styles.imagen6} alt="Imagen" />
                <img src="remate3.jpg" className = {styles.imagen7} alt="Imagen" />
                <img src="remate8.jpg" className = {styles.imagen8} alt="Imagen" />
              </div>
          </div>
      </div>
  );
}

export default App;
import styles from './control3.module.css';

function Video() {
    return (
        <div className = {styles.fondo}>
            <div className = {styles.base}>
                <div>
                  <h1 className = {styles.titulo}>
                      Control
                  </h1>
                  <video controls autoPlay loop className={styles.video}>
                    <source src="./video3.mp4" />
                    Tu navegador no soporta la reproducción de videos.
                  </video>
                </div>
            </div>
        </div>
    );
}

export default Video;
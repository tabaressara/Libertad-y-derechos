import styles from './saque3.module.css';

function Video() {
    return (
        <div className = {styles.fondo}>
            <div className = {styles.base}>
                <div>
                  <h1 className = {styles.titulo}>
                      Saque
                  </h1>
                  <video controls autoPlay loop className={styles.video}>
                    <source src="./video.mp4" />
                    Tu navegador no soporta la reproducción de videos.
                  </video>
                </div>
            </div>
        </div>
    );
}

export default Video;

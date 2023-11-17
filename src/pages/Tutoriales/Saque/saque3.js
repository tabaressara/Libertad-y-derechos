import styles from './saque3.module.css';
import ReactPlayer from 'react-player';

function App() {
    const vidUrl="https://www.youtube.com/watch?v=Ro8UAwYUqCs"
    return (
        <div className = {styles.fondo}>
            <div className = {styles.base}>
                <div>
                    <h1 className = {styles.titulo}>
                        video instructivo sobre saques
                    </h1>
                </div>
                <div className={styles.basef}>
                    <div className = "video">
                        <ReactPlayer 
                        url = {vidUrl} controls
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
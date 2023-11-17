import styles from './remate3.module.css';
import ReactPlayer from 'react-player';

function App() {
    const vidUrl="https://www.youtube.com/watch?v=6E_o4FTRnRw"
    return (
        <div className = {styles.fondo}>
            <div className = {styles.base}>
                <div>
                    <h1 className = {styles.titulo}>
                        video instructivo sobre remates
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
import styles from './control1.module.css'

const Control1 = () => {
    
    return (
      <div className = {styles.fondo}>
        <div className = {styles.cajaT}>
            <h1 className = {styles.titulo}>Control en Voleibol: Técnicas, Estrategias y Secretos para la Defensa</h1>
        </div>
        <div className = {styles.caja1}>
            <div className = {styles.contenido}>
                <p>El voleibol es un deporte emocionante que requiere una combinación de habilidades ofensivas y defensivas. 
                    En el corazón de la defensa en el voleibol se encuentra el "control", una habilidad esencial que permite a los jugadores recibir, 
                    pasar y defender la pelota con precisión y eficacia. En este artículo, exploraremos en profundidad el control en el voleibol, 
                    analizando sus técnicas, estrategias y ofreciendo ejemplos prácticos.</p>

                <h2>La Importancia del Control en Voleibol</h2>

                <p>El control es crucial en el voleibol, ya que se encarga de mantener la pelota en juego y permite a un equipo pasar al ataque. 
                    Una recepción o defensa efectiva coloca al equipo en una posición ventajosa para orquestar un ataque exitoso. 
                    Aquí es donde entran en juego las técnicas de control.</p>
            </div>
            <div className = {styles.cajatip1}>
                <p className = {styles.tip1}>
                <b>Comunicación Efectiva:</b><br/><br/>
                    La comunicación entre los jugadores es clave para coordinar la recepción y la defensa. 
                    Utiliza señales o lenguaje corporal para indicar quién se hará cargo de la pelota y evitar confusiones en el campo.
                    </p>
            </div>
        </div>
        <div className = {styles.caja2}>
            <div className = {styles.contenido2}>

                <h2>Técnicas de Control en Voleibol</h2>

                <h3>1. Recepción (Pase) con Antebrazos</h3>

                <p>La recepción con antebrazos es una técnica fundamental que implica el uso de los antebrazos para recibir un saque o un remate del equipo contrario. 
                Los pasos clave para realizar una buena recepción con antebrazos son:</p>

                <ol>
                    <li>Mantén las piernas flexionadas y los pies separados a la altura de los hombros.</li>
                    <li>Extiende los brazos hacia adelante, con los codos ligeramente flexionados.</li>
                    <li>Coloca las manos una encima de la otra y forma una plataforma con los antebrazos.</li>
                    <li>Golpea la pelota en el centro de la plataforma de antebrazos.</li>
                    <li>Realiza un seguimiento de la pelota para asegurarte de que se dirija hacia la posición deseada.</li>
                </ol>

                <img src="imagen20.jpg" className = {styles.imagen} alt="Imagen" />

                <h3>2. Defensa en Inmersión (Dive)</h3>

                <p>La defensa en inmersión es una técnica que se utiliza cuando la pelota es difícil de alcanzar con una recepción de antebrazos estándar. 
                En lugar de ello, el jugador se lanza hacia adelante y se tira al suelo para alcanzar la pelota. Los pasos clave son:</p>

                <ol>
                    <li>Anticipa el movimiento de la pelota y elige la dirección de inmersión adecuada.</li>
                    <li>Realiza un rápido desplazamiento lateral para llegar a la posición óptima.</li>
                    <li>Lánzate al suelo y estira un brazo hacia la pelota, golpeándola con la palma de la mano.</li>
                    <li>Protege tu cabeza y rostro con el otro brazo para evitar lesiones.</li>
                </ol>

                <img src="imagen21.jpg" className = {styles.imagen} alt="Imagen" />
            </div>
            <div className = {styles.cajatip2}>
                <p className = {styles.tip2}>
                <b>Posicionamiento Estratégico:</b><br/><br/>
                    Aprende a adaptar tu formación defensiva según las tendencias de ataque del equipo contrario. 
                    Coloca a los jugadores en áreas estratégicas que cubran las zonas más vulnerables de la cancha.
                </p>
            </div>
            <div className = {styles.cajatip3}>
                <p className = {styles.tip2}>
                <b>Mantén la Concentración: </b><br/><br/>
                    Mantén la concentración en el juego en todo momento. Anticipa el movimiento de la pelota y prepárate para reaccionar rápidamente en situaciones de recepción y defensa.
                </p>
            </div>
        </div>
        <div className = {styles.caja3}>
            <div className = {styles.contenido}>
                <h2>Estrategias para un Control Efectivo</h2>

                <p>Una vez que has dominado las técnicas de control en voleibol, es esencial comprender cómo incorporarlas en tu estrategia de juego. Algunas estrategias clave incluyen:</p>

                <ul>
                    <li><strong>Comunicación en Defensa:</strong> La comunicación efectiva entre los jugadores es esencial para coordinar el control en situaciones de recepción y defensa. 
                    Utiliza señales o lenguaje corporal para indicar quién tomará la pelota.</li>
                    <li><strong>Posicionamiento Defensivo:</strong> Coloca a los jugadores en posiciones estratégicas en función de las tendencias de ataque del equipo contrario. 
                    Ajusta tu formación defensiva para cubrir las áreas más vulnerables.</li>
                    <li><strong>Recuperación Rápida:</strong> Después de realizar una recepción o defensa exitosa, asegúrate de estar listo para participar en el siguiente movimiento, 
                    ya sea un pase o un ataque.</li>
                </ul>

                <h2>Ejemplos en el Juego</h2>

                <p>Imaginemos la siguiente situación: Estás en una posición de defensa en el fondo de la cancha. El equipo contrario ejecuta un poderoso remate. 
                Utilizas una técnica de defensa en inmersión para alcanzar la pelota justo antes de que toque el suelo. 
                Realizas un pase preciso que permite a tu equipo montar un contraataque exitoso. 
                Este ejemplo ilustra cómo el control adecuado puede cambiar el curso de un punto en un juego de voleibol.</p>
            </div>
        </div>
        <div className = {styles.cajatip4}>
                <p className = {styles.tip1}>
                    <b>Mantén la Pasión:</b><br/><br/>
                    El voleibol es un deporte apasionante. Mantén tu amor por el juego y tu motivación para mejorar constantemente tus habilidades de control.
                </p>
            </div>
      </div>
    );
  };
  
  export default Control1;

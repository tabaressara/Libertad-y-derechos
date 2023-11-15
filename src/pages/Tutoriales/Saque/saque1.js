import styles from './saque1.module.css'

const Saque1 = () => {
    return (
      <div className = {styles.fondo}>
        <div className = {styles.cajaT}>
            <h1 className = {styles.titulo}>Todo sobre el Saque en Voleibol: Tipos, Técnicas y Estrategias</h1>
        </div>
        <div className = {styles.caja1}>
            <div className = {styles.contenido}>
                <p>El saque es uno de los elementos fundamentales en el voleibol, ya que inicia cada punto del juego. 
                        Dominar esta habilidad es esencial para cualquier jugador, independientemente de su nivel de experiencia. 
                        En este artículo, exploraremos en detalle el saque en voleibol, sus tipos, técnicas y estrategias, 
                        respaldados por ejemplos claros e imágenes ilustrativas.</p>

                <h2>La Importancia del Saque</h2>

                <p>El saque en el voleibol es una de las principales oportunidades para tomar ventaja en un punto. 
                    Un saque bien ejecutado puede dificultar la recepción del equipo contrario, lo que a su vez aumenta las posibilidades de ganar el punto. 
                    Aquí es donde entran en juego diferentes tipos de saque y técnicas.</p>
            </div>
            <div className = {styles.cajatip1}>
                <p className = {styles.tip1}>
                <b>Desarrolla una rutina de saque:</b><br/><br/>
                Crea una rutina antes de cada saque. Esto te ayudará a enfocarte y mantener la calma bajo presión.
                </p>
            </div>
        </div>
        <div className = {styles.caja2}>
            <div className = {styles.contenido2}>

                <h2>Tipos de Saque en Voleibol</h2>
                
                <h3>1. Saque de Mano Alta (Float Serve)</h3>

                <p>El saque de mano alta es un tipo de saque que no implica mucho giro de la pelota en el aire. Aquí hay una técnica básica para ejecutar un saque de mano alta:</p>

                <ol>
                    <li>Ponte en posición con los pies separados a la altura de los hombros.</li>
                    <li>Sostén la pelota con una mano y el brazo opuesto en alto.</li>
                    <li>Lleva la mano con la pelota hacia atrás y, luego, hacia adelante.</li>
                    <li>Golpea la pelota en la parte inferior para crear poco giro.</li>
                    <li>El objetivo es que la pelota se mueva de manera impredecible, dificultando la recepción del equipo contrario.</li>
                </ol>

                <img src="imagen18.jpg" className = {styles.imagen} alt="Imagen" />

                <h3>2. Saque de Mano Baja (Topspin Serve)</h3>

                <p>El saque de mano baja, también conocido como saque con efecto (topspin serve), implica hacer que la pelota gire hacia adelante en el aire, 
                    lo que la hace más difícil de recibir. Aquí te mostramos cómo hacerlo:</p>

                <ol>
                    <li>Coloca los pies ligeramente separados.</li>
                    <li>Sostén la pelota con una mano y la otra en alto.</li>
                    <li>Golpea la pelota en la parte inferior, pero con un giro hacia adelante.</li>
                    <li>El giro creará una trayectoria descendente en la pelota, dificultando su recepción.</li>
                </ol>

                <img src="imagen19.jpeg" className = {styles.imagen} alt="Imagen" />
            </div>
            <div className = {styles.cajatip2}>
                <p className = {styles.tip2}>
                <b>Trabaja en tu consistencia:</b><br/><br/>
                La consistencia en el saque es clave. Practica regularmente para asegurarte de que puedes repetir tu técnica con precisión en cada saque.
                </p>
            </div>
            <div className = {styles.cajatip3}>
                <p className = {styles.tip2}>
                <b>Aprende a leer a tus oponentes:</b><br/><br/>
                    Observa a los jugadores receptores y descubre sus debilidades. Algunos jugadores pueden tener dificultades con saques rápidos, 
                    mientras que otros pueden luchar contra saques en una zona específica de la cancha. Aprovecha esta información en tu estrategia de saque.
                </p>
            </div>
        </div>
        <div className = {styles.caja3}>
            <div className = {styles.contenido}>
                <h2>Estrategias de Saque</h2>

                <p>Una vez que conoces los tipos de saque, es importante entender cuándo usarlos y cómo incorporarlos en tu estrategia de juego. Aquí tienes algunas estrategias clave:</p>

                <ul>
                    <li><strong>Saque Flotante para Variar:</strong> El saque de mano alta puede ser efectivo para variar tus servicios. Al combinar saques de mano alta y mano baja, 
                    mantendrás al equipo contrario en constante adaptación.</li>
                    <li><strong>Saque de Mano Baja para Presión:</strong> Cuando necesitas presionar al equipo contrario y evitar que ejecuten un ataque fuerte, 
                    el saque de mano baja es efectivo. Apunta a áreas específicas del campo, como la línea de saque o el centro de la cancha.</li>
                    <li><strong>Saque en Zonas Estratégicas:</strong> Observa a tus oponentes y sirve en áreas donde sabes que tienen debilidades. 
                    Esto podría significar apuntar al jugador más débil en recepción o explorar los espacios vacíos en la cancha.</li>
                </ul>

                <h2>Ejemplos en el Juego</h2>

                <p>Para ilustrar estas técnicas y estrategias, considera la siguiente situación: Estás sirviendo con un saque de mano baja. 
                    Observas que el receptor contrario no está bien posicionado y tiene dificultades con los saques de mano baja. 
                    Optas por apuntar el saque cerca de la línea de saque en la zona derecha del campo, lejos del receptor más fuerte. 
                    Esto aumenta tus posibilidades de forzar una recepción defectuosa y ganar el punto.</p>
            </div>
        </div>
        <div className = {styles.cajatip4}>
                <p className = {styles.tip1}>
                    <b>Mantén la calma bajo presión:</b><br/><br/>
                    El saque es una de las situaciones más cruciales en el voleibol. Aprende a controlar tus nervios y mantener la calma, especialmente en momentos críticos del partido.
                </p>
            </div>
      </div>
    );
  };
  
  export default Saque1;

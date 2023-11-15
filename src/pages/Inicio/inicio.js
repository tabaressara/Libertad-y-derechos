import styles from "./inicio.module.css";
function Inicio() {
    return (
        <div className = {styles.fondo}>
            <div className = {styles.base}>
                <img src="imagen3.jpg" className = {styles.imagen} alt="Imagen" />
                <div>
                    <h1 className = {styles.titulo}>
                        Es tiempo de aprender
                    </h1>
                    <p className = {styles.texto}>
                        El voleibol se convierte en un arte que puedes dominar desde 
                        la comodidad de tu hogar! Aquí, encontrarás una biblioteca de videos <br/>
                        cuidadosamente seleccionados para avanzar en tu viaje de aprendizaje. 
                        Sumérgete en la experiencia y descubre cómo tus habilidades en <br/>
                        el voleibol despegarán a nuevos niveles.</p>
                </div>
            </div>
            <div>
                <img src="imagen4.jpg" className = {styles.imagen2} alt="Imagen" />
                <div className = {styles.base2}>
                    <div>
                        <h1 className = {styles.titulo2}>
                            Reglamento del <br/>
                            voleibol
                        </h1>
                        <p className = {styles.texto2}>
                            Antes de dar el primer saque, es esencial conocer <br/> 
                            las reglas básicas del voleibol. <br/><br/>
                            En esta sección, te ofrecemos una introducción al reglamento básico del <br/> 
                            voleibol, para que puedas disfrutar de cada set.</p>
                    </div>
                </div>
            </div>
            <div> 
                <img src="imagen5.jpg" className = {styles.imagen3} alt="Imagen" />
                <div className = {styles.base3}>
                    <div> 
                        <h1 className = {styles.titulo3}>
                            recomendaciones
                        </h1>
                        <p className = {styles.texto3}>
                            Te invitamos a explorar nuestra sección de recomendaciones <br/>
                            para jugar, donde encontrarás valiosos consejos y <br/>
                            estrategias para mejorar tus habilidades en el voleibol.
                            <br/> <br/> <br/>
                            No importa si eres un principiante o un jugador experimentado, <br/>
                            siempre hay espacio para aprender.</p>
                    </div>
                </div>
            </div>
            <div> 
                <img src="imagen6.jpg" className = {styles.imagen4} alt="Imagen" />
                <div className = {styles.base4}>
                    <div>
                        <h1 className = {styles.titulo4}>
                            A jugar!
                        </h1>
                        <p className = {styles.texto4}>
                            ¡Prepárate para jugar y <br/>
                            disfrutar al máximo en la cancha!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
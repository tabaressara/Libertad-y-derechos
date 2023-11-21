import React from 'react';
import MapComponent from './../../componentes/Mapa/mapa';
import { useState, useEffect } from 'react';
import {db} from './../../firebase/fireStore';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import styles from './partidosL.module.css'

function AgregarPartido() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [lugar, setLugar] = useState('');
  const [partidos, setPartidos] = useState([]);
  
  const [calificacion, setCalificacion] = useState(0);
  const [saque, setSaque] = useState(0);
  const [control, setControl] = useState(0);
  const [remate, setRemate] = useState(0);
  const [ganoPartido, setGanoPartido] = useState(false);
  const [partidoSeleccionado, setPartidoSeleccionado] = useState('');

  const [mostrarAgregarPartido, setMostrarAgregarPartido] = useState(false);
  const [mostrarCalificarPartido, setMostrarCalificarPartido] = useState(false);

  const handleAgregarPartido = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'partidos'), {
        nombre: nombre,
        fecha: fecha,
        lugar: lugar,
        jugadoresConfirmados: 0,
      });

      console.log('Partido agregado con ID:', docRef.id);

      setNombre('');
      setFecha('');
      setLugar('');

      obtenerPartidos();
    } catch (error) {
      console.error('Error al agregar partido:', error);
    }
  };

  const unirseAlPartido = async (partidoId, jugadoresConfirmados) => {
    try {
      const partidoRef = doc(db, 'partidos', partidoId);
      const updatedJugadoresConfirmados = jugadoresConfirmados + 1;

      await updateDoc(partidoRef, {
        jugadoresConfirmados: updatedJugadoresConfirmados,
      });

      console.log('Jugador se unió al partido:', partidoId);
      obtenerPartidos();
    } catch (error) {
      console.error('Error al unirse al partido:', error);
    }
  };

  const obtenerPartidos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'partidos'));
      const partidosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPartidos(partidosData);
    } catch (error) {
      console.error('Error al obtener partidos:', error);
    }
  };

  const handleCalificarPartido = async (event) => {
    event.preventDefault();

    try {
      const datosRef = await addDoc(collection(db, 'datos'), {
        partidoId: partidoSeleccionado,
        calificacion: calificacion,
        saque: saque,
        control: control,
        remate: remate,
        ganoPartido: ganoPartido,
      });

      console.log('Partido calificado con ID:', datosRef.id);

      setCalificacion(0);
      setSaque(0);
      setControl(0);
      setRemate(0);
      setGanoPartido(false);

      // Elimina el partido calificado de la base de datos
      await deleteDoc(doc(db, 'partidos', partidoSeleccionado));
      console.log('Partido eliminado de la base de datos:', partidoSeleccionado);
      
      // Vuelve a cargar los partidos después de eliminar uno
      obtenerPartidos();
    } catch (error) {
      console.error('Error al calificar partido o eliminarlo:', error);
    }
  };

  useEffect(() => {
    obtenerPartidos();
  }, []);

  return (
    <div className = {styles.fondo}>
      <div className = {styles.base}>
        <div className = {styles.mapa}>
        <MapComponent />
        </div>
        <div className = {styles.info}>
          <div className = {styles.infoF}> 
          <button className = {styles.boton} onClick={() => setMostrarAgregarPartido(true)}>Agregar Partido</button>
          {mostrarAgregarPartido && (
            <div className = {styles.cajaF}>
              <button className={styles.cerrar} onClick={() => setMostrarAgregarPartido(false)}>X</button>
              <form className={styles.formulario} onSubmit={handleAgregarPartido}>
                <label className={styles.label}>
                  Nombre del Partido:
                  <input
                    className={styles.input}
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </label>
                <label className={styles.label}>
                  Fecha:
                  <input
                    className={styles.input}
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </label>
                <label className={styles.label}>
                  Lugar:
                  <input
                    className={styles.input}
                    type="text"
                    value={lugar}
                    onChange={(e) => setLugar(e.target.value)}
                  />
                </label>
                <button className={styles.botonI} type="submit">Agregar Partido</button>
              </form>
            </div>
          )}
        
          <div>
            <button className = {styles.boton} onClick={() => setMostrarCalificarPartido(true)}>Calificar Partido</button>
            {mostrarCalificarPartido && (
              <div className = {styles.cajaF2}>
                <button className={styles.cerrar} onClick={() => setMostrarCalificarPartido(false)}>X</button>
                <form className={styles.formulario} onSubmit={handleCalificarPartido}>
                  <select className={styles.input3} onChange={(e) => setPartidoSeleccionado(e.target.value)}>
                    <option value="">Selecciona un partido</option>
                    {partidos.map((partido) => (
                      <option key={partido.id} value={partido.id}>
                        {partido.nombre}
                      </option>
                    ))}
                  </select>
                  <label className={styles.label}>
                    Calificación:
                    <input
                      className={styles.input2}
                      type="number"
                      value={calificacion}
                      onChange={(e) => setCalificacion(parseInt(e.target.value))}
                    />
                  </label>
                  <label className={styles.label}>
                    Saque:
                    <input
                      className={styles.input2}
                      type="number"
                      value={saque}
                      onChange={(e) => setSaque(parseInt(e.target.value))}
                    />
                  </label>
                  <label className={styles.label}>
                    Control:
                    <input
                      className={styles.input2}
                      type="number"
                      value={control}
                      onChange={(e) => setControl(parseInt(e.target.value))}
                    />
                  </label>
                  <label className={styles.label}>
                    Remate:
                    <input
                      className={styles.input2}
                      type="number"
                      value={remate}
                      onChange={(e) => setRemate(parseInt(e.target.value))}
                    />
                  </label>
                  <label className={styles.label}>
                    ¿Ganó el partido?
                    <input
                      className={styles.input2}
                      type="checkbox"
                      checked={ganoPartido}
                      onChange={(e) => setGanoPartido(e.target.checked)}
                    />
                  </label>
                  <button className={styles.botonI} type="submit">Calificar Partido</button>
                </form>
              </div>
            )}
          </div>
          </div>
          <div>
            <h1 className={styles.texto} >Partidos Agendados</h1>
            <ul>
              {partidos.map((partido) => (
                <li className={styles.texto} key={partido.id}>
                  <strong>Nombre:</strong> {partido.nombre},{' '}
                  <strong>Fecha:</strong> {partido.fecha},{' '}
                  <strong>Lugar:</strong> {partido.lugar},{' '}
                  <strong>Jugadores Confirmados:</strong> {partido.jugadoresConfirmados},{' '}
                  <button className={styles.botonU} onClick={() => unirseAlPartido(partido.id, partido.jugadoresConfirmados)}>
                    Unirse al Partido
                  </button>
                </li>
              ))}
            </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AgregarPartido;

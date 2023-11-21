import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Chart from 'chart.js/auto';
import styles from './user.module.css'

const UserDashboard = () => {
    const [datos, setDatos] = useState([]);
    const [promedioCalificacion, setPromedioCalificacion] = useState(0);
    const [promedioControl, setPromedioControl] = useState(0);
    const [promedioSaque, setPromedioSaque] = useState(0);
    const [promedioRemate, setPromedioRemate] = useState(0);
    const [chartInstance, setChartInstance] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const db = getFirestore();
          const querySnapshot = await getDocs(collection(db, 'datos'));
          const datosList = querySnapshot.docs.map((doc) => doc.data());
          setDatos(datosList);
  
          if (datosList.length > 0) {
            const sumaCalificaciones = datosList.reduce((acc, dato) => acc + dato.calificacion, 0);
            const sumaControl = datosList.reduce((acc, dato) => acc + dato.control, 0);
            const sumaSaque = datosList.reduce((acc, dato) => acc + dato.saque, 0);
            const sumaRemate = datosList.reduce((acc, dato) => acc + dato.remate, 0);
            const cantidadPartidos = datosList.length;
  
            const promedioC = sumaCalificaciones / cantidadPartidos;
            const promedioCon = sumaControl / cantidadPartidos;
            const promedioS = sumaSaque / cantidadPartidos;
            const promedioR = sumaRemate / cantidadPartidos;
  
            setPromedioCalificacion(promedioC);
            setPromedioControl(promedioCon);
            setPromedioSaque(promedioS);
            setPromedioRemate(promedioR);
          }
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      if (datos.length > 0) {
        if (chartInstance) {
          chartInstance.destroy();
        }
  
        const ctx = document.getElementById('graficoBarras');
        const newChartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Calificación', 'Control', 'Saque', 'Remate'],
            datasets: [
              {
                label: 'Promedios',
                data: [
                  promedioCalificacion,
                  promedioControl,
                  promedioSaque,
                  promedioRemate,
                ],
                backgroundColor: [
                  '#183554',
                  '#183554',
                  '#183554',
                  '#183554',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
  
        setChartInstance(newChartInstance);
      }
    }, [datos, promedioCalificacion, promedioControl, promedioSaque, promedioRemate]);
  
    return (
      <div className={styles.base}>
        <div className={styles.fondo}>
            <div className={styles.grafico}>
                <canvas id="graficoBarras"></canvas>
            </div>
        </div>
        <div className={styles.fondo2}>
            <div className={styles.texto}>
                <h1>
                    Promedios
                </h1>
                <p>
                    La verdadera grandeza se encuentra en el constante deseo de superación, desafiando el conformismo del promedio y buscando siempre la excelencia.
                </p>
                <img src='imagen25.jpg' className={styles.imagen} alt='imagen'/>
            </div>
        </div>
      </div>
    );
  };
  
  export default UserDashboard;

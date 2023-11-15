
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './saque2.module.css'; // Importa los estilos CSS

const imageUrls = [
    'Raster.png',
    'Raster2.png',
    'Raster3.png',
    'Raster4.png',
    'Raster5.png',
    'Raster6.png',
    'Raster7.png',
    'Raster8.png',
    'Raster9.png',
    'Raster10.png',
  ];

const information = [
  {
    title: 'Información 1',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 1.</p>
        <img src="imagen.jpg" alt="Imagen 1" />
      </div>
    ),
  },
  {
    title: 'Información 2',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 2.</p>
        <img src="imagen.jpg" alt="Imagen 2" />
      </div>
    ),
  },
  {
    title: 'Información 3',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 1.</p>
        <img src="imagen.jpg" alt="Imagen 1" />
      </div>
    ),
  },
  {
    title: 'Información 4',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 2.</p>
        <img src="imagen.jpg" alt="Imagen 2" />
      </div>
    ),
  },
  {
    title: 'Información 5',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 1.</p>
        <img src="imagen.jpg" alt="Imagen 1" />
      </div>
    ),
  },
  {
    title: 'Información 6',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 2.</p>
        <img src="imagen.jpg" alt="Imagen 2" />
      </div>
    ),
  },
  {
    title: 'Información 7',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 1.</p>
        <img src="imagen1.jpg" alt="Imagen 1" className={styles.imagenes} />
      </div>
    ),
  },
  {
    title: 'Información 8',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 2.</p>
        <img src="imagen.jpg" alt="Imagen 2" />
      </div>
    ),
  },
  {
    title: 'Información 9',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 1.</p>
        <img src="imagen.jpg" alt="Imagen 1" />
      </div>
    ),
  },
  {
    title: 'Información 10',
    content: (
      <div>
        <p>Esta es la información sobre la imagen 2.</p>
        <img src="imagen.jpg" alt="Imagen 2" />
      </div>
    ),
  },
];

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openInfo = (index) => {
    setSelectedImage(index);
  };

  const closeInfo = () => {
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageGrid}>
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            className={styles.imageContainer}
            onClick={() => openInfo(index)}
            whileHover={{ scale: 1.05 }}
          >
            <img src={url} alt={`Imagen ${index + 1}`} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className={styles.tipModal}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{information[selectedImage].title}</h2>
            <div>{information[selectedImage].content}</div>
            <button onClick={closeInfo}>Cerrar</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;





'use client'

import { Carousel, Modal, Button } from 'react-bootstrap';
import styles from './CarouselProyectos.module.css';
import { useState } from 'react';

export default function CarouselProyectos({images}) { 


  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');



  const handleImageClick = async (src,id) => {
    setModalImage(src);
    setShowModal(true);

  };  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className={`col-md-7 ${styles.col}`}>
    <Carousel className='w-100 m-4'>
      
        {images.map((image)=>{
          return <Carousel.Item key={image._id}><img
          className="d-block"
          src={image.src}
          alt={image.alt}
          height={300}
          onClick={()=> handleImageClick(image.src, image._id)}
          /></Carousel.Item>
        })} 
    </Carousel>
    <Modal show={showModal} onHide={handleCloseModal} centered size='xl'>
      <Modal.Body className={styles.zoomable}>
        <img src={modalImage} alt="Imagen ampliada" className="img-fluid" style={{width: '100%', height: 'auto'}}/>
      </Modal.Body>
    </Modal>
    </div>
  )
}

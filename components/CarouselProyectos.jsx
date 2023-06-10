'use client'

import { useEffect } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
import styles from './CarouselProyectos.module.css';
import { useState } from 'react';
import { FaThumbsUp} from 'react-icons/fa';
import host from '@/host';

export default function CarouselProyectos({images}) { 


  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [idImage,setIdImage] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);


  const fetchLikes = (id) => {
    return fetch(`${host}/images/${id}`, {cache: 'no-store'})
    .then(res=>res.json());
  }
  const fetchStatusLikeImage = (id) => {
    return fetch(`${host}/images/${id}/like`, {cache: 'no-store'})
    .then(res=>res.json());
  }

  const handleImageClick = async (src,id) => {
    setModalImage(src);
    setIdImage(id);
    setShowModal(true);
    setLikes(await fetchLikes(id))
    setIsLiked(await fetchStatusLikeImage(id))

  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleLike = async() => {
    setIsLiked(!isLiked);
    await fetch(`${host}/images/${idImage}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: idImage}),
    })
    setLikes(await fetchLikes(idImage))
    
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
      <Modal.Footer>
          <Button variant={isLiked ? "white": "primary"} onClick={handleLike}>
           <FaThumbsUp /> {isLiked ? "No me gusta": "Me gusta"}
          </Button>
          {likes} Me gusta
        </Modal.Footer>
    </Modal>
    </div>
  )
}



import Label from '../components/Label.jsx';
import Button from '../components/Button.jsx'
import LinkSocial from '../components/LinkSocial.jsx';
import CarouselProyectos from '../components/CarouselProyectos.jsx';
import host from '@/host.js';


export default  async function HomePage() {

  const fetchImages = () =>{
    return fetch(`${host}/images`, {cache: 'no-store'})
    .then(res => res.json());
  }
  
  const images = await fetchImages();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <Label 
            title='Hola, soy un desarrollador web.' 
            body='Estudiante de quinto año en la Universidad de Tarapacá en la
                carrera de Ingeniería Civil en Computación e Informática.
                Manejo tecnologías de desarrollo web y un poco de
                desarrollo de aplicaciones.'/>
                <a href='/OLVER ARCE LIMACHE.pdf'><Button value='CV'/></a>
                <LinkSocial/>
          </div>
          <CarouselProyectos images={images}/>
        </div>
      </div>
    </div>
  )
}

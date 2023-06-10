import ColeccionImagenes from '@/components/ColeccionImagenes.jsx';
import Label from '../../components/Label.jsx';
import IconoAcerca from '../../components/IconoAcerca.jsx'

export default function AcercaPage() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-6 col-sm-12'>
          <Label 
          title='Acerca de mí' 
          body='Mi nombre es Olver José Arce Limache. Tengo 21 años y voy en 4to año en la carrera de Ingeniería Civil en Computación e Informática. Me interesa aprender tecnologías para desarrollar aplicaciones.
          Finalmente, tomé un curso de mecanografía. Tuve clases de Karate en algunas vacaciones. En mi Liceo A-5 obtuve el 1er lugar (2018) en sus Olimpiadas de Matemática.
          '/>
        </div>
        <div className='col-md-6 col-sm-12'>
          <ColeccionImagenes>
              <IconoAcerca src={'./img/icons/Css3.png'} alt={'css'}/>
              <IconoAcerca src={'./img/icons/html5.png'} alt={'html'}/>
              <IconoAcerca src={'./img/icons/javascript.png'} alt={'javascript'}/>
              <IconoAcerca src={'./img/icons/react.gif'} alt={'react'}/>
              <IconoAcerca src={'./img/icons/android studio.png'} alt={'android studio'}/>
              <IconoAcerca src={'./img/icons/mysql.png'} alt={'mysql'}/>
              <IconoAcerca src={'./img/icons/git.png'} alt={'git'}/>
              <IconoAcerca src={'./img/icons/mongodb.png'} alt={'mongodb'}/>
            </ColeccionImagenes>
            <ColeccionImagenes>
              <IconoAcerca src={'./img/icons/matematica.png'} alt={'matematica'}/>
              <IconoAcerca src={'./img/icons/mecanografia.png'} alt={'mecanografia'}/>
              <IconoAcerca src={'./img/icons/ajedrez.png'} alt={'ajedrez'}/>
              <IconoAcerca src={'./img/icons/futbol.png'} alt={'futbol'}/>
              <IconoAcerca src={'./img/icons/licencia conducir.png'} alt={'licencia'}/>
            </ColeccionImagenes>

          </div>
      </div>
    </div>
  )
}

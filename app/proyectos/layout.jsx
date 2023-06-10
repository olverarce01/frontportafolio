import Label from '../../components/Label.jsx'
export default function layout({children}) {
  return (
    <div className='container'>
    <Label title={'Proyectos'} body={'Esta es la sección de proyectos de mi portafolio, Aquí podrás explorar una selección de mis proyectos en GitHub, donde he puesto en práctica mis habilidades como desarrollador.'}/>
    {children}
    </div>
  )
}

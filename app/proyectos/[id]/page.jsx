import Proyecto from '../../../components/Proyecto.jsx'

export default function ProyectoPage({params}) {
  const id = params.id
  return (
    <Proyecto id={id}/>
  )
}

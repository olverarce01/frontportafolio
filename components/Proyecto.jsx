import Label from "./Label";


const fetchProject = (id) =>{
  return fetch(`http://localhost:3001/projects/${id}`, {cache: 'no-store'})
  .then(res => res.json());
}

export default async function Proyecto({id}) {
  const proyecto = await fetchProject(id);
  return (
    <div className="container">
      <Label title={proyecto.title} body={proyecto.body}/>
    </div>
  )
}

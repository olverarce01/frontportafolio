import Label from "./Label";
import host from "@/host";

const fetchProject = (id) =>{
  return fetch(`${host}/projects/${id}`, {cache: 'no-store'})
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

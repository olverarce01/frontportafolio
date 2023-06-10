import CardProyecto from './CardProyecto.jsx';


const fetchProjects = () =>{
  return fetch('http://localhost:3001/projects', {cache: 'no-store'})
  .then(res => res.json());
}


export default async function ListProyectos() {
  const projects = await fetchProjects();
  return (
    <div className="row">
      {projects.map((project)=>{
        return <div className='col-md-6' key={project._id}>
          <CardProyecto id={project._id} repo={project.repo} src={project.src} type={project.type} title={project.title} date={project.date} body={project.body}/>
        </div>
      })}
    </div>
  )
}

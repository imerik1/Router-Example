import { Link as L, Navigate, Outlet, useParams} from 'react-router-dom'

const projects = [
  {
    id: 1,
    name: "Harry Potter"
  },
  {
    id: 2,
    name: "Percy Jackson"
  },
  {
    id: 3,
    name: "Maromba"
  }
]

function Link({to, text}){
  return <L to={to}>Ir para {text}</L>
}

export function Home() {
  return (
    <div>
      Página Inicial (/)<br />
      <Link to="/projects" text="projetos" />
    </div>
  );
}

export function Projects(){
  return (
    <div>
      Projetos (/projects)<br />
      <ul>
        {
          projects.map(p => {
            return <li key={p.id}><Link to={`${p.id}`} text={`projeto ${p.name}`} /></li>
          })
        }
      </ul>
      <br />
      <L to="archives">Mostrar mais arquivos</L><br />
      <Outlet /><br />
      <Link to="/" text="página inicial" />
    </div>
  )
}

export function Project(){
  const { idProject } = useParams()
  const project = projects.find(p => p.id === Number(idProject))
  if(!project) return <Navigate replace to="/projects" />
  return (
    <div>
      Projeto {project.name}<br />
      <Link to="/projects" text="projetos" />
    </div>
  )
}

export function Archives(){
  return <div>Não há nenhum arquivo.</div>
}
import projects from '../src/data/projects';

export default function Projects() {
  return (
    <div>
      <h1>Mijn Projecten</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} width="200" />
            <p>{project.description}</p>
            <a href={project.url} target="_blank">Bekijk project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

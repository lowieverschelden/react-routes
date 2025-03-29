import { studies, experiences } from '../src/data/resume';

export default function Resume() {
  return (
    <div>
      <h1>Curriculum Vitae</h1>

      <h2>Ervaring</h2>
      <ul>
        {experiences.map(exp => (
          <li key={exp.id}>
            <strong>{exp.title}</strong> bij {exp.company} ({exp.date})
          </li>
        ))}
      </ul>

      <h2>Opleiding</h2>
      <ul>
        {studies.map(study => (
          <li key={study.id}>
            {study.title} aan {study.institution} ({study.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

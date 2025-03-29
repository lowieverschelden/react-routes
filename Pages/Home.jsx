import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welkom op mijn portfolio!</h1>
      <p>Ik ben een webontwikkelaar met passie voor React.</p>
      <nav>
        <Link to="/projects">Bekijk mijn projecten</Link> | 
        <Link to="/resume">Bekijk mijn CV</Link>
      </nav>
    </div>
  );
}

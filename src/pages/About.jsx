import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About This App</h1>
      <p>This application demonstrates routing and navigation in React.</p>

      <Link to="/">Go Back Home</Link>
    </div>
  );
}

export default About;

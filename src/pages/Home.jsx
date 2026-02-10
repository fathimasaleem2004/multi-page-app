import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Multi Page App</h1>
      <p>This app demonstrates React Routing.</p>

      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/users">Go to Users</Link>
    </div>
  );
}

export default Home;

import { useParams, Link } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

function UserDetail() {
  const { id } = useParams();

  const user = users.find(u => u.id === parseInt(id));

  return (
    <div>
      <h1>User Details</h1>

      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>User not found</p>
      )}

      <Link to="/users">Go Back</Link>
    </div>
  );
}

export default UserDetail;

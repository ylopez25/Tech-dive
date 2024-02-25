import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav_logo">
      <Link to="/exams">
        <h1>Logo</h1>
      </Link>
      </div>
      <div className="nav_link">
        <Link to="/exams">
          <h1>Exams</h1>
        </Link>
        <Link to="/admin">
          <h1>Admin</h1>
        </Link>
      </div>
    </div>
  );
}

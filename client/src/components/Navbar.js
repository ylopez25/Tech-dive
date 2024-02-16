import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='nav'>
      <Link to="/exams">
        <h1>Logo</h1>
      </Link>
      <Link to="/exams">
        <h1>Exams</h1>
      </Link>
      <Link to="/admin">
        <h1>Admin</h1>
      </Link>
      {/* Commented out searchbar feature for now - Ben/}
        {/* <div>
        <input type="text" />
        </div> */}
    </div>
  )
}
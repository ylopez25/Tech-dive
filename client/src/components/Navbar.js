import { Link } from "react-router-dom";
import Logo from "./logo";

export default function Navbar() {
  return (
    <div className='nav'>
      <Link to="/exams">
        <Logo />
      </Link>
      <Link to="/exams">
        <h1
          style={{ marginRight: '120px' }}
        >Exams</h1>
      </Link>
      <Link to="/admin">
        <h1>Admin</h1>
      </Link>
      {/* Commented out searchbar feature for now - Ben */}
      {/* <div>
        <input type="text" />
        </div> */}
    </div>
  )
}

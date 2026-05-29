import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-5">
      <div className="container-fluid">

        <Link className="navbar-brand logo-text" to="/">
          STUDENT<span className="green-text">CRUD</span>
        </Link>

        <div className="d-flex gap-3">
          <Link className="nav-btn" to="/">
            Home
          </Link>

          <Link className="nav-btn" to="/add">
            Add Student
          </Link>

          <Link className="nav-btn" to="/students">
            Students
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
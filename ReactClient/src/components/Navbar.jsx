import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  return (
    <nav className="navbar px-3" id="navbar">
      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="#">Nippon CE</a>
        <i className="fa-brands fa-discord me-3"></i>
        <i className="fa-brands fa-github"></i>
        <div className="navbar-contents">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><a href="#">Guide</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <input className="form-control w-25" type="text" placeholder="Search" />
    </nav>
  );
}

export default Navbar;

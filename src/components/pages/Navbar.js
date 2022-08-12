import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-link">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>

      <div className="nav-link">
        <NavLink to="/weather">Weather</NavLink>
      </div>

      <div className="nav-link">
        <NavLink to="/swapi">Swapi</NavLink>
      </div>

      <div className="nav-link">
        <NavLink to="/trucking">Trucking</NavLink>
      </div>

      <div className="nav-link">
        <NavLink to="/pto">PTO</NavLink>
      </div>

      <div className="nav-link">
        <NavLink to="/color">Colors</NavLink>
      </div>

      <div className="nav-link">
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="nav-link">
        <NavLink to="/logout">Logout</NavLink>
      </div>
    </div>
  );
}

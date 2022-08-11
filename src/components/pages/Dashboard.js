import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      hello from dashboard
      <Link to={"/weather"}>Weather</Link>
      <Link to={"/Swapi"}>Swapi</Link>
      <Link to={"/truck"}>Trucking</Link>
      <Link to={"/pto"}>PTO</Link>
      <Link to={"/color"}>Random Color</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/logout"}>Logout</Link>
    </div>
  );
}

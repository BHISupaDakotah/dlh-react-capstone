import { useState, useEffect } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";

import SwapiData from "../SwapiData";

export default function Swapi() {
  const [swapiInput, setSwapiInput] = useState("");

  return (
    <div className="swapi-container">
      <label>Choose From Swapi</label>
      <select
        id="swapi-topic"
        name="swapi-dropdown"
        onChange={(e) => setSwapiInput(e.target.value)}
      >
        <option value="">Search Swapi</option>
        <option value="films">films</option>
        <option value="people">people</option>
        <option value="planets">planets</option>
        <option value="species">species</option>
        <option value="starships">starships</option>
        <option value="vehicles">vehicles</option>
      </select>

      <h1>
        swapi topic: <Link to={`/swapi/${swapiInput}`}>{swapiInput}</Link>
      </h1>

      <div>{SwapiData}</div>
      {/* <Link to="/swapi/people">People</Link> */}
    </div>
  );
}

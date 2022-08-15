import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

export default function Swapi(props) {
  const [endpoint, setEndpoint] = useState("");

  return (
    <div className="swapi-container">
      <label>Choose From Swapi</label>
      <select defaultValue="" onChange={(e) => setEndpoint(e.target.value)}>
        <option>-</option>
        <option>people</option>
        <option>planets</option>
        <option>species</option>
        <option>vehicles</option>
        <option>starships</option>
      </select>

      <Switch>
        <Route exact path="/swapi">
          <h3>Select from Dropdwon</h3>
        </Route>
        <Route path={"/swapi/:endpoint"} component={SwapiData} />
      </Switch>
      {endpoint.length > 0 && <Redirect to={`/swapi/${endpoint}`} />}
    </div>
  );
}

function SwapiData(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.swapi.tech/api/${props.match.params.endpoint}?page=1&limit=99999`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error("Oops", err));
  }, [props.match.params.endpoint]);

  if (!data[0]) return <h1>Loading ...</h1>;

  return (
    <div className="swapi-render">
      <h1>{props.match.params.endpoint}</h1>

      <div className="swapi-render-list">
        {data.map((item) => {
          return (
            <div className="swapi-list-item" key={item.uid}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

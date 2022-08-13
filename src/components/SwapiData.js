import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SwapiData(props) {
  console.log(props);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { pathname } = props.location;

  function renderSwapiData() {
    return data.map(
      (item) => {
        return (
          <div key={item.uid}>
            <Link to={`/swapi${pathname}/${item.uid}`}>{item.name}</Link>
          </div>
        );
      },
      [pathname]
    );
  }

  useEffect(() => {
    // setIsLoading(true);
    fetch(`https://www.swapi.tech/api${pathname}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        // setIsLoading(false);
      })
      .catch((err) => console.log("swapi fetch err: ", err));
  }, [pathname]);
  return (
    <div>
      <h1>hello from swapi data</h1>
      {console.log(props)}
      <h3>{props.match.url}</h3>

      {/* {isLoading ? <div>...loading</div> : <div>{renderSwapiData()}</div>} */}
      <div>{renderSwapiData()}</div>
    </div>
  );
}

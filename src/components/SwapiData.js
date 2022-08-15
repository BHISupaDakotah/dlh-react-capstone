import { useState, useEffect } from "react";

import Swapi from "./pages/Swapi";

export default function SwapiData(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { pathname } = props.location;
  const myEndpoint = pathname.slice(7);

  function renderSwapiData() {
    return data.map(
      (item) => {
        return (
          <div key={item.uid} className="swapi-data-item">
            {item.name}
          </div>
        );
      },
      [pathname]
    );
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.swapi.tech/api/${myEndpoint}?page=1&limit=100`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log("swapi error", err));
  }, [pathname]);

  return (
    <>
      <Swapi />
      {/* <div className="swapi-data-container"> */}
      {/* <div className="dynamic-header">{myEndpoint} by name</div>
        {isLoading ? (
          <div>...loading</div>
        ) : (
          <div className="swapi-render-item">{renderSwapiData()}</div>
        )}
      </div> */}
    </>
  );
}

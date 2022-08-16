// <div className="foreman-container">
//   <label htmlFor="">Foreman</label>
//   <select selected={foreman} name="foreman" id="foreman">
//     <option value={foremanName}>{foremanName}</option>
//   </select>
// </div>

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function People() {
  const [peopleData, setPeopleData] = useState([]);

  function renderPeople() {
    return peopleData.map((person) => {
      return (
        <div key={person.uid}>
          <Link to={`/${person.uid}`}>{person.name}</Link>
        </div>
      );
    });
  }

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people?page=1&limit=25")
      .then((res) => res.json())
      .then((data) => setPeopleData(data.results))
      .catch((err) => console.error("swapi error ", err));
  }, [peopleData]);

  if (!peopleData[0]) return <h1>Loading ...</h1>;

  return <div className="people">{renderPeople()}</div>;
}

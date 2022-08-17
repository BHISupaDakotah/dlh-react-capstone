import { useState, useEffect } from "react";

export default function PTO() {
  const [peopleData, setPeopleData] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [empSig, setEmpSig] = useState("");
  const [managerName, setManagerName] = useState("");

  function renderPeople() {
    return peopleData.map((person) => {
      return (
        <option value={person.name} key={person.uid}>
          {person.name}
        </option>
      );
    });
  }
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people?page=1&limit=25")
      .then((res) => res.json())
      .then((data) => setPeopleData(data.results))
      .catch((err) => console.error("swapi error ", err));
  }, [peopleData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(` PTO successfully submited
    Employee: ${employeeName}
    Manager Name: ${managerName}
    Employee Signature: ${empSig}
`);
  };

  return (
    <div className="pto-container">
      <div className="pto-float">
        <h1>Personal Time Off</h1>
        <form>
          <div className="employee-name">
            <h2>Employee Name</h2>
            <select
              name="department"
              className="dropdown"
              defaultValue={employeeName}
              onChangeCapture={(e) => setEmployeeName(e.target.value)}
            >
              <option value={"please select"} hidden>
                --Please choose an option--
              </option>
              {renderPeople()}
            </select>
          </div>

          <div className="department-setup">
            <h2>Department</h2>
            <select name="department" className="dropdown">
              <option value="">--Please choose an option--</option>
              <option value="sga">office</option>
              <option value="ops">operations</option>
            </select>
          </div>

          <div className="manager-name">
            <h2>Manager Name</h2>
            <select
              name="department"
              className="dropdown"
              defaultValue={managerName}
              onChangeCapture={(e) => setManagerName(e.target.value)}
            >
              <option value={"please select"} hidden>
                --Please choose an option--
              </option>
              {renderPeople()}
            </select>
          </div>

          <div className="absence-type">
            <h2>Type of Absence</h2>
            <select name="absence" className="dropdown">
              <option value="">--Please choose an option--</option>
              <option value="pto">PTO</option>
              <option value="materinity">materinity</option>
              <option value="bereavement">bereavement</option>
              <option value="twop">time without pay</option>
              <option value="military">military</option>
              <option value="jury-duty">jury duty</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="date-section">
            <div>
              <label className="from">From: </label>
              <input type="date"></input>
            </div>
            <div>
              <label className="to">To: </label>
              <input type="date"></input>
            </div>
            <div>
              <label className="return">Returning: </label>
              <input type="date"></input>
            </div>
            <input type="text" placeholder="reason for absence"></input>
            <p>
              You must submit request for absences, other than sick leave,{" "}
              <span className="seven">seven days prior</span> to the first day
              you will be absent.{" "}
            </p>
          </div>
          <div className="employee-confirmation">
            <input
              type="text"
              placeholder="employee signature"
              onChange={(e) => setEmpSig(e.target.value)}
              value={empSig}
            ></input>
            <input type="date"></input>
          </div>
          <p>
            Please remember that all requests will be based on several criteria
            and business needs and may not always be possible. If you want to
            use “Personal Time" as payment while you are out then you must list
            the amount of hours requested on your time-card in order to receive
            payment. (Personal Hours will not count toward overtime hours.)
          </p>
          <button
            type="submit"
            className="sub-btn"
            disabled={!employeeName || !empSig}
            onClick={handleSubmit}
          >
            Submit PTO
          </button>
        </form>
      </div>
    </div>
  );
}

// // const renderPfs = () => {
// //   return pfsList.map((supervisor) => {
// //     return (
// //       <option value={supervisor.employeeID} key={supervisor.Email}>
// //         {supervisor["FirstName"]}{" "}
// //         {supervisor["MidName"] === "NULL" ? "" : supervisor["MidName"]}{" "}
// //         {supervisor["LastName"]}
// //       </option>
// //     );
// //   });
// // };

// // useEffect(() => {
// //   function getProjectManager() {
// //     asyncAPICall(
// //       "api:KE7MCNYf/vEmployeesNoSpacesIdByTitle?employeeTitle=Project%20Manager",
// //       "GET",
// //       null,
// //       null,
// //       (data) => {
// //         if (data) {
// //           setPfsList(data);
// //         }
// //       },
// //       (err) => {
// //         console.log("Get PM Error", err);
// //       }
// //     );
// //   }
// //   getProjectManager();
// // }, []);

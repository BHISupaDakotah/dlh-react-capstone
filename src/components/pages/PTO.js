export default function PTO() {
  return (
    <div className="pto-container">
      <form>
        <div className="employee-section">
          <h1>Personal Time Off/Absence Request</h1>
          <div className="employee-name">
            <h3>Employee Name</h3>
            <input type="text"></input>
          </div>

          <div className="department setup">
            <h3>Department</h3>
            <select name="department" id="dep select">
              <option value="">--Please choose an option--</option>
              <option value="sga">office</option>
              <option value="ops">operations</option>
            </select>
          </div>

          <div className="manager-name">
            <h3>Manager Name</h3>
            <input type="text"></input>
          </div>

          <div className="absence-type">
            <h3>Type of Absence</h3>
            <select name="absence" id="absence select">
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
            <label>From</label>
            <input type="date"></input>
            <label>To</label>
            <input type="date"></input>
            <label>Returning</label>
            <input type="date"></input>
            <input type="text" placeholder="reason for absence"></input>
            <p>
              You must submit request for absences, other than sick leave,{" "}
              <span className="seven">seven days prior</span> to the first
              <br /> day you will be absent.{" "}
            </p>
          </div>
          <div className="employee-confirmation">
            <input type="text" placeholder="employee signature"></input>
            <input type="date"></input>
          </div>
          <p>
            Please remember that all requests will be based on several criteria
            and business needs and
            <br /> may not always be possible. If you want to use “Personal
            Time" as payment while you are
            <br /> out then you must list the amount of hours requested on your
            time-card in order to receive
            <br />
            payment. (Personal Hours will not count toward overtime hours.)
          </p>
        </div>
      </form>
    </div>
  );
}

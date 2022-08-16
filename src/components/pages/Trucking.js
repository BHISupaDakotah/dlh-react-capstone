export default function Trucking() {
  const today = new Date();
  function renderTruckingInfo() {
    const scheduleInfo = [
      {
        id: 1,
        date: today,
        jobName: "21-21-HPMA HP Materials",
        jobNumber: "21-21-HPMA",
        jobAddress: "7620 West Highway 201 MAGNA UTAH 84044",
        foreman: "Cody (801)244-5647",
        supplier: "Morgan Grantsville",
        material: "AGGS",
        target: 1.73,
        time: "now",
        comments: "MATERIAL CODE 105.003",
        yard_info: [
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "s",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "r",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "t",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "casdfasdf",
          },
        ],
      },
      {
        id: 2,
        date: today,
        jobName: "21-21-HPMA HP Materials",
        jobNumber: "21-21-HPMA",
        jobAddress: "7620 West Highway 201 MAGNA UTAH 84044",
        foreman: "Cody (801)244-5647",
        supplier: "Morgan Grantsville",
        material: "AGGS",
        target: 1.73,
        time: "now",
        comments: "MATERIAL CODE 105.003",
        yard_info: [
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "s",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "r",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "t",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "casdfasdf",
          },
        ],
      },
      {
        id: 3,
        date: "8/16/22",
        jobName: "21-21-HPMA HP Materials",
        jobNumber: "21",
        jobAddress: "7620 West Highway 201 MAGNA UTAH 84044",
        foreman: "Cody (801)244-5647",
        supplier: "Morgan Grantsville",
        material: "AGGS",
        target: 1.73,
        time: "",
        comments: "MATERIAL CODE 105.003",
        yard_info: [
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "",
          },
          {
            load: "5:30/6:30",
            truckName: "bd-007 Anthony",
            comments: "",
          },
        ],
      },
    ];

    return scheduleInfo.map((job) => {
      if (job.date === today) {
        return (
          <div key={job.id} className="single-job-container">
            <div className="row">
              <div>
                <span>Job Name:</span> {job.jobName}
              </div>
              <div>
                <span>Job #:</span> {job.jobNumber}
              </div>
              <div>
                <span>Job Address:</span> {job.jobAddress}
              </div>
            </div>
            <div className="row">
              <div>
                <span>Foreman:</span> {job.foreman}
              </div>
              <div>
                <span>Supplier:</span> {job.supplier}
              </div>
              <div>
                <span>Material:</span> {job.material}
              </div>
            </div>
            <div className="row">
              <div>
                <span>Dumpsite Target:</span>
                {job.target}
              </div>
              <div>
                <span>Time:</span>
                {job.time}
              </div>
            </div>
            <div className="row">
              <div>
                <span className="center">Comments:</span>{" "}
                <div className="no-border">{job.comments}</div>
              </div>
            </div>
            <div className="yard-info-header">
              <div className="header-item"> Yard | Load</div>
              <div className="header-item">Truck# | Name</div>
              <div>Comments</div>
            </div>

            {job.yard_info.map((i) => (
              <div className="yard-info-items">
                <div className="yard-item">{i.load}</div>
                <div className="yard-item">{i.truckName}</div>
                <div className="shift-left">{i.comments}</div>
              </div>
            ))}
          </div>
        );
      }
    });
  }

  return (
    <div className="trucking-container">
      <h1>welcome to Trucking</h1>
      <div className="job-container">{renderTruckingInfo()}</div>
    </div>
  );
}

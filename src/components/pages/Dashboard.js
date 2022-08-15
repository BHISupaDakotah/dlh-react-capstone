import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  function renderDashboardWidgets() {
    const widgetsData = [
      {
        id: 1,
        image: "https://source.unsplash.com/random",
        name: "Weather",
        route: "/weather",
        description: "weekly weather forcast",
      },
      {
        id: 2,
        image: "https://source.unsplash.com/random",
        name: "Swapi",
        route: "/swapi",
        description: "navigation from swapi.tech",
      },
      {
        id: 3,
        image: "https://source.unsplash.com/random",
        name: "Trucking",
        route: "/trucking",
        description: "daily trucking dashbord",
      },
      {
        id: 4,
        image: "https://source.unsplash.com/random",
        name: "PTO",
        route: "/pto",
        description: "PTO form",
      },
      {
        id: 5,
        image: "https://source.unsplash.com/random",
        name: "Colors",
        route: "/colors",
        description: "random color generator",
      },
    ];

    return widgetsData.map((widget) => {
      return (
        <div key={widget.id} className="widget-card">
          <img
            className="widget-img"
            src={widget.image}
            alt="random unsplash pic"
            height="75px"
            width="75px"
          />
          <div className="widget-name">{widget.name}</div>
          <div className="widget-descritption">{widget.description}</div>
          <div className="widget-link">
            <Link to={widget.route}>{widget.name}</Link>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="dashboard-container">
      <div className="widget-container"> {renderDashboardWidgets()}</div>
    </div>
  );
}

import React from "react";

function Dashboard() {
  return (
    <div className="component">
      <div className="headComponents">
        <div className="logo">
          <div className="letterDi"></div>
          <div className="elipse"></div>
        </div>
        <p className="title">dashboard Kit</p>
      </div>
      <div className="sidebar">
        <div className="activeOne"></div>
        <div className="vectorActive"></div>
        <div className="activeOneTitle">
          <p className="activeTittle">overview</p>
        </div>
        <div className="innactiveOne">
          <div className="vectorInactive"></div>
          <p className="innactive">tickets</p>
        </div>
      </div>
      <hr className="divider"></hr>
    </div>
  );
}

export default Dashboard;

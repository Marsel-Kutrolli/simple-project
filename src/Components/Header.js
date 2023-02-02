import React from "react";
import programer from "./programer.png"

function Header() {
  return (
    <div className="header">
      <div className="headerTitle"></div>
      <p className="overview">Overview</p>
      <div className="user">
        <p className="headerUserName">Marsel Kutrolli</p>
        <img alt="programer" style={{ wudth: 20,height: 35, marginTop:5}} src={ programer }/>
      </div>
    </div>
  );
}

export default Header;

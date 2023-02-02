import React from "react";

function Sideboard() {
  return (
    <div className="component-side">
      <div className="headComponents-side">
        <div className="logo">
          <div className="letterDi"></div>
          <div className="elipse"></div>
        </div>
        <p className="title-side">online Users</p>
      </div>
      <div>
        <div className="activeOne-side"></div>
        <div className="vectorActive-side"></div>
        <div>
          <p className="activeTittle-side">click to chat</p>
        </div>
        <div>
          <p className="innactive-side">tifany</p>
          <p className="innactive-side">tony</p>
          <p className="innactive-side">harvey</p>
          <p className="innactive-side">mat</p>
          <p className="innactive-side">lint</p>
          <p className="innactive-side">regan</p>
          <p className="innactive-side">mont</p>
          <p className="innactive-side">rayan</p>
        </div>
      </div>
      <hr className="divider-side"></hr>
      <div className="rearch" style={{marginLeft: 40}}>
        <h4 style={{marginLeft: 48}}>search</h4>
        <input style={{background: "#dfe0eb"}} />
      </div>
      <div className="headComponents-side">
        <p className="title-side">ofline users</p>
      </div>
      <div>
        <div className="activeOnesd-side"></div>
        <div>
          <p className="innactive-side">tifany</p>
          <p className="innactive-side">tony</p>
          <p className="innactive-side">harvey</p>
          <p className="innactive-side">mat</p>
          <p className="innactive-side">lint</p>
          <p className="innactive-side">regan</p>
          <p className="innactive-side">mont</p>
          <p className="innactive-side">rayan</p>
        </div>
      </div>
    </div>
  );
}

export default Sideboard;
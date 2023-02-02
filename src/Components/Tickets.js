import React from "react";
function Tickets({ fname, fnumber, fdate, fpriority, color }) {
  return (
    <div className="tickets">
      <div className="tickConta" >
      <p className="ticketName" >
      <input classNaame="radio2" type="radio" style={{     width: 53.33,
      height: 33.33, top: -10, position: "relative" }} />
      {fname}</p>
      <p className="tickets2Name">{fnumber}</p>
      <p className="tickets2Name">{fdate}</p>
      </div>
      <button className="ticket2button" style={{ backgroundColor: color }}>
        {fpriority}
      </button>
    </div>
  );
}
export default Tickets;



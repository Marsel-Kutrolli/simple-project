
import "./styles.css";
import React, {useState} from "react";
import Dashboard from "./Components/Dashboard";
import Sideboard from "./Components/Sideboard";
import CardContainer from "./Components/CardContainer";
import Header from "./Components/Header";
import Chart from "react-apexcharts";
import ChartArray from "./Components/ChartArray";
import Part1 from "./Components/Part1";
import Part2 from "./Components/Part2"
import Header2 from "./Components/Header2";
import Tickets from "./Components/Tickets";
import DashboardSeconds from "./Components/DashboardSeconds";
import SideboardSecond from "./Components/SideboardSecond";
import email from "./Components/email.png";

const cardArray = [
  {
    name: "Undersolved",
    value: 60
  },
  {
    name: "Overdue",
    value: 16
  },
  {
    name: "Open",
    value: 43
  },
  {
    name: "On hold",
    value: 64
  }
];
export default function App() {
  let title = [
    {
      main: "Unresolved tickets",
      sub: "Group: Support",
      right: "View details"
    },
    {
      main: "Tasks",
      sub: "Today",
      right: "View all"
    }
  ];
  let arr1 = [
    {
      name: "Waiting on Feature Request",
      number: 4238
    },
    {
      name: "Awaiting Customer Response",
      number: 1005
    },
    {
      name: "Awaiting Developer Fix",
      number: 914
    },
    {
      name: "Pending",
      number: 281
    }
  ];
let arr3 =[
  {
    fname: "Contact Email not Linked",
    fnumber: "Tom Cruise",
    fdate: "May 26, 2019",
    fpriority: "HIGHT"
  },
  {
    fname: "Adding Images to Featured Posts",
    fnumber: "Matt Damon",
    fdate: "May 26, 2019",
    fpriority: "low"
  },
  {
    fname: "When will I be charged this month?",
    fnumber: "Robert Downey",
    fdate: "May 26, 2019",
    fpriority: "HIGHT"
  },
  {
    fname: "Payment not going through",
    fnumber: "Christian Bale",
    fdate: "May 25, 2019",
    fpriority: "Normal"
  },  {
    fname: "Unable to add replies",
    fnumber: "Henry Cavil",
    fdate: "May 25, 2019",
    fpriority: "HIGHT"
  },  {
    fname: "Downtime since last week",
    fnumber: "Chris Evans",
    fdate: "May 25, 2019",
    fpriority: "Normal"
  },  {
    fname: "Referral Bonus",
    fnumber: "Sam Smith",
    fdate: "May 25, 2019",
    fpriority: "low"
  },  {
    fname: "How do I change my password?",
    fnumber: "Steve Rogers",
    fdate: "May 24, 2019",
    fpriority: "Normal"
  }
];
  let arr2 = [
    {
      name: "Finish ticket update",
      button: "urgent"
    },
    {
      name: "Create new ticket example",
      button: "new"
    },
    {
      name: "Update ticket report",
      button: "default"
    }
  ];
  let color = {
    urgent: "#FEC400",
    new: "#29CC97",
    default: "#ddd",
    HIGHT: "#F12B2C",
    Normal: "#29CC97",
    low: "#FEC400"
  };
  const chartArray = [
    {
      chartName: "Resolved",
      chartNumer: 449
    },
    {
      chartName: "Recived",
      chartNumer: 426
    },
    {
      chartName: "Average first response time",
      chartNumer: 33 
    },
    {
      chartName: "Average response time",
      chartNumer: 38
    },
    {
      chartName: "Resolution with SLA",
      chartNumer: 94
    }
  ];
  const [state, setState] = useState({
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    },{
      name: 'series-2',
      data: [40, 50, 65, 10, 40, 80, 70, 71, 95]
    }]
  })
  return (
    <div bigContainer>
    <div className="allProject">
      <Dashboard />
      <div className="headerCardContainer">
        <Header />
        <div className="cardContainer">
          {cardArray.map(function renderCardContainer(obj) {
            return <CardContainer cardName={obj.name} cardValue={obj.value} />;
          })}
        </div>
        <div className="chartAndElements">
        <div className="fChart"><p className="trends">Today's trends</p><Chart options={state.options} series={state.series} type="bar" width={620} height={440} /></div>
        <div className="elementsChart">
        {chartArray.map(function (element) {
          return (
            <ChartArray
            chartName={element.chartName}
            chartNumer={element.chartNumer}
            />
          );
        })}
        </div>
        </div>
        <div className="part1Part2">
      <div className="left">
        <div className="top">
          <div className="left1">
            <p className="textLeft">{title[0].main}</p>
            <h6 className="textLeftUnderTitle">{title[0].sub}</h6>
          </div>
          <div className="right1">
            <p className="textRight">{title[0].right}</p>
          </div>
        </div>
        {arr1.map(function (element) {
          return (
            <Part1
              name={element.name}
              number={element.number}
              title={title[0].main}
            />
          );
        })}
      </div>
      <div className="right">
        <div className="top">
          <div className="left1">
            <p className="textLeft">{title[1].main}</p>
            <h6 className="textRightUnderTitle">{title[1].sub}</h6>
          </div>
          <div className="right1">
            <p className="textRight">{title[1].right}</p>
          </div>
        </div>
        {arr2.map(function (element) {
          return (
            <Part2
              name={element.name}
              button={element.button}
              color={color[element.button]}
            />
          );
        })}
      </div>
    </div>
    <Sideboard />
      </div>
    </div>
    <div className="secondPageAll">
      <div className="secondPage">
      <DashboardSeconds />
      </div>
      <div className="header2">
      <Header2 />
      <div className="allTicketsSecond">
        <h3 className="secTitle">All tickets</h3>
        <div className="ticketTitle">
           <p className="tD">Ticket details</p>
           <p className="cN">Customer name</p>
           <p className="dt">Date</p>
           <p className="pr">Priority</p>
         </div>
       {arr3.map(function (e) {
          return (
            <Tickets
            fname={e.fname}
            fnumber={e.fnumber}
            fdate={e.fdate}
            fpriority={e.fpriority}
            color={color[e.fpriority]}
            />
          );
        })}
      </div>
      <div style={{width: "100%", textAlign: "center", gap: 10}}>
      <h1>My Email</h1>
      <a href="mailto:marselkutrolli404@gmail.com" style={{textDecoration: "none", fontSize: "1rem", fontWeight: "bold", fontFamily: "Roboto"}}><img style={{height: 18}} alt="email" src={ email } /> CONTACT ME</a>
      </div>
      </div>
      <div>
      <SideboardSecond />
      </div>
    </div>
    </div>
  );
}


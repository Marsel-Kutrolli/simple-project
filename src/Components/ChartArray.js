function ChartArray({ chartName, chartNumer }) {
    return (
      <div className="chartArrayContainer">
        <p className="chartArraName">{chartName}</p>
        <p className="chartArrayNumber">{chartNumer}</p>
      </div>
    );
  }
  
  export default ChartArray;
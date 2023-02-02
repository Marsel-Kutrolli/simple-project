function Part2({ name, button, color }) {
    return (
      <div className="part2">
        <p className="part2Name">
          <input type="radio" />
          {name}
        </p>
        <button className="part2button" style={{ backgroundColor: color }}>
          {button}
        </button>
      </div>
    );
  }
  
  export default Part2;
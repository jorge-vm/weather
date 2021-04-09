
const ResultsCard = ({ weather, city }) => {
  const { temp, humidity, temp_max:max, temp_min:min } = weather;
  return (
    <div className="card-group">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Weather in {city}</h5>
        <p className="card-text">Temperature {temp}°</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Min and Max</h5>
        <p className="card-text">Max: {max}°</p>
        <p className="card-text"> Min: {min}°</p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Humidity</h5>
        <p className="card-text">{humidity}%</p>
      </div>
    </div>
  </div>
  );
};

export default ResultsCard;

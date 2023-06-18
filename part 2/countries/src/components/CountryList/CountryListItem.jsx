import "./CountryListItem.css";

const CountryListItem = ({ country, handleShowCountry }) => {
  return (
    <div className="list-item">
      <p>{country}</p>
      <button onClick={() => handleShowCountry(country)}>Show</button>
    </div>
  );
};

export default CountryListItem;

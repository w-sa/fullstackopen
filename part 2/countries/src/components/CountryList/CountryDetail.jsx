import Weather from "../Weather";

const CountryDetail = ({ countryData }) => {
  const {
    name: { common: countryName },
    capital,
    area,
    population,
    languages,
    flags,
  } = countryData;

  return (
    <div>
      <h2>{countryName}</h2>
      <p>Capital: {capital[0]}</p>
      <p>Area: {area} km²</p>
      <p>Population: {population}</p>
      <div>
        <h3>Languages:</h3>
        <ul>
          {Object.values(languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <figure>
        <img src={flags.png} alt={flags.alt}></img>
      </figure>
      <Weather city={capital[0]} country={countryName} />
    </div>
  );
};

export default CountryDetail;

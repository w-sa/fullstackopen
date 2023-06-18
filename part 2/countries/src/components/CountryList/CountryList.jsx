import CountryDetail from "./CountryDetail";
import CountryListItem from "./CountryListItem";

const CountryList = ({
  filteredCountries,
  setFilteredCountries,
  setFilter,
}) => {
  if (filteredCountries.length > 9) {
    return <p>Too many countries, please refine your filter.</p>;
  }

  if (filteredCountries.length === 1) {
    console.log(filteredCountries[0]);
    return <CountryDetail countryData={filteredCountries[0]} />;
  }

  const handleShowCountry = (filter) => {
    setFilteredCountries(
      filteredCountries.filter((country) => country.name.common === filter)
    );

    setFilter("");
  };

  return (
    <div>
      {filteredCountries.map(({ name: { common: countryName } }) => {
        return (
          <CountryListItem
            key={countryName}
            country={countryName}
            handleShowCountry={handleShowCountry}
          />
        );
      })}
    </div>
  );
};

export default CountryList;

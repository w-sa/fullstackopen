import { useEffect, useState } from "react";
import "./App.css";
import countryService from "./services/countryService";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList/CountryList";

function App() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    countryService.getAll().then((data) => {
      setCountries(data);
    });
  }, []);

  if (countries === null) {
    return null;
  }

  return (
    <div>
      <h1>Countries</h1>
      <Filter
        setFilteredCountries={setFilteredCountries}
        setFilter={setFilter}
        filter={filter}
        countries={countries}
      />
      <CountryList
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;

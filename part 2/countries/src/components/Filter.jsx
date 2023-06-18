import { useState } from "react";

const Filter = ({ setFilteredCountries, setFilter, filter, countries }) => {
  const handleFilterChange = (event) => {
    const filterString = event.target.value;
    setFilter(filterString.toLowerCase().trim());

    setFilteredCountries(
      countries.filter(({ name: { common } }) =>
        common.toLowerCase().includes(filter)
      )
    );
  };

  return (
    <div>
      Filter:
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;

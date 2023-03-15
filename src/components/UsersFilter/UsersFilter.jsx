import React from "react";
import Filter from "./Filter";

const UsersFilter = ({ onGenderFilter, genderFilter, onBirthFilter, birthFilter, onNameFilter, nameFilter }) => {
  const handleGenderFilter = (e) => {
    onGenderFilter(e.target.value);
  };

  const handleBirthFilter = (e) => {
    onBirthFilter(e.target.value);
  };

  const handleNameFilter = (e) => {
    onNameFilter(e.target.value);
  };

  return (
    <section className="filterContainer">
      <Filter
        label="Gender"
        value={genderFilter}
        onHandler={handleGenderFilter}
        options={["female", "male"]}
      />

      <Filter
        label="Over 18"
        value={birthFilter}
        onHandler={handleBirthFilter}
        options={["under", "over"]}
      />

      <Filter
        label="Name length"
        value={nameFilter}
        onHandler={handleNameFilter}
        options={["Shorter or equal 4", "Longer than 4"]}
      />
    </section>
  );
};

export default UsersFilter;

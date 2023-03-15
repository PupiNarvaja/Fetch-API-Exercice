import React from "react";
import Filter from "./Filter";

const UsersFilter = ({ onGenderFilter, genderFilter, onBirthFilter, birthFilter, }) => {
  const handleGenderFilter = (e) => {
    onGenderFilter(e.target.value);
  };

  const handleBirthFilter = (e) => {
    onBirthFilter(e.target.value);
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
    </section>
  );
};

export default UsersFilter;

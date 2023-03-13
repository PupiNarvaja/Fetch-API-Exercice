import React from "react";

const UsersFilter = ({ onGenderFilter, onBirthFilter }) => {

  const handleGenderFilter = (e) => {
    onGenderFilter(e.target.value);
  };

  const handleBirthFilter = (e) => {
    onBirthFilter(e.target.value);
  };

  return (
    <section className="filterContainer">
      <div>
        <span>Gender:</span>
        <select onChange={handleGenderFilter} name="gender" id="gender" className="selectFilter">
          <option value="">all</option>
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
      </div>

     <div>
        <span>Birth Year:</span>
        <select onChange={handleBirthFilter} name="gender" id="gender" className="selectFilter">
          <option value="">all</option>
          <option value="under">- 2000</option>
          <option value="over">+ 2000</option>
        </select>
      </div>
      
    </section>
  );
};

export default UsersFilter;

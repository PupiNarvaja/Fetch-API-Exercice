import React from "react";

const Filter = ({ label, value, onHandler, options }) => {
  const optionConstructor = () =>
    options.map((option) => (
      <option value={option} key={option}>
        {option}
      </option>
    ));

  const replaceSpacesWithDashes = () => {
    const regex = /\s+/g;
    return label.replace(regex, "-");
  };

  return (
    <div>
      <span>{label}:</span>
      <select
        value={value}
        onChange={onHandler}
        name={replaceSpacesWithDashes()}
        id={replaceSpacesWithDashes()}
        className="selectFilter"
      >
        <option value="">all</option>

        {optionConstructor()}
      </select>
    </div>
  );
};

export default Filter;

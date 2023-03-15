import { useState, useEffect } from "react";
import { useFetch } from "./CustomHooks/useFetch";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import UsersFilter from "./components/UsersFilter/UsersFilter";
import "./App.css";

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [birthFilter, setBirthFilter] = useState("");

  const { data, isLoading, error } = useFetch("https://fakerapi.it/api/v1/persons");

  useEffect(() => {
    if (!data) {
      return;
    }

    const checkAge = (userAge) => {
      const diffTime = Date.now() - new Date(userAge).getTime();
      return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
    };

    const applyFilters = () => {
      const minimumAge = 18;

      setFilteredData(
        data.filter((user) => {
          const isGenderFilterActive =
            !genderFilter || user.gender === genderFilter;
          const isBirthFilterActive =
            !birthFilter ||
            (birthFilter === "under"
              ? checkAge(user.birthday) < minimumAge
              : checkAge(user.birthday) >= minimumAge);
          return isGenderFilterActive && isBirthFilterActive;
        })
      );
    };

    applyFilters();
  }, [data, genderFilter, birthFilter]);

  const onGenderFilter = (value) => {
    setGenderFilter(value);
  };

  const onBirthFilter = (value) => {
    setBirthFilter(value);
  };

  return (
    <main id="main">
      <h1 className="main__h1">Data Dashboard</h1>

      <UsersFilter
        onGenderFilter={onGenderFilter}
        genderFilter={genderFilter}
        onBirthFilter={onBirthFilter}
        birthFilter={birthFilter}
      />

      {isLoading && <span className="loading">Loading...</span>}

      {!isLoading && error && (
        <span className="error">An error occurred.{error.message}</span>
      )}

      {!isLoading && data && <UsersContainer users={filteredData} />}
    </main>
  );
}

export default App;

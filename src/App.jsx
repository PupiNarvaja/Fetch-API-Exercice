import { useState } from "react";
import { useFetch } from "./CustomHooks/useFetch";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import UsersFilter from "./components/UsersFilter/UsersFilter";
import "./App.css";

function App() {
  const [genderFilter, setGenderFilter] = useState("");
  const [birthFilter, setBirthFilter] = useState("");

  const { data: users, isLoading, error } = useFetch("https://fakerapi.it/api/v1/persons");

  const filteredUsers = () => {
    const data = users?.data;

    if (genderFilter) {
      return data.filter((user) => user.gender === genderFilter);
    }

    if (birthFilter) {
      const baseYear = 2000;

      return data.filter((user) => {
        const yearOfBirth = user.birthday.split("-")[0];

        if (birthFilter === "under") {
          return yearOfBirth < baseYear;
        }

        if (birthFilter === "over") {
          return yearOfBirth > baseYear;
        }
      });
    }

    return data;
  };

  const onGenderFilter = (value) => (
    setGenderFilter(value)
  );

  const onBirthFilter = (value) => (
    setBirthFilter(value)
  );

  return (
    <main id="main">
      <h1 className="main__h1">Data Dashboard</h1>

      <UsersFilter onGenderFilter={onGenderFilter} onBirthFilter={onBirthFilter} />

      { isLoading && <span className="loading">Loading...</span> }

      { error && <span className="error">An error occurred.</span> }

      { !error && <UsersContainer users={filteredUsers()}/> }
      Filtros: Male/female, A-Z asc y desc, mayor de 18 o no.
    </main>
  );
}

export default App;

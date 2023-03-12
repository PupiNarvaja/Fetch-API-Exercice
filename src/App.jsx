import { useFetch } from "./CustomHooks/useFetch";
import UsersContainer from "./components/UsersContainer/UsersContainer";
import "./App.css";

function App() {

  const { data: users, isLoading, error } = useFetch("https://fakerapi.it/api/v1/persons");

  return (
    <main id="main">
      <h1 className="main__h1">Data Dashboard</h1>

      { isLoading && <span className="loading">Loading...</span> }

      { error && <span className="error">An error occurred.</span> }

      { !error && <UsersContainer users={users?.data}/> }
      Filtros: Male/female, A-Z asc y desc, mayor de 18 o no.
    </main>
  );
}

export default App;

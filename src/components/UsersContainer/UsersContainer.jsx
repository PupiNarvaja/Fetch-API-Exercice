import React from "react";
import UsersList from "./UsersList";

const UsersContainer = ({ users }) => {

  const columnCreator = () => {
    const columns = users && Object.keys(users[0]);

    return columns?.map((column) => <th key={column}>{column}</th>);
  };

  return (
    <div className="wrapper">
      <table className="main__table">
        <thead className="main__table__thead">
          <tr>

          { columnCreator() }

          </tr>
        </thead>

        <tbody>

          { users && <UsersList users={users} /> }

        </tbody>
      </table>
    </div>
  );
};

export default UsersContainer;

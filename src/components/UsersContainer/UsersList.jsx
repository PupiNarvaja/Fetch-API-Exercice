import React from "react";
import User from "./User";

const UsersList = ({ users }) => {
  return (
    <>
      { users.map((user) => <User user={user} key={user.id} />) }
    </>
  );
};

export default UsersList;

import React from "react";

const User = ({ user }) => {
  const keys = Object.keys(user);

  const descriptionCreator = () =>
    keys.map((key) => {
      const userKey = user[key];

      if (typeof userKey === "object") {
        return (
          <td key={key}>
            <ul>
              {Object.keys(userKey).map((value) => (
                <li key={userKey[value]}>{userKey[value]}</li>
              ))}
            </ul>
          </td>
        );
      }

      if (key === "image") {
        return (
          <td key={key}>
            <img src={user.image} className="userImage" />
          </td>
        );
      }

      return <td key={key}>{user[key]}</td>;
    });

  return <tr>{descriptionCreator()}</tr>;
};

export default User;

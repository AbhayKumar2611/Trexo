// import React from "react";
// import UserCardsSection from "./UserCard";
// import "./UserList.css";

// const UserList = ({ users }) => {
//   return (
//     <div className="user-list-container">
//       <UserCardsSection users={users} />
//     </div>
//   );
// };

// export default UserList;

import React from "react";
import UserCardsSection from "./UserCard";
import "./UserList.css";

const UserList = ({ users }) => {
  return (
    <div className="user-list-container">
      <UserCardsSection users={users} />
    </div>
  );
};

export default UserList;

{
  /* <UserDetails  />
          <ListsWidget10  /> */
}
import React from "react";
import UserDetails from "../Details/userDatails";

import { ListsWidget10 } from "../lists/ListsWidget10";

const UserDetailsWrapper = () => {
  return (
    <div className="row g-5 g-xl-8">
      <div className="col-xl-6">
        <UserDetails className="card-xxl-stretch mb-15 mb-xl-8" />
      </div>
      <div className="col-xl-6">
        <ListsWidget10 className="card-xxl-stretch mb-15 mb-xl-8" />
      </div>
    </div>
  );
};

export default UserDetailsWrapper;

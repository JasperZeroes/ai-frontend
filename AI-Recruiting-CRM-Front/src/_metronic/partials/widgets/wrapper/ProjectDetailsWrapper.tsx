{
  /* <UserDetails  />
          <ListsWidget10  /> */
}
import React from "react";
import ProjectDetails from "../Details/projectDeatails";

import { ListsWidget10 } from "../lists/ListsWidget10";

const ProjectDetailsWrapper = () => {
  return (
    <div className="row g-5 g-xl-8">
      <div className="col-xl-6">
        <ProjectDetails className="card-xxl-stretch mb-15 mb-xl-8" />
      </div>
      <div className="col-xl-6">
        <ListsWidget10 className="card-xxl-stretch mb-15 mb-xl-8" />
      </div>
    </div>
  );
};

export default ProjectDetailsWrapper;

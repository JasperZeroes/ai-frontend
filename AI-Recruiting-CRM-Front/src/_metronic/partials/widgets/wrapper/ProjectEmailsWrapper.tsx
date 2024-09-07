import React from "react";
import ProjectMailTable from "../emails/ProjectMailTable";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";

const ProjectEmailsWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.ALL_PROJECT_MAIL" })}
      </PageTitle>
      <ProjectMailTable />
    </>
  );
};

export default ProjectEmailsWrapper;

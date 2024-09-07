import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import { TablesWidget15 } from "../../../../_metronic/partials/widgets/tables/TablesWidget15";

const ProjectsWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.JOBS" })}
      </PageTitle>
      <TablesWidget15 />
    </>
  );
};

export default ProjectsWrapper;

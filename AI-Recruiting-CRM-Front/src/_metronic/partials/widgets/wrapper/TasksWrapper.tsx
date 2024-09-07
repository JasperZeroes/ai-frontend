import React from "react";
import Tasks from "../Tasks/Tasks";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";

const TasksWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.TASKS" })}
      </PageTitle>
      <Tasks />
    </>
  );
};

export default TasksWrapper;

import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import { ListsWidget6 } from "../lists/ListsWidget6";

const EmailsWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.NOTIFICATIONS" })}
      </PageTitle>
      <ListsWidget6 />
    </>
  );
};

export default EmailsWrapper;

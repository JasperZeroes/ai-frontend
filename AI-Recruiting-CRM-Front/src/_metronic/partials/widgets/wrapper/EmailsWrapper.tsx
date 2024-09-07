import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import EmailTable from "../emails/EmailTable";

const EmailsWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.ALL_MAIL" })}
      </PageTitle>
      <EmailTable />
    </>
  );
};

export default EmailsWrapper;

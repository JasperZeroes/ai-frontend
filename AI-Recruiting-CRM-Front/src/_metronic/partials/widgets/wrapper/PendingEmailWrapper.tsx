import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import { PendingEmails } from "../emails/PendingAndApproevedEmails";

const PendingEmailWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.PENDING_MAIL" })}
      </PageTitle>
      <PendingEmails />
    </>
  );
};

export default PendingEmailWrapper;

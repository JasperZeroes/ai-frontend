import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import { ApprovedEmails } from "../emails/PendingAndApprovedProjectEmails";


const SentEmailWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.SENT_PROJECT_MAIL" })}
      </PageTitle>
      <ApprovedEmails />
    </>
  );
};

export default SentEmailWrapper;

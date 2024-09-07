import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import { PendingEmails } from "../emails/PendingAndApprovedProjectEmails";

const SentEmailWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.PENDING_PROJECT_MAIL" })}
      </PageTitle>
      <PendingEmails />
    </>
  );
};

export default SentEmailWrapper;

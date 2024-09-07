import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import { TablesWidget14 } from "../../../../_metronic/partials/widgets/tables/TablesWidget14";
const CandidateWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.CANDIDATE" })}
      </PageTitle>
      <TablesWidget14 />
    </>
  );
};

export default CandidateWrapper;

import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import CandidateMatchCard from "../matches/CandidateMatchCard";

const CandidateMatchesWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.MATCHES" })}
      </PageTitle>
      <CandidateMatchCard />
    </>
  );
};

export default CandidateMatchesWrapper;

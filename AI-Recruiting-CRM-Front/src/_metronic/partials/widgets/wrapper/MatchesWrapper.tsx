import React from "react";
import { useIntl } from "react-intl";
import { PageTitle } from "../../../../_metronic/layout/core";
import ProjectMatchCard from "../matches/ProjectMatchCard";

const MatchesWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.MATCHES" })}
      </PageTitle>
      <ProjectMatchCard />
    </>
  );
};

export default MatchesWrapper;

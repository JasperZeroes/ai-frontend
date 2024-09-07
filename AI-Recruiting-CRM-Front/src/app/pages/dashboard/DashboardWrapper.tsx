import { useIntl } from "react-intl";
import { PageTitle } from "../../../_metronic/layout/core";
import { TablesWidget14 } from "../../../_metronic/partials/widgets/tables/TablesWidget14";
import { StatisticsWidget7 } from "../../../_metronic/partials/widgets/statistics/StatisticsWidget7";
import { ChartsWidget9 } from "../../../_metronic/partials/widgets/charts/ChartsWidget9";
import EmailStatisticsWidget from "../../../_metronic/partials/widgets/statistics/EmailStatisticsWidget";
import { StatisticsWidget8 } from "../../../_metronic/partials/widgets/statistics/StatisticsWidget8";
import { TablesWidget15 } from "../../../_metronic/partials/widgets/tables/TablesWidget15";
import UserDetailsWrapper from "../../../_metronic/partials/widgets/wrapper/UserDetailsWrapper";
// import ProjectDetails from "../../../_metronic/partials/widgets/Details/projectDeatails";
import ProjectDetailsWrapper from "../../../_metronic/partials/widgets/wrapper/ProjectDetailsWrapper";
import ProjectMatchCard from "../../../_metronic/partials/widgets/matches/ProjectMatchCard";
import EmailTable from "../../../_metronic/partials/widgets/emails/EmailTable";
// import ActionLogProjects from "../../../_metronic/partials/widgets/action_logs/ActionLogsProjects";
import { ListsWidget6 } from "../../../_metronic/partials/widgets";
import EmailInterface from "../../../_metronic/partials/widgets/emails/EmailInterface";

const DashboardPage = () => (
  <>
    <div className="row g-5 g-xl-8">
      <div className="col-xl-4 mb-5 mb-xl-0">
        <StatisticsWidget7
          className="card-xl-stretch"
          svgIcon="basket"
          color="body-white"
          iconColor="primary"
          title="69,700"
          description="Total Projects in April"
          titleColor="gray-900"
          descriptionColor="gray-400"
        />
      </div>

      <div className="col-xl-8 mb-5 mb-xl-0">
        <ChartsWidget9 className="card-xxl-stretch ms-20 w-650px" />
        {/* <StatisticsWidget5
      className='card-xl-stretch mb-xl-8'
      svgIcon='element-11'
      color='primary'
      iconColor='white'
      title='Appartments'
      description='Flats, Shared Rooms, Duplex'
      titleColor='white'
      descriptionColor='white'
    /> */}
      </div>
    </div>

    {/* begin::Row */}
    <div className="row g-5 g-xl-8">
      <div className="col-xl-4 mb-5 mb-xl-0">
        <EmailStatisticsWidget />
      </div>

      <div className="col-xl-8">
        <StatisticsWidget8
          className="card-xl-stretch mb-5 mb-xl-8"
          title="Match Metrics"
          description="More than 400 matches this month"
        />
      </div>

      <div className="row gy-5 gx-xl-8">
        {/* <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div> */}
        <div className="col-xl-12">
          <TablesWidget14 className="card-xxl-stretch mb-5 mb-xl-8" />
        </div>
        <div className="col-xl-12 mb-5">
          <TablesWidget15 className="card-xxl-stretch mb-5 mb-xl-8" />
        </div>
        <div>
          <UserDetailsWrapper />
        </div>

        <div>
          <ProjectDetailsWrapper />
        </div>

        <div className="col-xl-12 mb-5">
          <ProjectMatchCard className="card-xxl-stretch mb-5 mb-xl-8" />
        </div>
        <div className="col-xl-12 mb-5">
          <EmailTable className="card-xxl-stretch mb-5 mb-xl-8" />
        </div>
      </div>
      {/* begin::Row */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row g-5 g-xl-8">
      {/* begin::Col */}
      <div className="col-xl-12">
        <ListsWidget6 className="card-xl-stretch mb-xl-8" />
      </div>
      <div className="col-xl-12">
        <EmailInterface className="card-xl-stretch mb-xl-8" />
      </div>

      {/* end::Col */}

      {/* begin::Col */}
      {/* <div className='col-xl-8'>
        <TablesWidget5 className='card-xl-stretch mb-5 mb-xl-8' />
      </div> */}
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row gy-5 g-xl-8">
      {/* <div className='col-xxl-4'>
        <MixedWidget1
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div> */}
      {/* <div className='col-xxl-4'>
        <ListsWidget5 className='card-xxl-stretch' />
      </div> */}
      {/* <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
        <MixedWidget11
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
        />
      </div> */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row gy-5 gx-xl-8">
      {/* <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div> */}
      {/* <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div> */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className="row gy-5 g-xl-8">
      {/* <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div> */}
      {/* <div className='col-xl-4'>
        <ListsWidget10 className='card-xl-stretch mb-xl-8' />
      </div> */}
      <div className="col-xl-4">
        {/* <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
      </div>
    </div>
    {/* end::Row */}
  </>
);

const DashboardWrapper = () => {
  const intl = useIntl();
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {intl.formatMessage({ id: "MENU.DASHBOARD" })}
      </PageTitle>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };

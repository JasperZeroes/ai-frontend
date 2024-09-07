import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import { MenuTestPage } from "../pages/MenuTestPage";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";
import AddCandidatesForm from "../../_metronic/partials/widgets/Forms/AddCandidateForm";
import ManualAddCandidateForm from "../../_metronic/partials/widgets/Forms/ManualAddCandidateForm";
import AddProjectForm from "../../_metronic/partials/widgets/Forms/AddProjectForm";
import AddProjectManual from "../../_metronic/partials/widgets/Forms/AddProjectManual";
// import { TablesWidget14 } from "../../_metronic/partials/widgets/tables/TablesWidget14";
// import { TablesWidget15 } from "../../_metronic/partials/widgets/tables/TablesWidget15";
// import UserDetails from "../../_metronic/partials/widgets/Details/userDatails";
// import ProjectDetails from "../../_metronic/partials/widgets/Details/projectDeatails";
import UserDetailsWrapper from "../../_metronic/partials/widgets/wrapper/UserDetailsWrapper";
import ProjectDetailsWrapper from "../../_metronic/partials/widgets/wrapper/ProjectDetailsWrapper";
// import ProjectMatchCard from "../../_metronic/partials/widgets/matches/ProjectMatchCard";
import CandidateWrapper from "../../_metronic/partials/widgets/wrapper/CandidateWrapper";
import ProjectsWrapper from "../../_metronic/partials/widgets/wrapper/ProjectsWrapper";
import MatchesWrapper from "../../_metronic/partials/widgets/wrapper/MatchesWrapper";
import CanditateMatchesWrapper from "../../_metronic/partials/widgets/wrapper/CandidateMatchesWrapper";
import EmailsWrapper from "../../_metronic/partials/widgets/wrapper/EmailsWrapper";
import SentEmailWrapper from "../../_metronic/partials/widgets/wrapper/SentEmailWrapper";
import PendingEmailWrapper from "../../_metronic/partials/widgets/wrapper/PendingEmailWrapper";
import ProjectEmailsWrapper from "../../_metronic/partials/widgets/wrapper/ProjectEmailsWrapper";
import PendingProjectEmailWrapper from "../../_metronic/partials/widgets/wrapper/PendingProjectEmailWrapper";
import SentEmailProjectWrapper from "../../_metronic/partials/widgets/wrapper/SentEmailProjectWrapper";
import NotificationsWrapper from "../../_metronic/partials/widgets/wrapper/NotificationsWrapper";

import TasksWrapper from "../../_metronic/partials/widgets/wrapper/TasksWrapper";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="/add-candidate" element={<AddCandidatesForm />} />
        <Route path="/add-project" element={<AddProjectForm />} />
        <Route path="/add-project-manual" element={<AddProjectManual />} />
        <Route path="/tasks" element={<TasksWrapper />} />
        <Route path="/user-details" element={<UserDetailsWrapper />} />
        <Route path="/project-matches" element={<MatchesWrapper />} />
        <Route
          path="/candidate-matches"
          element={<CanditateMatchesWrapper />}
        />
        <Route path="/project-details" element={<ProjectDetailsWrapper />} />
        <Route path="/candidate" element={<CandidateWrapper />} />
        <Route path="/jobs" element={<ProjectsWrapper />} />
        <Route path="/emails" element={<EmailsWrapper />} />
        <Route path="/sent-emails" element={<SentEmailWrapper />} />
        <Route path="/pending-emails" element={<PendingEmailWrapper />} />
        <Route path="/project-emails" element={<ProjectEmailsWrapper />} />
        <Route path="/notifications" element={<NotificationsWrapper />} />
        <Route
          path="/pending-project-emails"
          element={<PendingProjectEmailWrapper />}
        />
        <Route
          path="/sent-project-emails"
          element={<SentEmailProjectWrapper />}
        />

        <Route
          path="/add-candidate-manual"
          element={<ManualAddCandidateForm />}
        />
        <Route
          path="builder"
          element={
            <SuspensedView>
              <BuilderPageWrapper />
            </SuspensedView>
          }
        />
        <Route path="menu-test" element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };

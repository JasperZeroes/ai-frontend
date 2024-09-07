import { useState } from "react";
import { useIntl } from "react-intl";
// import {KTIcon} from '../../../helpers'
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  const intl = useIntl();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuItemClick = (to: string) => {
    setActiveItem(to);
  };

  return (
    <>
      <AsideMenuItem
        to="/dashboard"
        icon="element-11"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
        isActive={activeItem === "/dashboard"}
        onClick={handleMenuItemClick}
      />
      {/* <AsideMenuItem to='/builder' icon='switch' title='Layout Builder' /> */}
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Pages
          </span>
          <AsideMenuItem
            to="/candidate"
            title={intl.formatMessage({ id: "MENU.CANDIDATE" })}
            fontIcon="bi bi-people-fill"
            isActive={activeItem === "/candidate"}
            onClick={handleMenuItemClick}
          />
          <AsideMenuItem
            to="/jobs"
            title="Jobs"
            fontIcon="bi bi-pie-chart-fill"
            isActive={activeItem === "/jobs"}
            onClick={handleMenuItemClick}
          />
          <AsideMenuItem
            to="/tasks"
            title={intl.formatMessage({ id: "MENU.TASKS" })}
            fontIcon="bi bi-list-task"
            isActive={activeItem === "/tasks"}
            onClick={handleMenuItemClick}
          />
          <AsideMenuItemWithSub
            to="/project-matches"
            title={intl.formatMessage({ id: "MENU.MATCHES" })}
            fontIcon="bi bi-chat-square-heart-fill me-4"
            onClick={() => handleMenuItemClick}
          >
            <AsideMenuItem
              to="/candidate-matches"
              title={intl.formatMessage({ id: "MENU.CANDIDATE_MATCHES" })}
              fontIcon="bi bi-chat-square-heart-fill"
              isActive={activeItem === "/candidate-matches"}
              onClick={() => handleMenuItemClick("/candidate-matches")}
            />
            <AsideMenuItem
              to="/project-matches"
              title={intl.formatMessage({ id: "MENU.JOB_MATCHES" })}
              fontIcon="bi bi-chat-square-heart-fill"
              isActive={activeItem === "/project-matches"}
              onClick={() => handleMenuItemClick("/project-matches")}
            />
          </AsideMenuItemWithSub>
          <AsideMenuItemWithSub
            to="/emails"
            title={intl.formatMessage({ id: "MENU.CANDIDATE_MAIL" })}
            fontIcon="bi bi-envelope-fill me-4"
            onClick={() => handleMenuItemClick}
          >
            <AsideMenuItem
              to="/emails"
              title={intl.formatMessage({ id: "MENU.ALL_MAIL" })}
              fontIcon="bi bi-envelope-fill"
              isActive={activeItem === "/emails"}
              onClick={() => handleMenuItemClick("/emails")}
            />
            <AsideMenuItem
              to="/sent-emails"
              title={intl.formatMessage({ id: "MENU.SENT_MAIL" })}
              fontIcon="bi bi-send-fill"
              isActive={activeItem === "/sent-emails"}
              onClick={() => handleMenuItemClick("/sent-emails")}
            />
            <AsideMenuItem
              to="/pending-emails"
              title={intl.formatMessage({ id: "MENU.PENDING_MAIL" })}
              fontIcon="bi bi-send-plus-fill"
              isActive={activeItem === "/pending-emails"}
              onClick={() => handleMenuItemClick("/pending-emails")}
            />
          </AsideMenuItemWithSub>
          <AsideMenuItemWithSub
            to="/project-emails"
            title={intl.formatMessage({ id: "MENU.PROJECT_MAIL" })}
            fontIcon="bi bi-envelope-fill me-4"
            onClick={() => handleMenuItemClick}
          >
            <AsideMenuItem
              to="/project-emails"
              title={intl.formatMessage({ id: "MENU.ALL_PROJECT_MAIL" })}
              fontIcon="bi bi-envelope-fill"
              isActive={activeItem === "/project-emails"}
              onClick={() => handleMenuItemClick("/project-emails")}
            />
            <AsideMenuItem
              to="/sent-project-emails"
              title={intl.formatMessage({ id: "MENU.SENT_PROJECT_MAIL" })}
              fontIcon="bi bi-send-fill"
              isActive={activeItem === "/sent-project-emails"}
              onClick={() => handleMenuItemClick("/sent-project-emails")}
            />
            <AsideMenuItem
              to="/pending-project-emails"
              title={intl.formatMessage({ id: "MENU.PENDING_PROJECT_MAIL" })}
              fontIcon="bi bi-send-plus-fill"
              isActive={activeItem === "/pending-project-emails"}
              onClick={() => handleMenuItemClick("/pending-project-emails")}
            />
          </AsideMenuItemWithSub>

          <AsideMenuItem
            to="/notifications"
            title="Notifications"
            fontIcon="bi bi-bell-fill"
            isActive={activeItem === "/notifications"}
            onClick={() => handleMenuItemClick("/notifications")}
          />
          <AsideMenuItem
            to="/dashboard"
            title="Settings"
            fontIcon="bi bi-gear-fill"
            isActive={activeItem === "/settings"}
            onClick={() => handleMenuItemClick("/settings")}
          />
        </div>
      </div>

      {/* <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Pages
          </span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to="/dashboard/candidates"
        title="Candidates"
        icon="profile-circle"
      > */}
      {/* <AsideMenuItemWithSub
          to="/crafted/pages/profile"
          title="Profile"
          hasBullet={true}
        > */}
      {/* <AsideMenuItem
            to="/crafted/pages/profile/overview"
            title="Overview"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/pages/profile/projects"
            title="Projects"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/pages/profile/campaigns"
            title="Campaigns"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/pages/profile/documents"
            title="Documents"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/pages/profile/connections"
            title="Connections"
            hasBullet={true}
          /> */}
      {/* </AsideMenuItemWithSub> */}

      {/* <AsideMenuItemWithSub
          to="/crafted/pages/wizards"
          title="Wizards"
          hasBullet={true}
        >
          <AsideMenuItem
            to="/crafted/pages/wizards/horizontal"
            title="Horizontal"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/crafted/pages/wizards/vertical"
            title="Vertical"
            hasBullet={true}
          />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to="/crafted/accounts"
        title="Projects"
        icon="profile-circle"
      >
        <AsideMenuItem
          to="/crafted/account/overview"
          title="Overview"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/crafted/account/settings"
          title="Settings"
          hasBullet={true}
        />
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItemWithSub to='/error' title='Errors' icon='cross-circle'>
        <AsideMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub> */}
      {/* <AsideMenuItemWithSub
        to="/crafted/widgets"
        title="Matches"
        icon="element-plus"
      >
        <AsideMenuItem
          to="/crafted/widgets/lists"
          title="Lists"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/crafted/widgets/statistics"
          title="Statistics"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/crafted/widgets/charts"
          title="Charts"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/crafted/widgets/mixed"
          title="Mixed"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/crafted/widgets/tables"
          title="Tables"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/crafted/widgets/feeds"
          title="Feeds"
          hasBullet={true}
        />
      </AsideMenuItemWithSub> */}
      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div> */}
      {/* <AsideMenuItemWithSub
        to="/apps/chat"
        title="Emails"
        icon="message-text-2"
      >
        <AsideMenuItem
          to="/apps/chat/private-chat"
          title="Private Chat"
          hasBullet={true}
        />
        <AsideMenuItem
          to="/apps/chat/group-chat"
          title="Group Chart"
          hasBullet={true}
        /> */}
      {/* <AsideMenuItem
          to="/apps/chat/drawer-chat"
          title="Drawer Chart"
          hasBullet={true}
        /> */}
      {/* </AsideMenuItemWithSub>
      <AsideMenuItem to="/apps/chat" icon="shield-tick" title="Notifications" />
      <AsideMenuItem to="/apps/chat" icon="shield-tick" title="Settings" /> */}
      {/* <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={import.meta.env.VITE_APP_PREVIEW_DOCS_URL + '/changelog'}
        >
          <span className='menu-icon'>
            <KTIcon iconName='document' className='fs-2' />
          </span>
          <span className='menu-title'>Changelog {import.meta.env.VITE_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  );
}

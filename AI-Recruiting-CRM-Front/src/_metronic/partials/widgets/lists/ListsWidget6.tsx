import { FC } from "react";
import { KTIcon } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
};

const ListsWidget6: FC<Props> = ({ className }) => {
  return (
    <div
      className={`card card-xl-stretch mb-5 mb-xl-8 ${className}`}
      style={{ width: "100%" }}
    >
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bold text-gray-900">Notifications</h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTIcon iconName="category" className="fs-2" />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div
        className="card-body pt-0"
        style={{ overflowY: "auto", maxHeight: "600px" }}
      >
        <div className="d-flex mb-5">
          <button className="btn btn-primary me-2 ">All</button>
          <button className="btn btn-success me-2 ">Unread</button>
        </div>
        {/* begin::New Section */}
        <h4 className="mb-4">New</h4>
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-primary rounded p-5 mb-7">
          <span className="text-primary me-5">
            <KTIcon iconName="abstract-26" className="text-primary fs-1 me-5" />
          </span>
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Pending Emails
            </a>
            <span className="text-muted fw-semibold d-block">1hr ago</span>
          </div>
        </div>
        <div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
          <span className="text-success me-5">
            <KTIcon iconName="abstract-26" className="text-success fs-1 me-5" />
          </span>
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Match Request complete
            </a>
            <span className="text-muted fw-semibold d-block">2hrs ago</span>
          </div>
        </div>
        <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
          <span className="text-danger me-5">
            <KTIcon iconName="abstract-26" className="text-danger fs-1 me-5" />
          </span>
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Emails Sent by AI
            </a>
            <span className="text-muted fw-semibold d-block">1 day ago</span>
          </div>
        </div>
        <div className="d-flex align-items-center bg-light-info rounded p-5 mb-7">
          <span className="text-info me-5">
            <KTIcon iconName="abstract-26" className="text-info fs-1 me-5" />
          </span>
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Freelancer Database updated
            </a>
            <span className="text-muted fw-semibold d-block">2 days ago</span>
          </div>
        </div>
        <h4 className="mb-4">Earlier</h4>
        <div className="d-flex align-items-center bg-light-primary rounded p-5 mb-7">
          <span className="text-primary me-5">
            <KTIcon iconName="abstract-26" className="text-primary fs-1 me-5" />
          </span>
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Pending Emails
            </a>
            <span className="text-muted fw-semibold d-block">1hr ago</span>
          </div>
        </div>
        <div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
          <span className="text-success me-5">
            <KTIcon iconName="abstract-26" className="text-success fs-1 me-5" />
          </span>
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Match Request complete
            </a>
            <span className="text-muted fw-semibold d-block">2hrs ago</span>
          </div>
        </div>
        <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
          <span className="text-danger me-5">
            <KTIcon iconName="abstract-26" className="text-danger fs-1 me-5" />
          </span>
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Emails Sent by AI
            </a>
            <span className="text-muted fw-semibold d-block">1 day ago</span>
          </div>
        </div>
        <div className="d-flex align-items-center bg-light-info rounded p-5">
          <span className="text-info me-5">
            <KTIcon iconName="abstract-26" className="text-info fs-1 me-5" />
          </span>
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Freelancer Database updated
            </a>
            <span className="text-muted fw-semibold d-block">2 days ago</span>
          </div>
        </div>
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget6 };

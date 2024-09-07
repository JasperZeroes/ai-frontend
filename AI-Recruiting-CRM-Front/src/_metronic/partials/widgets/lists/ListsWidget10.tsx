import React from "react";
import { KTIcon } from "../../../helpers";
// import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
};

const ListsWidget10: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header align-items-center border-0 mt-4">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-gray-900">Action Log</span>
        </h3>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTIcon iconName="category" className="fs-2" />
          </button>
        </div>
      </div>
      <div
        className="card-body pt-3"
        style={{ maxHeight: "800px", overflowY: "auto" }}
      >
        <div className="timeline-label">
          <div className="timeline-item ">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                08:42
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                02-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Job created <span className="text-primary">By Chibueze</span>
              <br />
              jdoe123, Email Verified: Yes
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                10:00
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                02-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-success fs-1"></i>
            </div>

            <div className="fw-normal timeline-content text-muted ps-3">
              Profile updated <span className="text-primary">By Chibueze</span>
              <br />
              Skills Added: Web Development, Graphic Design; Resume Uploaded:
              Yes; Profile Picture Set: Yes
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                14:37
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                02-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Job Match <span className="text-primary">By Chibueze</span>
              <br />
              User was matched to Experienced Python Developer with a Match
              score of 7.5/10
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                16:50
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                02-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-primary fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Email sent <span className="text-primary">By Chibueze</span>
              <br />
              Email invite to
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                21:03
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                02-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Email replied <span className="text-primary">By Chibueze</span>
              <br />
              jdoe123, Email Verified: Yes
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                16:50
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                02-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-primary fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Account created <span className="text-primary">By Chibueze</span>
              <br />
              jdoe123, Email Verified: Yes
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                21:03
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                02-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Account created <span className="text-primary">By Chibueze</span>
              <br />
              jdoe123, Email Verified: Yes
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                21:03
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                02-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-success fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Account created <span className="text-primary">By Chibueze</span>
              <br />
              jdoe123, Email Verified: Yes
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                08:10
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Logged in <span className="text-primary">By John</span>
              <br />
              IP Address: 192.168.1.1
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                09:45
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-success fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Task completed <span className="text-primary">By John</span>
              <br />
              Task ID: 1234, Status: Successful
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                11:30
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Error reported <span className="text-primary">By John</span>
              <br />
              Error Code: 500, Description: Server Error
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                13:20
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-primary fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              File uploaded <span className="text-primary">By John</span>
              <br />
              Filename: document.pdf, Size: 2MB
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                14:50
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Password changed <span className="text-primary">By John</span>
              <br />
              Security Level: High
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                15:15
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Session timed out <span className="text-primary">By John</span>
              <br />
              Duration: 30 minutes
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                16:30
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-success fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Settings updated <span className="text-primary">By John</span>
              <br />
              Preference: Dark Mode Enabled
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                18:00
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-primary fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Logged out <span className="text-primary">By John</span>
              <br />
              IP Address: 192.168.1.1
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                20:25
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Payment failed <span className="text-primary">By John</span>
              <br />
              Amount: $100, Reason: Insufficient Funds
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                21:45
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-success fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Payment received <span className="text-primary">By John</span>
              <br />
              Amount: $100, Transaction ID: ABC123
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                23:10
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                03-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Alert triggered <span className="text-primary">By John</span>
              <br />
              Severity: High, Type: Security Breach
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                01:30
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                04-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Password reset <span className="text-primary">By John</span>
              <br />
              Security Level: Medium
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                02:55
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                04-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-success fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Two-factor authentication enabled{" "}
              <span className="text-primary">By John</span>
              <br />
              Method: SMS
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                04:20
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                04-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-warning fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Profile viewed <span className="text-primary">By John</span>
              <br />
              Viewer: Anonymous
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                06:05
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                04-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Message sent <span className="text-primary">By John</span>
              <br />
              Recipient: Jane, Message ID: 5678
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                07:25
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                04-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-success fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Message read <span className="text-primary">By John</span>
              <br />
              Recipient: Jane, Message ID: 5678
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                08:40
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                04-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-primary fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Login attempt <span className="text-primary">By John</span>
              <br />
              Status: Successful, IP: 192.168.1.2
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                09:55
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                04-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3">
              Unauthorized access attempt{" "}
              <span className="text-primary">By John</span>
              <br />
              Status: Failed, IP: 192.168.1.3
            </div>
          </div>
          <div className="timeline-item">
            <div className="d-flex flex-column">
              <div className="timeline-label fw-bold text-gray-800 fs-6">
                11:15
              </div>
              <div
                className="timeline-label text-muted text-nowrap"
                style={{ fontSize: "8px" }}
              >
                04-09-2023
              </div>
            </div>
            <div className="timeline-badge">
              <i className="fa fa-genderless text-success fs-1"></i>
            </div>
            <div className="fw-normal timeline-content text-muted ps-3 ">
              <span className="fs-5 fw-900">Subscription renewed </span>
              <span className="text-primary">By John</span>
              <br />
              Plan: Premium, Duration: 1 Year
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { ListsWidget10 };

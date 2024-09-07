import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "./ActionLogProjects.scss";

const ActionLogProjects = () => {
  const logs = [
    {
      time: "08:42",
      date: "02-09-2023",
      type: "Job created",
      user: "Chibueze",
      details: "jdoe123, Email Verified: Yes",
      iconClass: "text-warning",
    },
    {
      time: "10:00",
      date: "02-09-2023",
      type: "Profile updated",
      user: "Chibueze",
      details:
        "Skills Added: Web Development, Graphic Design; Resume Uploaded: Yes; Profile Picture Set: Yes",
      iconClass: "text-success",
    },
    {
      time: "14:37",
      date: "02-09-2023",
      type: "Job Match",
      user: "Chibueze",
      details:
        "User was matched to Experienced Python Developer with a Match score of 7.5/10",
      iconClass: "text-danger",
    },
    {
      time: "16:50",
      date: "02-09-2023",
      type: "Email sent",
      user: "Chibueze",
      details: "Email invite to",
      iconClass: "text-primary",
    },
    {
      time: "21:03",
      date: "02-09-2023",
      type: "Email replied",
      user: "Chibueze",
      details: "jdoe123, Email Verified: Yes",
      iconClass: "text-danger",
    },
    {
      time: "16:50",
      date: "02-09-2023",
      type: "Account created",
      user: "Chibueze",
      details: "jdoe123, Email Verified: Yes",
      iconClass: "text-primary",
    },
    {
      time: "21:03",
      date: "02-09-2023",
      type: "Account created",
      user: "Chibueze",
      details: "jdoe123, Email Verified: Yes",
      iconClass: "text-danger",
    },
    {
      time: "21:03",
      date: "02-09-2023",
      type: "Account created",
      user: "Chibueze",
      details: "jdoe123, Email Verified: Yes",
      iconClass: "text-success",
    },
  ];

  return (
    <div className="card action-log">
      <div className="card-header">
        <h3 className="card-title">Action Log</h3>
      </div>
      <div className="card-body">
        <OverlayScrollbarsComponent>
          <ul className="list-unstyled">
            {logs.map((log, index) => (
              <li key={index} className="d-flex mb-4">
                <div className={`symbol symbol-24 mr-3 ${log.iconClass}`}>
                  <i className="bi bi-circle-fill"></i>
                </div>
                <div>
                  <div className="fw-semibold">
                    <span className="text-dark">{log.time} </span>
                    <span className="text-muted"> {log.date}</span>
                  </div>
                  <div>
                    <span className="fw-bold">{log.type}</span>{" "}
                    <span className="text-muted">By {log.user}</span>
                  </div>
                  <div className="text-muted">{log.details}</div>
                </div>
              </li>
            ))}
          </ul>
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
};

export default ActionLogProjects;

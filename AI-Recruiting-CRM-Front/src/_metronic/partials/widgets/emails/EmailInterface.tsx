import React from "react";
import { Button } from "react-bootstrap";
import BulkActionDropdown from "../popups/BulkActionDropdown";
import StatusDropdown from "../popups/StatusDropdown";

type EmailInterfaceProps = {
  className?: string;
};

const EmailInterface: React.FC<EmailInterfaceProps> = ({ className }) => {
  return (
    <div className={`card ${className} `}>
      <div className="card-header border-1 pt-5">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="position-relative" style={{ maxWidth: "300px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              style={{ paddingLeft: "30px" }}
            />
            <span
              className="position-absolute top-50 translate-middle-y"
              style={{ left: "10px" }}
            >
              <i className="fa fa-search"></i>
            </span>
          </div>
          <div className="d-flex align-items-center">
            <StatusDropdown />
            <BulkActionDropdown
            // confirmMessage="Are you sure you want to Delete this Candidate(s)?"
            // handleConfirmDelete={handleConfirmDelete}
            // handleConfirmDuplicate={handleConfirmDuplicate}
            />
            <button
              className="btn btn-primary"
              style={{ whiteSpace: "nowrap" }}
              // onClick={handleAddCandidate}
            >
              New Mail
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid p-4 border border-dark mt-5">
        <div className="row">
          {/* Sidebar */}
          <div
            className="col-md-3 p-3"
            style={{
              borderRight: "1px solid gray",
              height: "100vh",
              overflowY: "auto",
            }}
          >
            <div className="d-flex justify-content-between mb-5">
              <h5 className="text-primary">
                <i className="bi bi-people-fill me-3 fs-1 text-primary"></i>
                Candidate
              </h5>
              <h5 className="text-muted">
                <i className="bi bi-pie-chart-fill fs-1 me-3"></i>Projects
              </h5>
            </div>

            <div
              className="position-relative mb-5"
              style={{ maxWidth: "300px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                style={{ paddingLeft: "30px" }}
              />
              <span
                className="position-absolute top-50 translate-middle-y"
                style={{ left: "10px" }}
              >
                <i className="fa fa-search"></i>
              </span>
            </div>

            <ul className="list-unstyled">
              {[...Array(10)].map((_, index) => (
                <li key={index} className="mb-3">
                  <div className="d-flex">
                    <div>
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <span className="d-block font-weight-bold">
                          Max Smith
                        </span>
                        <small className="text-muted">10:23pm</small>
                      </div>
                      <span className="d-block text-muted">
                        john****@example.com
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-truncate text-muted"
                    style={{ marginTop: "0.5rem" }}
                  >
                    Gastropub chillwave lumber umami lyft. Poke austin direct
                    trade, marfa raclette...
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <div className="d-flex align-items-center">
                  <h4 className="mb-0">Max Smith</h4>
                  <Button variant="warning btn-sm ms-20">Pending</Button>
                </div>
                <small className="text-muted">john****@example.com</small>
              </div>
              <div>
                <button className="btn btn-success btn-sm  me-2">
                  Approve <i className="bi bi-square-fill ms-2"></i>
                </button>
                <button className="btn btn-warning btn-sm me-2">
                  Edit <i className="bi bi-square-fill ms-2"></i>
                </button>
                <button className="btn btn-danger btn-sm">
                  Reject <i className="bi bi-square-fill ms-2"></i>
                </button>
              </div>
            </div>

            <div className=" p-4 rounded shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <span className="text-primary ">
                    Experienced Python Developer
                  </span>
                  <span className="ms-2 text-muted">&</span>
                  <span className="text-primary ms-2">Chiabuze Michael</span>
                  <span className="text-success ms-2">75%</span>
                </div>
                <div>
                  <button className="btn btn-primary ">
                    Switch mail <i className="bi bi-arrow-repeat fs-1 ms-2"></i>
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary mb-5">
                  Regenerate Mail with AI
                </button>
              </div>
              <div>
                <h6 className="fs-4">Hello [Freelancer's Name],</h6>
                <p>
                  We're excited to share a new project opportunity with you that
                  aligns perfectly with your expertise.
                </p>
                <p>
                  Aesthetic asymmetrical gluten-free, health goth shaman meh
                  lumbersexual bespoke kinfolk helvetica vaporware fashion axe
                  freegan. Pour-over hammock succulents disrupt chartreuse raw
                  denim.
                </p>
                <p>
                  If this project sparks your interest and you'd like to learn
                  more, please let us know by replying to this email.
                </p>
                <p>
                  We believe this project could be a great addition to your
                  portfolio and are eager to hear from you. Reply to this email
                  to indicate your interest and learn more about this
                  opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailInterface;

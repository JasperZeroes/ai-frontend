import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, Button } from "reactstrap";
import BulkActionDropdown from "../matches/BulkActionDropdown";
import StatusDropdown from "../popups/StatusDropdown";

type Job = {
  id: number;
  job_title: string;
  job_description: string;
};

const ProjectMatchCard: FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/jobs/");
        setJobs(response.data);
      } catch (err) {
        setError("Failed to fetch jobs data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="card">
      <div className="card-header border-0 pt-5">
        <h1 className="fs-1 fw-bolder mb-5">Job Matches</h1>
        <div className="d-flex justify-content-between align-items-center w-100 mb-6">
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
              confirmMessage="Are you sure you want to Delete this Candidate(s)?"
              handleConfirmDelete={() => {}}
            />
            <button
              className="btn btn-primary"
              style={{ whiteSpace: "nowrap" }}
            >
              New Match
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="ms-2">Loading...</div>
          </div>
        ) : error ? (
          <div className="d-flex justify-content-center align-items-center">
            <p>{error}</p>
          </div>
        ) : (
          jobs.map((job) => (
            <Card className="mb-3 w-100" key={job.id}>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <h5 className="text-primary">{job.job_title}</h5>
                    <span className="badge bg-secondary ms-6 mb-3">7.5/10</span>
                  </div>
                  <Button color="light">Add Feedback</Button>
                </div>
                <p className="mt-3 mb-4">{job.job_description}</p>
                <div className="d-flex align-items-center">
                  <div>
                    <button className="btn btn-outline me-2">
                      Email Sent <i className="bi bi-x-square ms-3 fs-1"></i>
                    </button>
                    <button className="btn btn-outline me-2">
                      Email Opened <i className="bi bi-x-square ms-3 fs-1"></i>
                    </button>
                    <button className="btn btn-outline me-2">
                      Email Replied<i className="bi bi-x-square ms-3 fs-1"></i>
                    </button>
                  </div>
                  <button className="btn btn-outline text-nowrap">
                    Pairing Successful{" "}
                    <i className="bi bi-x-square ms-3 fs-1"></i>
                  </button>
                </div>
              </CardBody>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectMatchCard;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

type ProjectDetailsProps = {
  className?: string;
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ className }) => {
  const location = useLocation();
  const { details } = location.state || { details: {} };
  const [projectDetails, setProjectDetails] = useState(details);
  const [isEditing, setIsEditing] = useState(false);
  const [activate, setActivate] = useState(details.activate || false);
  const [showAlert, setShowAlert] = useState(true);

  const handleCopy = (text: string) => {
    navigator.clipboard
      .writeText(text.trim())
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectDetails((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setActivate(checked);
    setProjectDetails((prevState: any) => ({
      ...prevState,
      activate: checked,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/update_job/${projectDetails.id}/`,
        projectDetails
      );
      if (response.status === 200) {
        toast.success("Project details updated successfully");
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating project details:", error);
      toast.error("Failed to update project details");
    }
  };

  const handleToggleActivate = () => {
    setActivate(!activate);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className={`card ${className}`} style={{ width: "100%" }}>
      <div className="card-header">
        <h3 className="card-title">Job Details</h3>
        <div className="card-toolbar">
          <button className="btn btn-primary" onClick={handleEditToggle}>
            {isEditing ? "Cancel" : "Edit Profile"}
            <i className="bi bi-pencil-square ms-4 fs-1"></i>
          </button>
          {isEditing && (
            <button className="btn btn-success ms-2" onClick={handleSave}>
              Save
              <i className="bi bi-save ms-2 fs-1"></i>
            </button>
          )}
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          {/* Project details fields */}
          {Object.keys(projectDetails).map(
            (key) =>
              key !== "id" && ( // Exclude 'id' field from rendering
                <div
                  key={key}
                  className="col-md-12 d-flex align-items-center justify-content-between mb-3"
                >
                  <label className="form-label" style={{ width: "70%" }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control w-100"
                      name={key}
                      value={projectDetails[key] || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <p className="form-control-plaintext mb-0 w-100">
                        {projectDetails[key]}
                      </p>
                      {(key === "projectTitle" ||
                        key === "sourceLink" ||
                        key === "linkedinSalesNavigator") && (
                        <button
                          className="btn btn-link p-0 ms-2"
                          onClick={() => handleCopy(projectDetails[key])}
                          aria-label={`Copy ${key}`}
                        >
                          <i className="bi bi-copy"></i>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )
          )}
          {/* Activate toggle */}
          <div className="form-group form-check form-switch d-flex justify-content-between align-items-center mb-3">
            <label className="form-check-label" htmlFor="activate">
              Activate
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="activate"
              name="activate"
              checked={activate}
              onChange={handleToggleActivate}
              disabled={isEditing}
            />
          </div>
          {/* Attention alert */}
          {showAlert && (
            <div className="alert alert-warning w-100 d-flex align-items-center justify-content-between">
              <div>
                <strong>We need your attention!</strong>
                <br />
                He sent a reply, you need to follow up immediately.
              </div>
              <button
                className="btn btn-link p-0 ms-2"
                onClick={handleAlertClose}
                aria-label="Close Alert"
              >
                <i className="bi bi-x-circle fs-1"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

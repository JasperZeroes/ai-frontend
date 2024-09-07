import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

type UserDetailsProps = {
  className?: string;
};

const UserDetails: React.FC<UserDetailsProps> = ({ className }) => {
  const location = useLocation();
  const { details } = location.state || { details: {} };

  const [userDetails, setUserDetails] = useState(details);

  useEffect(() => {
    setUserDetails(details);
  }, [details]);

  const [isEditing, setIsEditing] = useState(false);
  const [receiveMails, setReceiveMails] = useState(
    details.receiveMails || false
  );
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
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setReceiveMails(checked);
    setUserDetails((prevState) => ({
      ...prevState,
      receiveMails: checked,
    }));
  };

  const handleSave = async () => {
    setIsEditing(false);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/update_Leads/${userDetails.id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Successfully saved:", data);
      // Optionally handle response data or update local state
    } catch (error: any) {
      console.error("Failed to save:", error);
      alert("An error occurred while saving");
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const truncateText = (text: string | undefined, maxLength: number) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength - 3) + "...";
    }
    return text;
  };

  return (
    <div className={`card ${className}`} style={{ width: "100%" }}>
      <div className="card-header">
        <h3 className="card-title">User Details</h3>
        <div className="card-toolbar">
          {isEditing ? (
            <>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
                <i className="bi bi-check ms-2 fs-1"></i>
              </button>
              <button
                className="btn btn-secondary ms-2"
                onClick={handleEditToggle}
              >
                Cancel
                <i className="bi bi-x ms-2 fs-4"></i>
              </button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={handleEditToggle}>
              Edit Profile
              <i className="bi bi-pencil-square ms-2 fs-4"></i>
            </button>
          )}
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          {Object.keys(userDetails).map(
            (key) =>
              key !== "id" && (
                <div
                  key={key}
                  className="col-md-12 d-flex align-items-center justify-content-between"
                >
                  <label className="form-label" style={{ width: "70%" }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control w-100"
                      name={key}
                      value={userDetails[key] || ""}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <p className="form-control-plaintext w-100">
                        {key === "email" ||
                        key === "sourceLink" ||
                        key === "linkedinSalesNavigator"
                          ? truncateText(userDetails[key], 30)
                          : userDetails[key]}
                      </p>
                      {(key === "email" ||
                        key === "sourceLink" ||
                        key === "linkedinSalesNavigator") && (
                        <button
                          className="btn btn-link p-0 ms-2"
                          onClick={() => handleCopy(userDetails[key])}
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
          <div className="form-switch d-flex justify-content-between align-items-center">
            <label className="form-control-plaintext">Receive Mails</label>
            <input
              className="form-check-input"
              type="checkbox"
              name="receiveMails"
              checked={receiveMails}
              onChange={handleCheckboxChange}
              disabled={!isEditing}
            />
          </div>
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

export default UserDetails;

import React, { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AddCandidatesForm = () => {
  const [isAutomatic, setIsAutomatic] = useState(true);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/dashboard");
  };

  const handleToggle = () => {
    setIsAutomatic(!isAutomatic);
    navigate("/add-candidate-manual");
  };

  return (
    <>
      <h1 className="fs-1 ms-4">Add Candidates</h1>
      <div className="w-100 p-4" style={{ width: "100%", margin: "0 auto" }}>
        <div className="d-flex mb-4">
          <Button
            variant={isAutomatic ? "primary" : "light"}
            className="mr-2 w-50"
            onClick={handleToggle}
          >
            Automatic
          </Button>
          <Button
            variant={!isAutomatic ? "primary" : "light"}
            className="w-50"
            onClick={handleToggle}
          >
            Manual
          </Button>
        </div>
        <Form>
          {isAutomatic && (
            <>
              <Form.Group controlId="formProject">
                <FormLabel>Project</FormLabel>
                <div className="input-group mb-5">
                  <input
                    type="text"
                    placeholder="Select Project"
                    className="form-control"
                  />
                  <span className="input-group-text">
                    <i className="fa fa-chevron-down"></i>
                  </span>
                </div>
              </Form.Group>
              <Form.Group controlId="formJobLink">
                <Form.Control
                  type="text"
                  placeholder="Paste job link here"
                  className="w-100"
                />
              </Form.Group>
            </>
          )}
          <div className="d-flex justify-content-end my-5">
            <Button variant="light" className="me-5" onClick={handleNavigate}>
              Cancel
            </Button>
            <Button variant="primary">Search</Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddCandidatesForm;

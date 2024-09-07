import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ManualAddCandidateForm = () => {
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [companySite, setCompanySite] = useState("");
  const [location, setLocation] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [linkedInSalesNavigator, setLinkedInSalesNavigator] = useState("");

  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [skillInput, setSkillInput] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  const handleAddSkill = () => {
    if (skillInput) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSubmit = async () => {
    const [firstName, lastName] = fullName.split(" ");
    const newCandidate = {
      first_name: firstName,
      last_name: lastName,
      title,
      email,
      phone_number: phoneNumber,
      company_name: company,
      company_website: companySite,
      location,
      linkedin: linkedIn,
      linkedin_sales_navigator: linkedInSalesNavigator,
      skills: skills.join(", "),
      experience,
    };

    const response = await fetch("http://127.0.0.1:8000/add_leads/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCandidate),
    });

    if (response.ok) {
      handleNavigate();
    } else {
      console.error("Failed to add candidate");
    }
  };

  return (
    <div className="w-100 p-4" style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <h4 className="my-5 fs-1">Add Candidates</h4>
      <Form>
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="+1234567890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formSkills">
          <Form.Label>Skills</Form.Label>
          <div className="d-flex">
            <Form.Control
              type="text"
              placeholder="Add a skill"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              className="mb-3"
            />
            <Button variant="primary" onClick={handleAddSkill} className="ms-2">
              Add
            </Button>
          </div>
          <ul className="list-unstyled">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="d-inline-flex align-items-center mb-2 border border p-2 me-2 rounded"
                style={{ whiteSpace: "nowrap" }}
              >
                {skill}
                <button
                  type="button"
                  className="btn-close ms-2"
                  aria-label="Close"
                  onClick={() => handleRemoveSkill(skill)}
                ></button>
              </li>
            ))}
          </ul>
        </Form.Group>
        <Form.Group controlId="formExperience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Describe your experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Hint text here"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formCompanySite">
          <Form.Label>Company Site</Form.Label>
          <Form.Control
            type="text"
            placeholder="Hint text here"
            value={companySite}
            onChange={(e) => setCompanySite(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Hint text here"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formLinkedIn">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control
            type="text"
            placeholder="LinkedIn profile URL"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <Form.Group controlId="formLinkedInSalesNavigator">
          <Form.Label>LinkedIn Sales Navigator</Form.Label>
          <Form.Control
            type="text"
            placeholder="LinkedIn Sales Navigator link"
            value={linkedInSalesNavigator}
            onChange={(e) => setLinkedInSalesNavigator(e.target.value)}
            className="mb-3"
          />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="light" className="mr-2" onClick={handleNavigate}>
            Cancel
          </Button>
          <Button variant="primary ms-5" onClick={handleSubmit}>
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ManualAddCandidateForm;

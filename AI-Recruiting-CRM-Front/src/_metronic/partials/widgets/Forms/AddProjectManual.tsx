import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const AddProjectManual = () => {
  const [form, setForm] = useState({
    projectTitle: "",
    emailMode: "Automatic or Manual",
    experienceLevel: "Senior",
    requiredSkills: [],
    deadline: "",
    budget: "",
    location: "",
    company: "",
    companySite: "",
    companyEmail: "",
    sourceWebsite: "",
    companyPhone: "",
    description: "",
    sourceLink: "",
    employees: "0-1000",
  });

  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [isAutomatic, setIsAutomatic] = useState(true);

  const handleAddSkill = () => {
    if (newSkill && !form.requiredSkills.includes(newSkill)) {
      setForm({
        ...form,
        requiredSkills: [...form.requiredSkills, newSkill],
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setForm({
      ...form,
      requiredSkills: form.requiredSkills.filter(
        (skill) => skill !== skillToRemove
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/add_job/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        console.log("Job added successfully");
        // Optionally reset the form state here
        setForm({
          projectTitle: "",
          emailMode: "Automatic or Manual",
          experienceLevel: "Senior",
          requiredSkills: [],
          deadline: "",
          budget: "",
          location: "",
          company: "",
          companySite: "",
          companyEmail: "",
          sourceWebsite: "",
          companyPhone: "",
          description: "",
          sourceLink: "",
          employees: "0-1000",
        });
      } else {
        console.error("Failed to add job");
      }
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  const handleToggle = () => {
    setIsAutomatic(!isAutomatic);
    navigate("/add-project-manual");
  };

  return (
    <div className="container">
      <h1 className="fs-1 ">Add Job</h1>
      <div className="w-100 " style={{ width: "100%", margin: "0 auto" }}>
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
      </div>
      <form onSubmit={handleSubmit} className="w-100">
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            name="projectTitle"
            value={form.projectTitle}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Mode</label>
          <select
            className="form-select"
            name="emailMode"
            value={form.emailMode}
            onChange={handleChange}
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Experience Level</label>
          <select
            className="form-select"
            name="experienceLevel"
            value={form.experienceLevel}
            onChange={handleChange}
          >
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Required Skills</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter a skill"
            />
            <Button onClick={handleAddSkill} style={{ whiteSpace: "nowrap" }}>
              Add Skill
            </Button>
          </div>
          <div className="mt-2">
            {form.requiredSkills.map((skill, index) => (
              <span key={index} className="badge bg-secondary me-2">
                {skill}
                <button
                  type="button"
                  className="btn-close ms-2"
                  aria-label="Close"
                  onClick={() => handleRemoveSkill(skill)}
                ></button>
              </span>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Deadline</label>
          <input
            type="date"
            className="form-control"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Budget</label>
          <input
            type="text"
            className="form-control"
            name="budget"
            value={form.budget}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={form.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company</label>
          <input
            type="text"
            className="form-control"
            name="company"
            value={form.company}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Site</label>
          <input
            type="text"
            className="form-control"
            name="companySite"
            value={form.companySite}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Email</label>
          <input
            type="email"
            className="form-control"
            name="companyEmail"
            value={form.companyEmail}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Source Website</label>
          <input
            type="text"
            className="form-control"
            name="sourceWebsite"
            value={form.sourceWebsite}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Company Phone</label>
          <input
            type="tel"
            className="form-control"
            name="companyPhone"
            value={form.companyPhone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Source Link</label>
          <input
            type="text"
            className="form-control"
            name="sourceLink"
            value={form.sourceLink}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Employees</label>
          <select
            className="form-select"
            name="employees"
            value={form.employees}
            onChange={handleChange}
          >
            <option value="0-1000">0-1000</option>
            <option value="1001-5000">1001-5000</option>
            <option value="5001-10000">5001-10000</option>
            <option value="10001+">10001+</option>
          </select>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-secondary me-2"
            onClick={handleNavigate}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectManual;

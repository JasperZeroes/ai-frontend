import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BulkActionDropdown from "../popups/BulkActionDropdown";
import StatusDropdown from "../popups/StatusDropdown";
import { toast } from "react-toastify";

type Project = {
  id: string;
  jobTitle: string;
  location: string;
  jobDescription: string;
  experienceLevel: string;
  requiredSkills: string;
  deadline: string;
  companyName: string;
  employeeSize: string;
  companyWebsite: string;
  companyEmail: string;
  companyPhoneNumber: string;
  source: string;
  sourceLink: string;
  dateAdded: string;
};

interface ProjectData {
  job_title?: string;
  job_description?: string;
  location?: string;
  experience_level?: string;
  required_skills?: string;
  deadline?: string;
  company_name?: string;
  employee_size?: string;
  company_website?: string;
  company_email?: string;
  company_phone_number?: string;
  source?: string;
  source_link?: string;
  date_added: string;
}

type Props = {
  className: string;
};

const TablesWidget15: FC<Props> = ({ className }) => {
  const [selectedProjects, setSelectedProjects] = useState<number[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/jobs/");
        console.log("Fetched data:", response.data);

        const mappedProjects = response.data.map((item: any) => ({
          id: item.id,
          jobTitle: item.job_title,
          location: item.location,
          jobDescription: item.job_description,
          experienceLevel: item.experience_level,
          requiredSkills: item.required_skills,
          deadline: item.deadline,
          companyName: item.company_name,
          employeeSize: item.employee_size,
          companyWebsite: item.company_website,
          companyEmail: item.company_email,
          companyPhoneNumber: item.company_phone_number,
          source: item.source,
          sourceLink: item.source_link,
          dateAdded: new Date().toISOString().split("T")[0],
        }));
        setProjects(mappedProjects);
        setFilteredProjects(mappedProjects); // Set filtered projects to initial full list
      } catch (error) {
        console.error("Error fetching projects data:", error);
        setError("Failed to fetch projects data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm === "") {
        setFilteredProjects(projects);
      } else {
        const filtered = projects.filter((project) =>
          project.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProjects(filtered);
      }
    }, 300); // Debounce time in milliseconds

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, projects]);

  const handleAddProject = () => {
    navigate("/add-project");
  };

  const handleProjectDetails = (projectIndex: number) => {
    const selectedProject = filteredProjects[projectIndex];
    navigate("/project-details", {
      state: { details: selectedProject },
    });
  };

  const handleProjectSelect = (index: number) => {
    setSelectedProjects((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index]
    );
  };

  const handleConfirmDelete = async () => {
    try {
      const deleteIds = selectedProjects.map(
        (index) => filteredProjects[index].id
      );

      await Promise.all(
        deleteIds.map(async (job_id) => {
          const response = await axios.delete(
            `http://127.0.0.1:8000/api/delete_job/${job_id}/`
          );
          if (response.status !== 200) {
            throw new Error(`Failed to delete project with ID ${job_id}`);
          }
        })
      );

      // Update frontend state after deletion
      setProjects((prevProjects) =>
        prevProjects.filter((project) => !deleteIds.includes(project.id))
      );
      setSelectedProjects([]);
      setFilteredProjects((prevFilteredProjects) =>
        prevFilteredProjects.filter(
          (project) => !deleteIds.includes(project.id)
        )
      );

      // Inform backend to update its database (optional)
      const updateResponse = await axios.post("/api/updateDatabase/", {
        deletedIds: deleteIds,
      });

      if (updateResponse.status !== 200) {
        throw new Error("Failed to update database after deletions");
      }

      // Success notification
      toast.success("Projects deleted successfully");
    } catch (error) {
      console.error("Error deleting projects:", error);
      // Error notification
      toast.error("Failed to delete projects. Please try again.");
    }
  };

  const isValidURL = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const isValidEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateAndFormatEmails = (emails: string): string => {
    return emails
      .split(",")
      .map((email) => email.trim())
      .filter((email) => isValidEmail(email))
      .join(",");
  };

  const validateAndFormatURLs = (urls: string): string => {
    return urls
      .split(",")
      .map((url) => url.trim())
      .filter((url) => isValidURL(url))
      .join(",");
  };

  const handleConfirmDuplicate = async () => {
    try {
      const newProjectsPromises = selectedProjects.map(
        async (index: number) => {
          const originalProject = filteredProjects[index] as Project;

          const projectData: ProjectData = {
            date_added: new Date().toISOString().split("T")[0],
          };

          if (originalProject.jobTitle)
            projectData.job_title = originalProject.jobTitle;
          if (originalProject.jobDescription)
            projectData.job_description = originalProject.jobDescription;
          if (originalProject.location)
            projectData.location = originalProject.location;
          if (originalProject.experienceLevel)
            projectData.experience_level = originalProject.experienceLevel;
          if (originalProject.requiredSkills)
            projectData.required_skills = originalProject.requiredSkills;
          if (originalProject.deadline)
            projectData.deadline = originalProject.deadline;
          if (originalProject.companyName)
            projectData.company_name = originalProject.companyName;
          if (originalProject.employeeSize)
            projectData.employee_size = originalProject.employeeSize;
          if (originalProject.companyPhoneNumber)
            projectData.company_phone_number =
              originalProject.companyPhoneNumber;
          if (originalProject.source)
            projectData.source = originalProject.source;
          if (originalProject.sourceLink)
            projectData.source_link = originalProject.sourceLink;

          const companyWebsites = validateAndFormatURLs(
            originalProject.companyWebsite
          );
          if (companyWebsites) {
            projectData.company_website = companyWebsites;
          }

          const companyEmails = validateAndFormatEmails(
            originalProject.companyEmail
          );
          if (companyEmails) {
            projectData.company_email = companyEmails;
          }

          console.log("Sending projectData to server:", projectData);

          const response = await axios.post(
            `http://127.0.0.1:8000/api/duplicate_job/${originalProject.id}/`,
            projectData
          );

          if (response.status === 201) {
            return response.data;
          } else {
            throw new Error("Failed to duplicate project.");
          }
        }
      );

      const newProjectsData = await Promise.all(newProjectsPromises);

      setProjects((prevProjects: Project[]) => {
        const updatedProjects = [...prevProjects];

        selectedProjects.forEach((selectedIndex: number, i: number) => {
          const originalProject = filteredProjects[selectedIndex] as Project;
          const responseData = newProjectsData[i] as Project;

          const newProject: Project = {
            id: responseData.id.toString(),
            jobTitle: originalProject.jobTitle,
            location: originalProject.location,
            jobDescription: originalProject.jobDescription,
            experienceLevel: originalProject.experienceLevel,
            requiredSkills: originalProject.requiredSkills,
            deadline: originalProject.deadline,
            companyName: originalProject.companyName,
            employeeSize: originalProject.employeeSize,
            companyWebsite: originalProject.companyWebsite,
            companyEmail: originalProject.companyEmail,
            companyPhoneNumber: originalProject.companyPhoneNumber,
            source: originalProject.source,
            sourceLink: originalProject.sourceLink,
            dateAdded: new Date().toISOString().split("T")[0],
          };

          updatedProjects.splice(selectedIndex + 1, 0, newProject);
        });

        return updatedProjects;
      });

      setFilteredProjects((prevFilteredProjects: Project[]) => {
        const updatedProjects = [...prevFilteredProjects];

        selectedProjects.forEach((selectedIndex: number, i: number) => {
          const originalProject = filteredProjects[selectedIndex] as Project;
          const responseData = newProjectsData[i] as Project;

          const newProject: Project = {
            id: responseData.id.toString(),
            jobTitle: originalProject.jobTitle,
            location: originalProject.location,
            jobDescription: originalProject.jobDescription,
            experienceLevel: originalProject.experienceLevel,
            requiredSkills: originalProject.requiredSkills,
            deadline: originalProject.deadline,
            companyName: originalProject.companyName,
            employeeSize: originalProject.employeeSize,
            companyWebsite: originalProject.companyWebsite,
            companyEmail: originalProject.companyEmail,
            companyPhoneNumber: originalProject.companyPhoneNumber,
            source: originalProject.source,
            sourceLink: originalProject.sourceLink,
            dateAdded: new Date().toISOString().split("T")[0],
          };

          updatedProjects.splice(selectedIndex + 1, 0, newProject);
        });

        return updatedProjects;
      });

      setSelectedProjects([]);

      // Success notification
      toast.success("Projects duplicated successfully");
    } catch (error) {
      console.error("Error duplicating projects:", error);
      // Error notification
      toast.error("Failed to duplicate projects. Please try again.");
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={`card ${className}`}>
      <div className="card-header border-0 pt-5">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="position-relative" style={{ maxWidth: "300px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
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
              confirmMessage="Are you sure you want to Delete this Project(s)?"
              handleConfirmDelete={handleConfirmDelete}
              handleConfirmDuplicate={handleConfirmDuplicate}
            />
            <button
              className="btn btn-primary"
              style={{ whiteSpace: "nowrap" }}
              onClick={handleAddProject}
            >
              Add Job
            </button>
          </div>
        </div>
      </div>
      <div className="card-body py-3">
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
        ) : filteredProjects.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center">
            <p>No projects found.</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
              <thead>
                <tr className="fw-bold ">
                  <th className="w-25px">
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="1"
                        data-kt-check="true"
                        data-kt-check-target=".widget-13-check"
                      />
                    </div>
                  </th>
                  <th className="min-w-150px w-400px">Job Title</th>
                  <th className="min-w-120px w-200px">Location</th>
                  <th className="min-w-120px w-150px">Company</th>
                  <th className="min-w-120px ">Deadline</th>
                  <th className="min-w-120px text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input widget-13-check"
                          type="checkbox"
                          checked={selectedProjects.includes(index)}
                          onChange={() => handleProjectSelect(index)}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="fs-6">{project.jobTitle}</span>
                    </td>
                    <td>
                      <span className=" d-block fs-6">{project.location}</span>
                    </td>
                    <td>
                      <span className="d-block fs-6">
                        {project.companyName}
                      </span>
                    </td>
                    <td>
                      <span className="d-block fs-6">{project.deadline}</span>
                    </td>
                    <td className="text-end">
                      <button
                        className="btn btn-bg-light btn-active-color-primary btn-sm text-nowrap"
                        onClick={() => handleProjectDetails(index)}
                      >
                        View <i className="fa fa-eye ms-2"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export { TablesWidget15 };

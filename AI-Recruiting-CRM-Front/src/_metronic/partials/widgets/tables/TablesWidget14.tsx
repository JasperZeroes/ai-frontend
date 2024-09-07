import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BulkActionDropdown from "../popups/BulkActionDropdown";
import StatusDropdown from "../popups/StatusDropdown";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "react-responsive";

type Candidate = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  title: string;
  dateAdded: string;
  skills: string;
  experience: string;
  sourceLink: string;
  company: string;
  companySite: string;
  location: string;
  linkedinSalesNavigator: string;
};

type Props = {
  className: string;
};

const TablesWidget14: FC<Props> = ({ className }) => {
  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/leads/");
        console.log("Fetched data:", response.data);

        const mappedCandidates = response.data.map((item: any) => ({
          id: item.id.toString(),
          name: item.name,
          firstName: item.first_name,
          lastName: item.last_name,
          phone: item.phone_number,
          email: item.email,
          title: item.title,
          dateAdded: new Date().toISOString().split("T")[0],
          skills: item.skills,
          experience: item.experience,
          sourceLink: item.linkedin,
          company: item.company_name,
          companySite: item.company_website,
          location: item.location,
          linkedinSalesNavigator: item.linkedin_sales_navigator,
        }));
        setCandidates(mappedCandidates);
        setFilteredCandidates(mappedCandidates); // Set filtered candidates to initial full list
      } catch (error) {
        console.error("Error fetching candidates data:", error);
        setError("Failed to fetch candidates data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm === "") {
        setFilteredCandidates(candidates);
      } else {
        const filtered = candidates.filter((candidate) =>
          `${candidate.firstName} ${candidate.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );
        setFilteredCandidates(filtered);
      }
    }, 300); // Debounce time in milliseconds

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, candidates]);

  const handleAddCandidate = () => {
    navigate("/add-candidate");
  };

  const handleUserDetails = (candidateIndex: number) => {
    const selectedCandidate = filteredCandidates[candidateIndex];
    navigate("/user-details", {
      state: { details: selectedCandidate },
    });
  };

  const handleCandidateSelect = (index: number) => {
    setSelectedCandidates((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index]
    );
  };

  const handleConfirmDelete = async () => {
    try {
      const deleteIds = selectedCandidates.map(
        (index) => filteredCandidates[index].id
      );

      await Promise.all(
        deleteIds.map(async (id) => {
          const response = await axios.delete(
            `http://127.0.0.1:8000/api/Leads/${id}/`
          );
          if (response.status !== 200) {
            throw new Error(`Failed to delete candidate with ID ${id}`);
          }
        })
      );

      setCandidates((prevCandidates) =>
        prevCandidates.filter((candidate) => !deleteIds.includes(candidate.id))
      );
      setSelectedCandidates([]);
      setFilteredCandidates((prevFilteredCandidates) =>
        prevFilteredCandidates.filter(
          (candidate) => !deleteIds.includes(candidate.id)
        )
      );

      const updateResponse = await axios.post(
        "http://127.0.0.1:8000/api/updateDatabase/",
        {
          deletedIds: deleteIds,
        }
      );

      if (updateResponse.status !== 200) {
        throw new Error("Failed to update database after deletions");
      }

      toast.success("Candidates deleted successfully");
    } catch (error) {
      console.error("Error deleting candidates:", error);
      toast.error("Failed to delete candidates");
    }
  };

  const handleConfirmDuplicate = async () => {
    try {
      const newCandidatesPromises = selectedCandidates.map(async (index) => {
        const originalCandidate = filteredCandidates[index];

        const response = await axios.post(
          `http://127.0.0.1:8000/api/create_Lead/`,
          {
            id: originalCandidate.id,
          }
        );

        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error("Failed to duplicate candidate.");
        }
      });

      const newCandidatesData = await Promise.all(newCandidatesPromises);

      setCandidates((prevCandidates) => {
        const updatedCandidates = [...prevCandidates];

        selectedCandidates.forEach((selectedIndex, i) => {
          const originalCandidate = filteredCandidates[selectedIndex];

          const responseData = newCandidatesData[i];

          const newCandidate = {
            id: responseData.id.toString(),
            name: originalCandidate.name,
            firstName: originalCandidate.firstName,
            lastName: originalCandidate.lastName,
            phone: originalCandidate.phone,
            email: originalCandidate.email,
            title: originalCandidate.title,
            dateAdded: new Date().toISOString().split("T")[0],
            skills: originalCandidate.skills,
            experience: originalCandidate.experience,
            sourceLink: originalCandidate.sourceLink,
            company: originalCandidate.company,
            companySite: originalCandidate.companySite,
            location: originalCandidate.location,
            linkedinSalesNavigator: originalCandidate.linkedinSalesNavigator,
          };

          updatedCandidates.splice(selectedIndex + 1, 0, newCandidate);
        });

        return updatedCandidates;
      });

      setFilteredCandidates((prevFilteredCandidates) => {
        const updatedCandidates = [...prevFilteredCandidates];

        selectedCandidates.forEach((selectedIndex, i) => {
          const originalCandidate = filteredCandidates[selectedIndex];

          const responseData = newCandidatesData[i];

          const newCandidate = {
            id: responseData.id.toString(),
            name: originalCandidate.name,
            firstName: originalCandidate.firstName,
            lastName: originalCandidate.lastName,
            phone: originalCandidate.phone,
            email: originalCandidate.email,
            title: originalCandidate.title,
            dateAdded: new Date().toISOString().split("T")[0],
            skills: originalCandidate.skills,
            experience: originalCandidate.experience,
            sourceLink: originalCandidate.sourceLink,
            company: originalCandidate.company,
            companySite: originalCandidate.companySite,
            location: originalCandidate.location,
            linkedinSalesNavigator: originalCandidate.linkedinSalesNavigator,
          };

          updatedCandidates.splice(selectedIndex + 1, 0, newCandidate);
        });

        return updatedCandidates;
      });

      setSelectedCandidates([]);
      toast.success("Candidates duplicated successfully");
    } catch (error) {
      console.error("Error duplicating candidates:", error);
      toast.error("Failed to duplicate candidates");
    }
  };

  const handleUpdateLeads = async () => {
    try {
      console.log("Starting candidate update process...");

      // Making a POST request to the API endpoint
      const response = await axios.post(
        'http://127.0.0.1:8000/api/enrich_leads/',  // Endpoint URL
        {},  // Empty body as per your JS example
        {
          headers: {
            'Content-Type': 'application/json'  // Content type header
          }
        }
      );

      if (response.status === 200) {
        console.log("Response received successfully:", response.data);
        toast.success(response.data.message || "Candidates updated successfully");
      } else {
        throw new Error(`Failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating candidates:", error);
      toast.error("Failed to update candidates");
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
              confirmMessage="Are you sure you want to Delete this Candidate(s)?"
              handleConfirmDelete={handleConfirmDelete}
              handleConfirmDuplicate={handleConfirmDuplicate}
            />
            {isSmallScreen ? (
              <>
                <button
                  className="btn btn-primary"
                  onClick={handleAddCandidate}
                >
                  <i className="bi bi-plus-square-fill"></i>
                </button>
                <button
                  className="btn btn-warning ms-3"                  
                >
                  <i className="bi bi-arrow-clockwise"></i>
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-primary"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={handleAddCandidate}
                >
                  Add Candidate
                </button>
                <button
                  className="btn btn-warning ms-3"
                  style={{ whiteSpace: "nowrap" }}
                  onClick={handleUpdateLeads}
                >
                  Update Candidate
                </button>
              </>
            )}
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
          <div className="text-danger text-center">{error}</div>
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
                  <th className="min-w-150px">Candidate</th>
                  <th className="min-w-120px w-150px ">Phone</th>
                  <th className="min-w-120px ">Email</th>
                  <th className="min-w-120px">Job Title</th>
                  <th className="min-w-120px text-nowrap">Date Added</th>
                  <th className="min-w-100px text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCandidates.map((candidate, index) => (
                  <tr key={index}>
                    <td>
                      <div className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input widget-13-check"
                          type="checkbox"
                          checked={selectedCandidates.includes(index)}
                          onChange={() => handleCandidateSelect(index)}
                        />
                      </div>
                    </td>
                    <td className="max-w-150px text-break fs-6">{`${candidate.firstName} ${candidate.lastName}`}</td>
                    <td className="max-w-120px text-break fs-6">
                      {candidate.phone}
                    </td>
                    <td className="max-w-100px text-break fs-6">
                      {candidate.email}
                    </td>
                    <td className="max-w-120px text-break fs-6">
                      {candidate.title}
                    </td>
                    <td className="max-w-120px text-nowrap fs-6">
                      {candidate.dateAdded}
                    </td>
                    <td className="fs-6 text-end">
                      <button
                        className="btn btn-bg-light btn-active-color-primary btn-sm text-nowrap"
                        onClick={() => handleUserDetails(index)}
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

export { TablesWidget14 };

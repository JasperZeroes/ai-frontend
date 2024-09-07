import React, { useState } from "react";
import { Table, Pagination, Form, Button } from "react-bootstrap";
import StatusDropdown from "../popups/StatusDropdown";
import BulkActionDropdown from "../popups/BulkActionDropdown";

type EmailTableProps = {
  className: string;
  filterStatus: string;
};

const recordsPerPage = 10;
const totalRecords = 30;

const data = Array.from({ length: totalRecords }, (_, index) => ({
  recipient: "Max Smith",
  email: `john***${index}@example.com`,
  status:
    index % 3 === 0 ? "Pending" : index % 3 === 1 ? "Approved" : "Rejected",
  score: "7.5/10",
}));

const renderStatusButton = (status) => {
  if (status === "Pending") {
    return <Button variant="warning btn-sm">{status}</Button>;
  } else if (status === "Approved") {
    return <Button variant="success btn-sm">{status}</Button>;
  } else {
    return <Button variant="danger btn-sm">{status}</Button>;
  }
};

const renderScoreButton = (score) => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="text-primary d-flex align-items-center"
    >
      {score} <i className="bi bi-box-arrow-up-right ms-3"></i>
    </Button>
  );
};

const EmailTable: React.FC<EmailTableProps> = ({ filterStatus, className }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return items;
  };

  const filteredData = data.filter((item) => item.status === filterStatus);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  return (
    <div className={`card ${className}`}>
      <div className="card-header border-0 pt-5 mb-10">
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
            <BulkActionDropdown />
            <button
              className="btn btn-primary"
              style={{ whiteSpace: "nowrap" }}
            >
              New Mail
            </button>
          </div>
        </div>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>
              <Form.Check />
            </th>
            <th className="fs-6 text-uppercase">Recipient</th>
            <th className="fs-6 text-uppercase">Subject</th>
            <th className="fs-6 text-uppercase">Body</th>
            <th className="fs-6 text-uppercase">Status</th>
            <th className="fs-6 text-uppercase">Match Score</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((row, index) => (
            <tr key={index}>
              <td>
                <Form.Check />
              </td>
              <td className="text-truncate fs-6">
                <div>{row.recipient}</div>
                <div>{row.email}</div>
              </td>

              <td className="text-truncate fs-6">Job interview</td>
              <td className="text-truncate fs-6">
                We are delighted to share this job offer that...
              </td>
              <td className="fs-6 text-truncate">
                {renderStatusButton(row.status)}
              </td>
              <td className="fs-6 text-truncate">
                {renderScoreButton(row.score)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <Pagination>{renderPaginationItems()}</Pagination>
        <i className="bi bi-chevron-right ml-2"></i>
      </div>
    </div>
  );
};

export const ApprovedEmails = () => {
  return <EmailTable filterStatus="Approved" />;
};

export const PendingEmails = () => {
  return <EmailTable filterStatus="Pending" />;
};

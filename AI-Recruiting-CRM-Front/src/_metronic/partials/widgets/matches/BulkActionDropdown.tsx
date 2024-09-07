import React, { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

type BulkActionDropdownProps = {
  confirmMessage: string;
  handleConfirmDelete: () => void;
  handleConfirmDuplicate: () => void;
};

const BulkActionDropdown: React.FC<BulkActionDropdownProps> = ({
  confirmMessage,
  handleConfirmDelete,
  handleConfirmDuplicate,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setShowPopup(!showPopup);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    handleConfirmDelete();
    setShowModal(false);
  };

  const handleOptionSelect = (value: string) => {
    if (value === "delete") {
      setShowModal(true);
      setShowPopup(false);
    } else if (value === "duplicate") {
      handleConfirmDuplicate();
      setShowPopup(false);
    } else {
      setShowPopup(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button
        className="btn btn-outline text-nowrap me-5 ms-5"
        type="button"
        onClick={handleDropdownClick}
      >
        Bulk Actions
        <i className="fa fa-chevron-down ms-5"></i>
      </button>
      {showPopup && (
        <div
          className="dropdown-menu show"
          style={{
            position: "absolute",
            top: "100%",
            left: "8%",
            zIndex: 1000,
            display: "block",
            marginTop: "0.125rem",
            minWidth: "160px",
            backgroundColor: "#fff",
          }}
        >
          <button
            className="dropdown-item text-danger"
            onClick={() => handleOptionSelect("delete")}
            style={{ borderBottom: "1px dashed" }}
          >
            Delete
          </button>
          <button
            className="dropdown-item text-primary"
            onClick={() => handleOptionSelect("duplicate")}
          >
            Deactivate
          </button>
        </div>
      )}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body className="text-center">
          <p>{confirmMessage}</p>
          <div className="d-flex justify-content-around">
            <Button
              variant="secondary"
              onClick={handleCloseModal}
              style={{ width: "200px" }}
            >
              Cancel
            </Button>
            <Button
              variant="danger"
              onClick={handleDelete}
              style={{ width: "200px" }}
            >
              Delete
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BulkActionDropdown;

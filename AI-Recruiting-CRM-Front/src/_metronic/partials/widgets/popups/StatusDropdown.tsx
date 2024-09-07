import React, { useState, useRef, useEffect } from "react";

const StatusDropdown: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = () => {
    setShowPopup(!showPopup);
  };

  const handleOptionSelect = (value: string) => {
    setSelectedStatus(value);
    setShowPopup(false);
    console.log(`Status selected: ${value}`);
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
        className="btn btn-outline"
        type="button"
        onClick={handleDropdownClick}
      >
        {selectedStatus
          ? selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)
          : "Status"}
        <i className="fa fa-chevron-down ms-5"></i>
      </button>
      {showPopup && (
        <div
          className="dropdown-menu show"
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: 1000,
            display: "block",
            marginTop: "0.125rem",
            minWidth: "120px",
            backgroundColor: "#fff",
          }}
        >
          <button
            className="dropdown-item text-primary"
            onClick={() => handleOptionSelect("active")}
            style={{ borderBottom: "1px dashed " }}
          >
            Active
          </button>
          <button
            className="dropdown-item text-danger"
            onClick={() => handleOptionSelect("inactive")}
          >
            Inactive
          </button>
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;

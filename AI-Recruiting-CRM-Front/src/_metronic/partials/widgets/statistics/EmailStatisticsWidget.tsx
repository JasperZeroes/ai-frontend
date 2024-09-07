import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const EmailStatisticsWidget = () => {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [2800, 3400, 3000, 3600, 3100, 3500, 3274.94],
        borderColor: "#4e73df",
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="card">
      <div className="card-header border-0 pt-5">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="d-flex flex-column">
              <span className="fw-bolder fs-1">3,274.94</span>
              <span className="text-muted">Emails sent</span>
            </div>
            <span
              className="badge badge-light-success fs-base ms-2"
              style={{ height: "20px", marginTop: "5px" }}
            >
              ▲ 9.2%
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
        <div className="d-flex justify-content-between my-4">
          <button className="btn btn-sm btn-light-primary active">1d</button>
          <button className="btn btn-sm btn-light">5d</button>
          <button className="btn btn-sm btn-light">1m</button>
          <button className="btn btn-sm btn-light">6m</button>
          <button className="btn btn-sm btn-light">1y</button>
        </div>
        <div className="progress-stats">
          <div className="d-flex justify-content-between mb-2">
            <span>Open rate</span>
            <span className="text-success fw-bolder">▲ 78%</span>
          </div>
          <hr
            className="broken-line"
            style={{ border: "1px dashed #ccc", width: "100%" }} // Inline style for broken line
          />
          <div className="d-flex justify-content-between mb-2">
            <span>Reply rate</span>
            <span className="text-success fw-bolder">▲ 58%</span>
          </div>
          <hr
            className="broken-line"
            style={{ border: "1px dashed #ccc", width: "100%" }} // Inline style for broken line
          />
          <div className="d-flex justify-content-between mb-2">
            <span>Conversion rate</span>
            <span className="text-success fw-bolder">▲ 48%</span>
          </div>
          <hr
            className="broken-line"
            style={{ border: "1px dashed #ccc", width: "100%" }} // Inline style for broken line
          />
          <div className="d-flex justify-content-between">
            <span>Outstanding</span>
            <span className="fw-bolder">520</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailStatisticsWidget;

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Feb", Accepted: 30, Declined: 70 },
  { name: "Mar", Accepted: 40, Declined: 60 },
  { name: "Apr", Accepted: 50, Declined: 70 },
  { name: "May", Accepted: 45, Declined: 75 },
  { name: "Jun", Accepted: 50, Declined: 60 },
  { name: "Jul", Accepted: 55, Declined: 85 },
];

const COLORS = ["#3498db", "#e74c3c"];

type Props = {
  className?: string;
  title: string;
  description: string;
};

const StatisticsWidget8: React.FC<Props> = ({
  className = "",
  title,
  description,
}) => {
  return (
    <div
      className={`card ${className}`}
      style={{ width: "100%", height: "490px" }}
    >
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <div className="d-flex align-items-center">
            <span className="card-label font-weight-bolder fs-1">{title}</span>
          </div>
          <span className="mt-1 fw-bold">{description}</span>
        </h3>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-around mt-5 w-100">
          <div className="text-center">
            <h4 className="fs-1 mb-1">36,899</h4>
            <span className="text-success">Matches Made</span>
          </div>
          <div className="text-center">
            <h4 className="fs-1 mb-1">72</h4>
            <span className="text-primary">Accepted</span>
          </div>
          <div className="text-center">
            <h4 className="fs-1 mb-1">291</h4>
            <span className="text-danger">Declined</span>
          </div>
          <div className="text-center">
            <h4 className="fs-1 mb-1">12min</h4>
            <span className="text-primary">Avg Match/hr</span>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center w-100">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="Accepted"
                fill={COLORS[0]}
                radius={[10, 10, 0, 0]}
                barSize={15} // Adjust this value for thinner bars
              />
              <Bar
                dataKey="Declined"
                fill={COLORS[1]}
                radius={[10, 10, 0, 0]}
                barSize={15} // Adjust this value for thinner bars
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export { StatisticsWidget8 };

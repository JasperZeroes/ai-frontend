import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Total Freelancers', value: 7660, color: '#00C49F' },
    { name: 'Total Projects', value: 2820, color: '#FFBB28' },
    { name: 'Deactivated Projects', value: 2820, color: '#FF8042' },
    { name: 'New Freelancers Today', value: 57, color: '#0088FE' },
    { name: 'New Projects Today', value: 57, color: '#00C49F' },
];

const COLORS = data.map(entry => entry.color);

type Props = {
  className: string;
  svgIcon: string;
  color: string;
  iconColor: string;
  title: string;
  description: string;
  titleColor: string;
  descriptionColor: string;
}

const StatisticsWidget7: React.FC<Props> = ({
    className,
    svgIcon,
    color,
    iconColor,
    title,
    description,
    titleColor,
    descriptionColor
}) => {
    return (
        <div className={`card ${className}`} style={{ backgroundColor: '#d90166', width: '420px' }}>
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <div className="d-flex align-items-center">
                      <span className="card-label font-weight-bolder fs-1">{title}</span>
                      <span className="badge badge-light-success fs-base ms-2">+2.2%</span>
                    </div>
                    <span className="mt-1 fw-bold">{description}</span>
                </h3>                
            </div>
            <div className="card-body">
                <div className="d-flex align-items-center gap-5">
                    <div className="d-flex flex-column align-items-center w-50">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="w-50">
                        {data.map((entry, index) => (
                            <div className="d-flex align-items-center mb-2" key={index}>
                                <span className="bullet bullet-bar" style={{ backgroundColor: entry.color, width: '30px', height: '8px' }}></span>
                                <div className="d-flex flex-column ms-2">
                                    <span className="text-white fs-6" style={{ whiteSpace: 'nowrap' }}>{entry.name}</span>
                                    <span className="fs-6">{entry.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {StatisticsWidget7};

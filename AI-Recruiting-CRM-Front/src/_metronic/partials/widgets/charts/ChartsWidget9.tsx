import React, { useEffect, useRef, FC } from 'react';
import ApexCharts, { ApexOptions } from 'apexcharts';
import { KTIcon } from '../../../helpers';
import { Dropdown1 } from '../../content/dropdown/Dropdown1';
import { getCSS, getCSSVariableValue } from '../../../assets/ts/_utils';
import { useThemeMode } from '../../layout/theme-mode/ThemeModeProvider';

type Props = {
  className: string;
};

const ChartsWidget9: FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();

  useEffect(() => {
    const chart = refreshChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode]);

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const height = parseInt(getCSS(chartRef.current, 'height'));

    const chart = new ApexCharts(chartRef.current, getChartOptions(height));
    if (chart) {
      chart.render();
    }

    return chart;
  };

  return (
    <div className={`card ${className}`} style={{ width: '100%' }}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5 w-100'>
        {/* begin::Title */}
        <h3 className='card-title w-100'>
          <div className='d-flex justify-content-between align-items-center w-100'>
            <div className='d-flex flex-column'>
              <span className='card-label fw-bold fs-3 mb-1'>Freelancers</span>
              <span className='text-muted fw-bold fs-7'>1,046 registered today</span>
            </div>
            <div className='d-flex align-items-center'>
              <span className='text-muted fw-semibold fs-7'>{new Date().toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })}</span>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary ms-2'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTIcon iconName='calendar' className='fs-2' />
              </button>
            </div>
          </div>
        </h3>
        {/* end::Title */}

        {/* begin::Toolbar */}
        <Dropdown1 />
        {/* end::Toolbar */}
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className='card-body'>
        {/* begin::Chart */}
        <div ref={chartRef} style={{ height: '200px', width: '100%' }} />
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ChartsWidget9 };

function getChartOptions(height: number): ApexOptions {
  const labelColor = getCSSVariableValue('--bs-gray-500');
  const borderColor = getCSSVariableValue('--bs-gray-200');
  const baseColor = getCSSVariableValue('--bs-blue-500') || '#007bff'; // Fallback to a default blue color

  return {
    series: [
      {
        name: 'Freelancers',
        data: [60, 90, 40, 80, 45, 95, 55, 70, 50, 85],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: height,
      width: '100%',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 2,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      min: 30,
      max: 100,
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: baseColor,
            opacity: 0.7,
          },
          {
            offset: 100,
            color: baseColor,
            opacity: 0.2,
          },
        ],
      },
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return val + ' freelancers';
        },
      },
    },
    colors: [baseColor],
  };
}

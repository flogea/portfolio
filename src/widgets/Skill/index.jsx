import React from 'react';
import { Chart } from 'react-google-charts';

import './index.scss';

function Skill({ percent, title }) {
  const options = {
    legend: 'none',
    pieSliceText: 'none',
    tooltip: { trigger: 'none' },
    pieHole: 0.7,
    is3D: false,
    slices: {
      0: { color: '#6cc1f0' },
      1: { color: 'transparent' },
    },
  };

  const data = [
    ['Task', 'Hours per Day'],
    ['', +percent],
    ['', 100 - +percent],
  ];

  return (
    <div className="skill">
      <h3>
        {title} — {percent}
      </h3>
      <Chart chartType="PieChart" width="150px" height="150px" data={data} options={options} />
    </div>
  );
}

export default Skill;

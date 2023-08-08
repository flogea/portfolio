import React from 'react';

import './index.scss';

function RunningLine({ children }) {
  let text = '';

  for (let i = 0; i < 50; i++) {
    text += children + '    ';
  }

  return (
    <div className="marquee">
      <span>{text}</span>
    </div>
  );
}

export default RunningLine;

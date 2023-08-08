import React from 'react';

import './index.scss';

function Button({ children, url, disabled }) {
  return (
    <div>
      <button className="Button" disabled={disabled}>
        <a href={url}>{children}</a>
      </button>
    </div>
  );
}

export default Button;

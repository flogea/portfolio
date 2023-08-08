import React, { forwardRef } from 'react';

import './index.scss';

function Navbar({ onClick }) {
  return (
    <>
      <div className="mobile-nav">
        <h3>Logvinova</h3>
      </div>
      <div className="nav">
        <div className="leftPanel">
          <h3>Logvinova</h3>
        </div>
        <div className="rightPanel">
          <h5 onClick={() => onClick('project')}>Портфолио</h5>
          <h5 onClick={() => onClick('about')}>обо мне</h5>
          <h5 onClick={() => onClick('contact')}>контакты</h5>
        </div>
      </div>
    </>
  );
}

export default Navbar;

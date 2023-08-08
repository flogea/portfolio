import React from 'react';

import './index.scss';

import { Button } from '../../widgets';

import photoOfMe from '../../assets/image/me.jpg';

function Greeting() {
  return (
    <div>
      <div className="greeting">
        <div className="left">
          <div className="header">
            <h1 style={{ textIndent: '116px' }}>Логвинова</h1>
            <h1>Екатерина</h1>
          </div>
          <div className="text">
            <p>Привет! Я Катя и я — веб разработчик. Занимаюсь front-end разработкой на React.</p>
          </div>
          <div className="button">
            <Button>Смотреть портфолио</Button>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src={photoOfMe} alt="my photo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting;

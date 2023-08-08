import React from 'react';

import './index.scss';
import { RunningLine } from '../../widgets';

import phone from '../../assets/ico/phone.svg';
import email from '../../assets/ico/email.svg';
import tg from '../../assets/ico/telegram.svg';

function Contacts(props, ref) {
  return (
    <div className="contacts" ref={ref}>
      <RunningLine>Contacts</RunningLine>
      <h1 style={{ textAlign: 'center' }}>
        как <span>со мной</span> связаться?
      </h1>
      <div className="links">
        <div className="link">
          <img src={phone} alt="phone" name="phone" />
          <label htmlFor="phone">
            <a href="tel:+7(911)758-32-01">+7(911)758-32-01</a>
          </label>
        </div>
        <div className="link">
          <img src={email} alt="email" name="email" />
          <label htmlFor="email">
            <a href="mailto:katua.logvinova@gmail.com">katua.logvinova@gmail.com</a>
          </label>
        </div>
        <div className="link">
          <img src={tg} alt="telegram" name="telegram" />
          <label htmlFor="telegram">
            <a href={'http://' + 't.me/fuckatu'}>Написать в телеграм (предпочтительно)</a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(Contacts);

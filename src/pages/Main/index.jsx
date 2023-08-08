import React from 'react';
import { AboutMe, Contacts, Greeting, Projects } from '../../entities';

import './index.scss';
import { Navbar, ScrollToTopButton } from '../../widgets';

function Main() {
  const projectRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const contacttRef = React.useRef(null);

  const handleLinkClick = (data) => {
    let ref;
    if (data === 'project') {
      ref = projectRef;
    } else if (data === 'about') {
      ref = aboutRef;
    } else if (data === 'contact') {
      ref = contacttRef;
    }
    console.log(ref, typeof ref);

    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <ScrollToTopButton />
      <div className="wrap">
        <Navbar onClick={handleLinkClick} />
        <Greeting />
        <Projects ref={projectRef} />
        <AboutMe ref={aboutRef} />
        <Contacts ref={contacttRef} />
      </div>
    </div>
  );
}

export default Main;

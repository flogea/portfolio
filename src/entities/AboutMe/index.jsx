import React from 'react';
import { RunningLine } from '../../widgets';

import './index.scss';
import Skill from '../../widgets/Skill';

import me from '../../assets/Rectangle.png';

const skills = [
  { name: 'React', percent: '75' },
  { name: 'TypeScript', percent: '20' },
  { name: 'Redux-Toolkit', percent: '60' },
  { name: 'MobX', percent: '40' },
  { name: 'SASS (SCSS)', percent: '90' },
  { name: 'Express', percent: '60' },
  { name: 'MongoDB', percent: '60' },
];

function AboutMe(props, ref) {
  return (
    <div className="aboutMe" ref={ref}>
      <RunningLine>About me</RunningLine>
      <h1 className="inverted">Обо мне</h1>
      <div className="about">
        <p>
          Меня зовут Катя — я начинающий веб разработчик. Учусь на 4ом курсе СПбГУТ им.
          Бонч-Бруевича на направлении "Программная инженерия"
        </p>
        <div className="imageBlock">
          <img src={me} alt="" />
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <Skill title={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(AboutMe);

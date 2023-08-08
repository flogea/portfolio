import React, { forwardRef } from 'react';

import './index.scss';

import projectData from '../../projectsData';
import { ProjectBlock, RunningLine } from '../../widgets';

function Projects(props, ref) {
  return (
    <div className="projects" ref={ref}>
      <RunningLine>Project</RunningLine>
      <h1>Проекты</h1>
      <div className="projectList">
        {projectData.map((project, index) => (
          <ProjectBlock {...project} />
        ))}
      </div>
    </div>
  );
}

export default React.forwardRef(Projects);

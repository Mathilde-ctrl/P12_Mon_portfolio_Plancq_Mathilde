import Nav from '../../Components/nav/nav'
import Projet from '../../Components/projet/projet'
import ProjectData from '../../projets.json';

import { useState } from 'react';

function Projets(){

  const [currentProjectId, setCurrentProjectId] = useState(1);
  const totalProjects = ProjectData.projects.length

  const project = ProjectData.projects.find((project) => project.id === currentProjectId);

  const handlePrevClick = () => {
    if (currentProjectId === 1) {
      setCurrentProjectId(totalProjects);
    } else {
      setCurrentProjectId(currentProjectId - 1);
    }
  };

  const handleNextClick = () => {
    if (currentProjectId === totalProjects) {
      setCurrentProjectId(1);
    } else {
      setCurrentProjectId(currentProjectId + 1);
    }
  };

  return(
    <div className='projetPage'>
      <Nav />
      {project && (
        <Projet
          project={project}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      )}
    </div>
  )
}

export default Projets
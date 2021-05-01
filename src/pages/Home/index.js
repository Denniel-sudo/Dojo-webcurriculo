import './styles.css';

import { useContext, useState } from 'react';
import CentralBox from '../../components/CentralBox';
import ExperienceBox from '../../components/ExperienceBox';
import MenuBar from '../../components/MenuBar'
import ProjectBox from '../../components/ProjectBox';
import { UserContext } from '../../contexts/UserContext';

export default function Home({history}){
  const [box] = useState([
    {
      name: 'Product Design'
    },
    {
      name: 'Front-end Develop'
    },
    {
      name:'Back-end Develop'
    }]);

  const {name} = useContext(UserContext);
  
  const handleProjectBox = () => {
    history.push({
      pathname: 'project'
    });
  }

  return(
    <div className="home">
      <MenuBar/>
      <CentralBox name={name}/>
      <div className="experienceProject">
        <ExperienceBox/>
        <div className="experienceAside">
          <h2>Front-end developer with experience in React, <br/> 
          NodeJS, and relational databases.</h2>
          <div className="listProjects">
            {box.map((box) => {
              return(
                <ProjectBox onClick={handleProjectBox}name={box.name}/>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
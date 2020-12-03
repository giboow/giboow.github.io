import React from 'react'
import ScoreStar from '../../score/star'
import Separator from "./utils/separator";


const Skills =() => {
  const skills = [
    {'name': 'PHP', 'score': 4},
    {'name': 'Java/Spring Boot', 'score': 4},
    {'name': 'Android', 'score': 3},
    {'name': 'HTML5/CSS3', 'score': 4},
    {'name': 'Sass', 'score': 4},
    {'name': 'Javascript', 'score': 5},
    {'name': 'NodeJS', 'score': 4},
    {'name': 'Angular', 'score': 5},
    {'name': 'MySQL/PostgreSQL', 'score': 4},
    {'name': 'MongoDB', 'score': 5},
    {'name': 'Redis', 'score': 3},
    {'name': 'Bash/Scripts', 'score': 3},
    {'name': 'Docker', 'score': 3},
    {'name': 'GIT', 'score': 4},
    {'name': 'Jenkins', 'score': 3},
    {'name': 'SysAdmin', 'score': 3},
  ];

  const chunkSize = Math.ceil(skills.length / 4);
  const groupSkills = [];
  while (skills.length > 0) {
    groupSkills.push(skills.splice(0, chunkSize));
  }
  return (
    <section className="section">
      <div className="container">
        <Separator title="Compétences"/>
        <div className="columns is-mobile is-multiline">
          {groupSkills.map((skills, key) => (
            <div key={key} className="column has-text-centered is-6-mobile">
              <ul>
                {skills.map((item, key) => (
                  <li key={key}>
                    {item.name}
                    <ScoreStar score={item.score}/>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;
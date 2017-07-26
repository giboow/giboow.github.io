import React from 'react'
import ScoreStar from '../../components/score/star'


export default () => {
    const skills =  [
        {'name' : 'PHP', 'score': 4.5},
        {'name' : 'HTML5/CSS3', 'score': 4},
        {'name' : 'Sass', 'score': 4},
        {'name' : 'Javascript', 'score': 4.5},
        {'name' : 'NodeJS', 'score': 3.5},
        {'name' : 'AngularJS', 'score': 3.5},
        {'name' : 'MySQL', 'score': 4.5},
        {'name' : 'MongoDB', 'score': 4},
        {'name' : 'Redis', 'score': 4.5},
        {'name' : 'Bash/Scripts', 'score': 4},
        {'name' : 'Docker', 'score': 4},
        {'name' : 'GIT', 'score': 4},
        {'name' : 'Jenkins', 'score': 4},
    ];

    const chunkSize = Math.ceil(skills.length / 4);
    const groupSkills = [];
    while (skills.length > 0) {
        groupSkills.push(skills.splice(0, chunkSize));
    }
    return (
        <div className="columns is-mobile is-multiline">
            {groupSkills.map((skills, key) => (
                <div key={key} className="column has-text-centered is-6-mobile">
                    <ul>
                        {skills.map((item, key) => (
                            <li key={key}>
                                {item.name} <ScoreStar score={item.score}/>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

        </div>
    )
}
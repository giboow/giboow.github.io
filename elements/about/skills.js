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
        {'name' : 'BASH', 'score': 4},
        {'name' : 'Docker', 'score': 4},
        {'name' : 'GIT', 'score': 4},
        {'name' : 'Jenkins', 'score': 4},
    ];

    return (
        <div>
            <ul>
                {skills.map((item, key) => (
                    <li key={key}>
                        {item.name} <ScoreStar score={item.score}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}
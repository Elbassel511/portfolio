import React, { useEffect } from 'react';
import classes from './Background.module.scss';
import Anime, { anime } from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faGithub, faSass, faBootstrap, faNode } from '@fortawesome/free-brands-svg-icons';

export const skills = [
    {
        name: "HTML",
        icon: <FontAwesomeIcon icon={faHtml5} className={classes.icon} />,

    },
    {
        name: 'CSS',
        icon: <FontAwesomeIcon icon={faCss3Alt} className={classes.icon} />,
    }, {
        name: 'Javascript',
        icon: <FontAwesomeIcon icon={faJs} className={classes.icon} />,
    }, {
        name: 'React',
        icon: <FontAwesomeIcon icon={faReact} className={classes.icon} />,
    }, {
        name: 'Node',
        icon: <FontAwesomeIcon icon={faNodeJs} className={classes.icon} />,
    }, {
        name: 'Git',
        icon: <FontAwesomeIcon icon={faGitAlt} className={classes.icon} />
    }, {
        name: 'GitHub',
        icon: <FontAwesomeIcon icon={faGithub} className={classes.icon} />
    }, {
        name: 'Sass',
        icon: <FontAwesomeIcon icon={faSass} className={classes.icon} />
    }, {
        name: 'Bootstrap',
        icon: <FontAwesomeIcon icon={faBootstrap} className={classes.icon} />
    }, {
        name: 'PostgreSQL',
        icon: <div className={classes.icon}> PostgreSQL</div>
    }, {
        name: 'Node',
        icon: <FontAwesomeIcon icon={faNode} className={classes.icon} />,
    }, {
        name: 'Express',
        icon: <div className={classes.icon}> Express.js</div>
    }
];


function Background() {
    const elements = skills.map((skill, index) => (
        <div className={classes['background__element']} key={index} >
            {skill.icon}
        </div >
    ));
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5;




    return (
        <>
            <div className={classes.container}>
                <Anime
                    direction="alternate"
                    loop={true}
                    opacity={() => anime.random(0.9, 1)}
                    duration={30000}
                    scale={() => [anime.random(1, 3), anime.random(1, 3), anime.random(1, 3)]}
                    translateX={() => [anime.random(windowWidth, -windowWidth), anime.random(windowWidth, -windowWidth), anime.random(windowWidth, -windowWidth)]}
                    translateY={() => [anime.random(windowHeight, -windowHeight), anime.random(windowHeight, -windowHeight), anime.random(windowHeight, -windowHeight)]}
                    easing="linear"
                    delay={() => anime.random(0, 10000)}
                    elasticity={() => anime.random(0, 1000)}
                    autoplay={true}
                >
                    {elements}
                </Anime >
            </div>


        </>
    );
}

export default Background;

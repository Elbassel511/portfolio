import React from 'react';
import classes from './skills.module.scss';
import skills from '../UI/Background/Background';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faGithub, faSass, faBootstrap, faNode } from '@fortawesome/free-brands-svg-icons';


function Skills() {
    return (
        <div className={classes.container}>
            {/* title */}
            <div className={classes.title}>
                SKILLS
            </div>
            <div className={classes.skillsBranch}>
                <div className={classes.skillsTitle}>Front-end</div>
                <div className={classes.skills}>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faReact} className={classes.icon} />
                            <span>React</span>

                        </li>
                        <li>
                            <FontAwesomeIcon icon={faHtml5} className={classes.icon} />
                            <span>HTML</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCss3Alt} className={classes.icon} />
                            <span>CSS</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faSass} className={classes.icon} />
                            <span>SCSS</span>

                        </li>
                        <li>
                            <FontAwesomeIcon icon={faBootstrap} className={classes.icon} />
                            <span>Bootstrap</span>
                        </li>
                        <li><FontAwesomeIcon icon={faJs} className={classes.icon} /><span>JavaScript</span></li>
                    </ul>
                </div>
            </div>
            <div className={classes.skillsBranch}>
                <div className={classes.skillsTitle}>Back-end</div>
                <div className={classes.skills}>
                    <ul>
                        <li><FontAwesomeIcon icon={faNode} className={classes.icon} /><span>NodeJs</span> </li>
                        <li>
                            <i className={classes.icon}>
                                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z" /></svg>
                            </i>
                            <span>TypeScript</span>
                        </li>
                        <li>
                            <i className={classes.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" ><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" /></svg>
                            </i>
                            <span>ExpressJs</span> </li>
                        <li>
                            <i className={classes.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.6 25.6" ><g fill="none" stroke="#fff"><path d="M18.983 18.636c.163-1.357.114-1.555 1.124-1.336l.257.023c.777.035 1.793-.125 2.4-.402 1.285-.596 2.047-1.592.78-1.33-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.227-11.687-3.004-3.84-8.205-2.024-8.292-1.976l-.028.005c-.57-.12-1.2-.19-1.93-.2-1.308-.02-2.3.343-3.054.914 0 0-9.277-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.01 2.01 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.285 1.76.33 2.842s.116 2.093.337 2.688.48 2.13 2.53 1.7c1.713-.367 3.023-.896 3.143-5.81" fill="#000" stroke="#000" stroke-linecap="butt" stroke-width="2.149" class="D" /><path d="M23.535 15.6c-2.89.596-3.1-.383-3.1-.383 3.053-4.53 4.33-10.28 3.228-11.687-3.004-3.84-8.205-2.023-8.292-1.976l-.028.005a10.31 10.31 0 0 0-1.929-.201c-1.308-.02-2.3.343-3.054.914 0 0-9.278-3.822-8.846 4.807.092 1.836 2.63 13.9 5.66 10.25C8.29 15.987 9.36 14.86 9.36 14.86c.53.353 1.167.533 1.834.468l.052-.044a2.02 2.02 0 0 0 .021.518c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.162l-.046.183c.306.245.52 1.593.484 2.815s-.06 2.06.18 2.716.48 2.13 2.53 1.7c1.713-.367 2.6-1.32 2.725-2.906.088-1.128.286-.962.3-1.97l.16-.478c.183-1.53.03-2.023 1.085-1.793l.257.023c.777.035 1.794-.125 2.39-.402 1.285-.596 2.047-1.592.78-1.33z" stroke="none" /><g class="E"><g class="B"><path d="M12.814 16.467c-.08 2.846.02 5.712.298 6.4s.875 2.05 2.926 1.612c1.713-.367 2.337-1.078 2.607-2.647l.633-5.017M10.356 2.2S1.072-1.596 1.504 7.033c.092 1.836 2.63 13.9 5.66 10.25C8.27 15.95 9.27 14.907 9.27 14.907m6.1-13.4c-.32.1 5.164-2.005 8.282 1.978 1.1 1.407-.175 7.157-3.228 11.687" class="C" /><path d="M20.425 15.17s.2.98 3.1.382c1.267-.262.504.734-.78 1.33-1.054.49-3.418.615-3.457-.06-.1-1.745 1.244-1.215 1.147-1.652-.088-.394-.69-.78-1.086-1.744-.347-.84-4.76-7.29 1.224-6.333.22-.045-1.56-5.7-7.16-5.782S7.99 8.196 7.99 8.196" stroke-linejoin="bevel" /></g><g class="C"><path d="M11.247 15.768c-.78.872-.55 1.025-2.11 1.346-1.578.325-.65.904-.046 1.056.734.184 2.432.444 3.58-1.163.35-.49-.002-1.27-.482-1.468-.232-.096-.542-.216-.94.23z" /><path d="M11.196 15.753c-.08-.513.168-1.122.433-1.836.398-1.07 1.316-2.14.582-5.537-.547-2.53-4.22-.527-4.22-.184s.166 1.74-.06 3.365c-.297 2.122 1.35 3.916 3.246 3.733" class="B" /></g></g><g class="D"><path d="M10.322 8.145c-.017.117.215.43.516.472s.558-.202.575-.32-.215-.246-.516-.288-.56.02-.575.136z" stroke-width=".239" /><path d="M19.486 7.906c.016.117-.215.43-.516.472s-.56-.202-.575-.32.215-.246.516-.288.56.02.575.136z" stroke-width=".119" /></g><path d="M20.562 7.095c.05.92-.198 1.545-.23 2.524-.046 1.422.678 3.05-.413 4.68" class="B C E" /></g></svg>
                            </i>
                            <span>PostgreSQL</span>
                        </li>

                        <li>
                            <i className={classes.svg}>
                            </i>
                            <span>jasmine</span>
                        </li>
                    </ul>
                </div>
            </div >
            <div className={classes.skillsBranch}>
                <div className={classes.skillsTitle}>Workflow</div>
                <div className={classes.skills}>
                    <ul>
                        <li>
                            <i className={classes.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><circle cx="24" cy="24" r="5" /><path d="M24,4C14.324,4,6.255,10.871,4.402,20h9.36c1.601-4.095,5.576-7,10.239-7c6.075,0,11,4.925,11,11 s-4.925,11-11,11c-4.662,0-8.637-2.905-10.239-7h-9.36C6.255,37.129,14.324,44,24,44c11.046,0,20-8.954,20-20S35.046,4,24,4z" /></svg>
                            </i>
                            <span>CircleCI</span> </li>
                        <li>
                            <FontAwesomeIcon icon={faGithub} className={classes.icon} />
                            <span>github</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGitAlt} className={classes.icon} />
                            <span>git</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
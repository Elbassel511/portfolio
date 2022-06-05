import classes from '../Button/Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import React from 'react';

function Contacts() {
    return (
        <div className={classes.contacts}>
            <a href="https://github.com/Elbassel511" target='_blank' className={classes.btn}>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/hamada-elbassel/" target='_blank' className={classes.btn}>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    );
}

export default Contacts;
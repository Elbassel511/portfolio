import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Projects.module.scss';
import projects from '../Data/Data';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import Modal from '../components/Modal/Modal';

function Projects() {
    const [modal, setModal] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);

    const ViewDetails = (id) => {
        const project = projects.find(project => project.id === id);
        setModalContent(project);
        setModal(true);
    };

    // cards 
    const cards = projects.map(project => {
        return (
            <Card
                key={project.id}
                name={project.name}
                description={project.description}
                skills={project.skills}
                image={project.images}
                url={project.url}
                id={project.id}
                onClick={(id) => ViewDetails(id)}
            />
        );
    }
    );
    // render
    return (
        <>
            {modal && <Modal onClick={() => setModal(false)} project={modalContent}></Modal>}
            <div className={classes.container}>
                {cards}
            </div>
        </>
    );
}

export default Projects;
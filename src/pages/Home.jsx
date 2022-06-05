import React from 'react';
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import Contacts from '../components/Contacts/Contacts';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    const navigateTo = (e) => {
        e.preventDefault();
        navigate('/projects', { replace: true });

    };
    return (
        <>
            <header>
                <Header>
                    <h1>Hamada ElBassel</h1>
                    <h2>Front-end web developer</h2>
                </Header>
                {/* projects button */}
                <Button onClick={navigateTo}>
                    Projects
                </Button>
                {/* contacts */}
                <Contacts />

            </header>
        </>
    );
}

export default Home;
import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    function handleAddProject() {
        //projects.push(`Novo Projeto ${Date.now()}`);
        api.post('projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Erick"
        }).then(response => {
            setProjects([...projects, response.data]);
        });
    }

    return (
        <>
            <Header title="Projects"/>

            <ul>
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;
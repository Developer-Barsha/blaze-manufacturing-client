import React from 'react';
import { Link } from 'react-router-dom';
import demoPortfolio from './../../images/projects/1.png';
import fruitsCorner from './../../images/projects/2.png';
import redOnion from './../../images/projects/3.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: demoPortfolio,
            title: 'Demo Portfolio',
            tools: 'HTML, CSS, Javascript',
            code: 'https://github.com/Developer-Barsha/demo-portfolio',
            link: 'https://developer-barsha.netlify.app/'
        },
        {
            id: 2,
            image: redOnion,
            title: 'Red Onion',
            tools: 'React, CSS, React Router, Bootstrap',
            server: 'https://github.com/Developer-Barsha/fruits-corner-server',
            client: 'https://github.com/Developer-Barsha/fruits-corner-client',
            link: 'https://red-onion-resturant.netlify.app/'
        },
        {
            id: 3,
            image: fruitsCorner,
            title: 'Fruits Corner',
            tools: 'React, CSS, React Router, Tailwind, JWT',
            code: 'https://github.com/Developer-Barsha/red-onion-restaurant',
            link: 'https://fruits-corner.netlify.app/'
        },
    ];

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-12 px-5 my-10'>
            {projects.map(project =>
                <div key={project?.id} className="card shadow-xl">
                    <figure><img src={project?.image} alt="Project Screenshot" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {project?.title}
                            <div className="badge badge-secondary"><a href={project?.link} target='blank'>Live Site</a></div>
                        </h2>
                        <p>{project?.tools}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline"><a href={project?.code || project?.client} target='blank'>Code</a></div>
                            {project?.server && <div className="badge badge-outline"><a href={project?.server} target='blank'>Server</a></div>}
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default Projects;
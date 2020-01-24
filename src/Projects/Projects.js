import React from 'react';
import s from './Projects.module.css'
import ProjectsComp from "./ProjectsComp/ProjectsComp";
import BlockTitle from "../BlockTitle/BlockTitle";

function Projects() {
    return (
        <div className={s.AllClassProjects}>
            <div className={s.conteiner}>
                <BlockTitle title='My projects'/>
                <div className={s.projects}>
                    <ProjectsComp/>
                    <ProjectsComp/>
                </div>

            </div>
        </div>
    );
}

export default Projects;

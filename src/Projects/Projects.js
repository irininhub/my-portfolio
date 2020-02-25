import React from 'react';
import s from './Projects.module.css'
import ProjectsComp from "./ProjectsComp/ProjectsComp";
import BlockTitle from "../BlockTitle/BlockTitle";
import SNImg from '../images/SNpng.png'

let SocialNet = SNImg;

function Projects() {
    return (
        <div className={s.AllClassProjects}>
            <div className={s.conteiner}>
                <BlockTitle title='My projects'/>
                <div className={s.projects}>
                    <ProjectsComp title ='Social network' projectImg={SocialNet}/>
                    <ProjectsComp title ='To do list' projectImg={SocialNet}/>
                    <ProjectsComp title ='Counter' projectImg={SocialNet}/>
                    <ProjectsComp title ='Dog game' projectImg={SocialNet}/>
                </div>

            </div>
        </div>
    );
}

export default Projects;

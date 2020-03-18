import React from 'react';
import s from './Projects.module.css'
import ProjectsComp from "./ProjectsComp/ProjectsComp";
import BlockTitle from "../BlockTitle/BlockTitle";
import SNImg from '../images/SNpng.png'
import CounterImg from '../images/counter.png'
import TodoListImg from '../images/Todo.png'
import Fade from "react-reveal/Fade";

let SocialNet = {
    backgroundImage: `url(${SNImg})`
};
let Counter = {
    backgroundImage: `url(${CounterImg})`
};
let TodoList = {
    backgroundImage: `url(${TodoListImg})`
};

function Projects() {
    return (
        <div className={s.AllClassProjects}>
            <Fade clear>
            <div className={s.conteiner} id = 'project'>
                <BlockTitle title='My projects'/>
                <div className={s.projects}>
                    <ProjectsComp title ='Social network' style={SocialNet}/>
                    <ProjectsComp title ='To do list' style={TodoList}/>
                    <ProjectsComp title ='Counter' style={Counter}/>
                    <ProjectsComp title ='Dog game' projectImg={SocialNet}/>
                </div>
            </div>
                </Fade>
        </div>
    );
}

export default Projects;

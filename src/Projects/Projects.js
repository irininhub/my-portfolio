import React from 'react';
import s from './Projects.module.css'
import ProjectsComp from "./ProjectsComp/ProjectsComp";
import BlockTitle from "../BlockTitle/BlockTitle";
import SNImg from '../images/SNpng.png'
import CounterImg from '../images/counter.png'
import TodoListImg from '../images/Todo.png'

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
            <div className={s.conteiner}>
                <BlockTitle title='My projects'/>
                <div className={s.projects}>
                    <ProjectsComp title ='Social network' style={SocialNet}/>
                    <ProjectsComp title ='To do list' style={TodoList}/>
                    <ProjectsComp title ='Counter' style={Counter}/>
                    <ProjectsComp title ='Dog game' projectImg={SocialNet}/>
                </div>

            </div>
        </div>
    );
}

export default Projects;

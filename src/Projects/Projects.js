import React from 'react';
import s from './Projects.module.css'
import ProjectsComp from "./ProjectsComp/ProjectsComp";
import BlockTitle from "../BlockTitle/BlockTitle";
import SNImg from '../images/SNpng.png'
import CounterImg from '../images/counter.png'
import TodoListImg from '../images/Todo.png'
import dogImg from '../images/dog.png'
import Fade from "react-reveal/Fade";

let socialNet = {
    backgroundImage: `url(${SNImg})`
};
let counter = {
    backgroundImage: `url(${CounterImg})`
};
let todoList = {
    backgroundImage: `url(${TodoListImg})`
};
let dog = {
    backgroundImage: `url(${dogImg})`
};

const socialNetText = 'Used technologies: ';
const todoListText =  'Used technologies: ';
const counterText =  'Used technologies: ';
const dogText =  'Used technologies: ';


function Projects() {
    return (
        <div className={s.AllClassProjects}>
            <Fade clear>
            <div className={s.conteiner} id = 'project'>
                <BlockTitle title='My projects'/>
                <div className={s.projects}>
                    <ProjectsComp title ='Social network' style={socialNet} description = {socialNetText}/>
                    <ProjectsComp title ='To do list' style={todoList} description = {todoListText}/>
                    <ProjectsComp title ='Counter' style={counter} description = {counterText}/>
                    <ProjectsComp title ='Dog game' style={dog} description = {dogText}/>
                </div>
            </div>
                </Fade>
        </div>
    );
}

export default Projects;

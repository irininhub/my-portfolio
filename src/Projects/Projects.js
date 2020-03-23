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

const socialNetText = ''; //Used technologies:
const todoListText =  '';
const counterText =  '';
const dogText =  '';

const sNLink = 'https://github.com/irininhub/SocialNetWork';
const todoLink = 'https://github.com/irininhub/Todolist';
const counterLink = 'https://github.com/irininhub/Counter';
const dogLink = 'https://github.com/irininhub/Dog-game';


function Projects() {
    return (
        <div className={s.AllClassProjects}>
            <Fade clear>
            <div className={s.conteiner} id = 'project'>
                <BlockTitle title='My projects'/>
                <div className={s.projects}>
                    <ProjectsComp title ='Social network' style={socialNet}
                                  description = {socialNetText}
                                  link = {sNLink}
                    />
                    <ProjectsComp title ='To do list' style={todoList}
                                  description = {todoListText}
                                  link = {todoLink}
                    />
                    <ProjectsComp title ='Counter' style={counter}
                                  description = {counterText}
                                  link = {counterLink}
                    />
                    <ProjectsComp title ='Dog game' style={dog}
                                  description = {dogText}
                                  link = {dogLink}
                    />
                </div>
            </div>
                </Fade>
        </div>
    );
}

export default Projects;

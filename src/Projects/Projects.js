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
const todoListText = '';
const counterText = '';
const dogText = '';

const sNLinkCode = 'https://github.com/irininhub/SocialNetWork';
const todoLinkCode = 'https://github.com/irininhub/Todolist';
const counterLinkCode = 'https://github.com/irininhub/Counter';
const dogLinkCode = 'https://github.com/irininhub/Dog-game';

const sNLinkDemo = 'https://irininhub.github.io/SocialNetWork';
const todoLinkDemo = 'https://github.com/irininhub/Todolist';
const counterLinkDemo = 'https://irininhub.github.io/Counter';
const dogLinkDemo = 'https://github.com/irininhub/Dog-game';


function Projects() {
    return (
        <div className={s.AllClassProjects}>
            <Fade clear>
                <div className={s.conteiner} id='project'>
                    <BlockTitle title='My projects'/>
                    <div className={s.projects}>
                        <ProjectsComp title='Social network' style={socialNet}
                                      description={socialNetText}
                                      linkCode={sNLinkCode}
                                      linkDemo={sNLinkDemo}
                        />
                        <ProjectsComp title='To do list' style={todoList}
                                      description={todoListText}
                                      linkCode={todoLinkCode}
                                      linkDemo={todoLinkDemo}
                        />
                        <ProjectsComp title='Counter' style={counter}
                                      description={counterText}
                                      linkCode={counterLinkCode}
                                      linkDemo={counterLinkDemo}
                        />
                        <ProjectsComp title='Dog game' style={dog}
                                      description={dogText}
                                      linkCode={dogLinkCode}
                                      linkDemo={dogLinkDemo}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Projects;

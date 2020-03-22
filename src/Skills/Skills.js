import React from 'react';
import s from './Skills.module.css'
import SkillsComp from "./SkillsComp/SkillsComp";
import BlockTitle from "../BlockTitle/BlockTitle";
import reactIcon from "../images/react.png";
import jsIcon from '../images/js-icon.png'
import htmlIcon from '../images/html_icon.png'
import reduxIcon from '../images/redux.png'
import gitIcon from '../images/icons/github.png'
import tsIcon from '../images/ts-icon.png'
import Fade from 'react-reveal/Fade'


function Skills() {
    let react = reactIcon;
    let redux = reduxIcon;
    let js = jsIcon;
    let github = gitIcon;
    let html = htmlIcon;
    let ts = tsIcon;

//descriptions
    let reactText = "class & function components, life cycle methods, HOC, HOOK, axios, ref";
    let reduxText = "combineReducers, reducer, dispatch, action, provider, connect, react-router-dom, redux-thunk;";
    let jsText = "es5 / es6; Arrow functions, array methods, spread, destructuring, promise, pure function, localStorage;";
    let githubText = "git repo, github-pages";
    let htmlText = "use flexbox, css grid, media queries";
    let TypeSText = "typing props, create Interfaces, generics;";

    return (
        <div className={s.allClassSkills} >
            <Fade clear>
                <div className={s.conteiner} id = 'skills'>
                    <BlockTitle title='My skills'/>

                    <div className={s.skills}>
                        <SkillsComp description = {reactText} title='React' icon={react} />
                        <SkillsComp description = {reduxText} title='Redux' icon={redux}/>
                        <SkillsComp description = {jsText} title='JS' icon={js}/>
                        <SkillsComp description = {githubText} title='Github' icon={github}/>
                        <SkillsComp description = {htmlText} title='HTML/CSS' icon={html}/>
                        <SkillsComp description = {TypeSText} title='TypeScript' icon={ts}/>
                    </div>

                </div>
            </Fade>
        </div>
    );
}

export default Skills;

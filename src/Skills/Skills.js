import React from 'react';
import s from './Skills.module.css'
import SkillsComp from "./SkillsComp/SkillsComp";
import BlockTitle from "../BlockTitle/BlockTitle";
import reactIcon from "../images/react.png";
import jsIcon from '../images/js-icon.png'
import htmlIcon from '../images/html_icon.png'
import reduxIcon from '../images/redux.png'
import gitIcon from '../images/icons/github.png'
import cssIcon from '../images/css-icon.png'

function Skills() {
    let react =reactIcon;
    let redux = reduxIcon;
    let js = jsIcon;
    let github = gitIcon;
    let html = htmlIcon;
    let css = cssIcon;



    return (
        <div className={s.allClassSkills}>
            <div className={s.conteiner}>
             <BlockTitle title = 'My skills'/>

                <div className={s.skills}>
                    <SkillsComp title = 'React' icon ={react}/>
                    <SkillsComp title = 'Redux' icon ={redux}/>
                    <SkillsComp title = 'JS' icon ={js}/>
                    <SkillsComp title = 'Github' icon ={github}/>
                    <SkillsComp title = 'HTML' icon ={html}/>
                    <SkillsComp title = 'CSS' icon ={css}/>


                </div>

            </div>


        </div>
    );
}

export default Skills;

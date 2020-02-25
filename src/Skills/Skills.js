import React from 'react';
import s from './Skills.module.css'
import SkillsComp from "./SkillsComp/SkillsComp";
import BlockTitle from "../BlockTitle/BlockTitle";
import reactIcon from "../images/react.png";
import jsIcon from '../images/js-icon.png'
import htmlIcon from '../images/html_icon.png'
import reduxIcon from '../images/redux.png'

function Skills() {
    let react =reactIcon;
    let js = jsIcon;
    let html = htmlIcon;
    let redux = reduxIcon;
    return (
        <div className={s.allClassSkills}>
            <div className={s.conteiner}>
             <BlockTitle title = 'My skills'/>

                <div className={s.skills}>
                    <SkillsComp title = 'React' icon ={react}/>
                    <SkillsComp title = 'JS' icon ={js}/>
                    <SkillsComp title = 'HTML/CSS' icon ={html}/>
                    <SkillsComp title = 'Redux' icon ={redux}/>
                    <SkillsComp title = 'Redux' icon ={redux}/>
                    <SkillsComp title = 'Redux' icon ={redux}/>
                </div>

            </div>


        </div>
    );
}

export default Skills;

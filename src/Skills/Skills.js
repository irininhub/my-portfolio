import React from 'react';
import s from './Skills.module.css'
import SkillsComp from "./SkillsComp/SkillsComp";
import BlockTitle from "../BlockTitle/BlockTitle";

function Skills() {
    return (
        <div className={s.allClassSkills}>
            <div className={s.conteiner}>
             <BlockTitle title = 'My skills'/>

                <div className={s.skills}>
                    <SkillsComp title = 'React'/>
                    <SkillsComp title = 'JS'/>
                    <SkillsComp title = 'HTML/CSS'/>
                </div>

            </div>


        </div>
    );
}

export default Skills;

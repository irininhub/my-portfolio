import React from 'react';
import s from './SkillsComp.module.css'


function SkillsComp(props) {

    return (
        <div className={s.skill}>
            <div className={s.shapka}>
                <div className={props.className}>
                    <div className={s.icon}>
                        <img src={props.icon} alt=""/>
                    </div>
                </div>

                <h3 className={s.title}>
                    {props.title}
                </h3>
            </div>
            <div className={s.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, enim...</div>
        </div>
    );
}

export default SkillsComp;

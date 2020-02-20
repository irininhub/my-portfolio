import React from 'react';
import s from './SkillsComp.module.css'

function SkillsComp(props) {
    return (

        <div className={s.box}>
            <div className={s.space1}>
                <div className={s.icon}>
                    <img src="" alt=""/>
                </div>
              {props.title}
            </div>
            <div className={s.space2}>Подробное описание навыка</div>
        </div>


    );
}

export default SkillsComp;

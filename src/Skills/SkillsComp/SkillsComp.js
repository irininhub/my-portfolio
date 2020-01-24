import React from 'react';
import s from './SkillsComp.module.css'

function SkillsComp() {
    return (

        <div className={s.box}>
            <div className={s.space1}>
                <div className={s.photo}>
                    <img src="" alt=""/>
                </div>
                React
            </div>
            <div className={s.space2}>Подробное описание навыка</div>
        </div>


    );
}

export default SkillsComp;

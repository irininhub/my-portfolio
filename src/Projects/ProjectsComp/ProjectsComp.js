import React from 'react';
import s from './ProjectsComp.module.css'
import Button from "../../Button/Button";

function ProjectsComp() {
    return (<div className={s.project}>
            <div className={s.visual}>
                <div className={s.picbut}>
                    <img src="" alt=""/>

                        <Button buttonTitle = 'смотреть'/>

                </div>
            </div>

            <div className={s.text}>
                <div>
                    Название проекта
                </div>
                <div>
                    Краткое описание
                </div>
            </div>

        </div>


    );
}

export default ProjectsComp;

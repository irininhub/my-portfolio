import React from 'react';
import s from './ProjectsComp.module.css'
import Button from "../../Button/Button";
//{props.projectImg}
function ProjectsComp(props) {
    return (<div className={s.project}>
            <div className={s.visual}>

                    <img src='' alt=""/>
                    <a href="" className={s.btnShow}>Cмотреть</a>

            </div>

            <div className={s.text}>
                <div className={s.title}>
                    {props.title}
                </div>
                <div className={s.description}>
                    Краткое описание что то про проект надо немного написать xnj yt pyf.
                </div>
            </div>

        </div>


    );
}

export default ProjectsComp;

import React from 'react';
import s from './ProjectsComp.module.css'


function ProjectsComp(props) {
    return (<div className={s.project}>


            <a className={s.btnShow}>Watch</a>
            <div className={s.visual} style={props.style}/>


            <div className={s.text}>
                <span className={s.title}>{props.title}</span>
                <span className={s.description}>
                    Краткое описание что то про проект надо немного написать xnj yt pyf.
                </span>
            </div>

        </div>


    );
}

export default ProjectsComp;

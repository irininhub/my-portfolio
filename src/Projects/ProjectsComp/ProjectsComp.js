import React from 'react';
import s from './ProjectsComp.module.css'


function ProjectsComp(props) {


    return (
        <div className={s.project}>
            <div className={s.visual} style={props.style}/>
            <div className={s.hiddentext}>
                <span className={s.title}>{props.title}</span>
                <span className={s.description}>
                    {props.description}
                </span>
                <a href={props.link}
                   className={s.btnShow}>Watch</a>
            </div>
        </div>

    );
}

export default ProjectsComp;



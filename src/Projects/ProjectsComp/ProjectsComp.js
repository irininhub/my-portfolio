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
                <div className={s.links}>
                    <a href={props.linkCode}
                       className={s.btnShow}>Code</a>
                    <a href={props.linkDemo}
                       className={s.btnShow}>Demo</a>
                </div>

            </div>
        </div>

    );
}

export default ProjectsComp;



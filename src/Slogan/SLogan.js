import React from 'react';
import s from './Slogan.module.css'
import Button from "../Button/Button";
import Fade from "react-reveal/Fade";

function Slogan() {
    return (
        <div className={s.sloganall}>
            <Fade clear>
                <div className={s.conteiner}>
                    <div className={s.slogan}>
                        My CV on jobs.tut.by
                    </div>
                    <a href="https://jobs.tut.by/resume/49a1a218ff07d41eaf0039ed1f66644e735068" className={s.link}>Watch</a>

                </div>
            </Fade>
        </div>
    );
}

export default Slogan;

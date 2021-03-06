import React from 'react';
import s from './Main.module.css'
import imgI from '../images/Irina.jpg'
import {Fade} from "react-reveal";


function Main() {
    let imgIr = imgI;

    return (

        <div className={s.main}>
            <div className={s.container}>
                <div className={s.blur}>
                    <Fade top>
                <div className={s.greeting}>
                        <span>Hello!</span>
                        <span className = {s.name}>I'm <span>Irina Potrebko</span></span>
                        <h1 className={s.h1}>I'm front-end developer</h1>
                    </div>
                    </Fade>
                </div>
                <div className={s.photo}>
                    <div className={s.image}>
                        <img src={imgIr}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;

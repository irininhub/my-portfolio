import React from 'react';
import s from './Main.module.css'

function Main() {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greeting}>
                    <span>Hello!</span>
                    <span>I'm <span>Irina Potrebko</span></span>
                    <h1>I'm front-end developer</h1>
                </div>
                <div className={s.photo}>
                    <div className={s.image}/>
                </div>
            </div>
        </div>
    );
}

export default Main;

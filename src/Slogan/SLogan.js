import React from 'react';
import s from './Slogan.module.css'
import Button from "../Button/Button";
import BlockTitle from "../BlockTitle/BlockTitle";

function Slogan() {
    return (
        <div className={s.sloganall}>
            <div className={s.conteiner}>
                <div className={s.slogan}>
                  My CV on jobs.tut.by
                </div>
                <Button buttonTitle = 'Hire me'/>


            </div>
        </div>
    );
}

export default Slogan;

import React from 'react';
import s from './Slogan.module.css'
import Button from "../Button/Button";

function Slogan() {
    return (
        <div className={s.sloganall}>
            <div className={s.conteiner}>
                <div>
                    Рассматриваю варианты классной работы
                </div>
                <Button buttonTitle = 'Нанять меня'/>


            </div>
        </div>
    );
}

export default Slogan;

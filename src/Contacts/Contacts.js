import React from 'react';
import s from './Contacts.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";
import Button from "../Button/Button";
import Fade from "react-reveal/Fade";

function Contacts() {
    return (
        <div className={s.contacts}>
            <Fade bottom>
                <div className={s.conteiner} id = 'contacts'>
                    <BlockTitle title='contacts'/>
                    <form className={s.form}>
                        <input className={s.formArea} placeholder='Name'/>
                        <input className={s.formArea} placeholder='E-mail'/>
                        <textarea className={s.message} placeholder='Message'/>
                    </form>
                    <div className={s.button}>
                        <Button buttonTitle='submit'/></div>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;

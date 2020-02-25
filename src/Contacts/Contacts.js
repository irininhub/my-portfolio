import React from 'react';
import s from './Contacts.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";
import Button from "../Button/Button";

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.conteiner}>
                <BlockTitle title='contacts'/>
                <form className={s.form}>
                    <input className={s.formArea} placeholder='Name'/>
                    <input className={s.formArea} placeholder='E-mail'/>
                    <textarea className={s.message} placeholder='Message'/>

                </form>
                <div className={s.button}>
                    <Button buttonTitle='submit'/></div>
            </div>

        </div>
    );
}

export default Contacts;

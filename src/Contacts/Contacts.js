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
                    <input placeholder='Name'></input>
                    <input placeholder='E-mail'></input>
                    <textarea placeholder='Message'></textarea>
                </form>
                <div>
                    <Button buttonTitle='submit'/>
                </div>
            </div>

        </div>
    );
}

export default Contacts;

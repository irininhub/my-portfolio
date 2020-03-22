import React from 'react';
import s from './Contacts.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";
import Button from "../Button/Button";
import Fade from "react-reveal/Fade";

function Contacts() {
    return (
        <div className={s.wrapper} id='contacts'>
            <Fade bottom>

                <div  className={s.contacts}>

                <div className={s.mycontact}>
                    <BlockTitle title='My contacts'/>
                    <span>Please, if you want to contact me, use these contacts or the form</span>
                    <h3>E-mail</h3><span>Irina.potrebko7@gmail.com</span>
                    <h3>Phone</h3><span>+375(29)-615-23-02</span>
                </div>
                <div className={s.conteiner}>
                    <BlockTitle title='Quick contact form'/>
                    <form className={s.form}>
                        <input className={s.formData} placeholder='Your name'/>
                        <input className={s.formData} placeholder='Your E-mail'/>
                        <textarea className={s.message} placeholder='Your message'/>
                    </form>
                    <div className={s.button}>
                        <Button buttonTitle='submit'/></div>
                </div>
                </div>
            </Fade>
        </div>
    );
}

export default Contacts;

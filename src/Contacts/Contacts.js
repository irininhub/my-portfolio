import React from 'react';
import s from './Contacts.module.css'
import BlockTitle from "../BlockTitle/BlockTitle";
import Button from "../Button/Button";
import Fade from "react-reveal/Fade";
import * as axios from "axios";

class Contacts extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    onNameChange = (e) => {
        this.setState({
            name: e.currentTarget.value
        })
    };

    onEmailChange = (e) => {
        this.setState({
            email: e.currentTarget.value
        })
    };

    onInfoChange = (e) => {
        this.setState({
            message: e.currentTarget.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3005/sendMessage", {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then(() => {
            alert("Your message has been sent, thank you! I will reply immediately")
            this.setState({
                message: ''
            })
        })

    };

    render() {
        return (
            <div className={s.wrapper} id='contacts'>
                <Fade bottom>

                    <div className={s.contacts}>

                        <div className={s.mycontact}>
                            <BlockTitle title='My contacts'/>
                            <span>Please, if you want to contact me, use these contacts or the form</span>
                            <h3>E-mail</h3><span>Irina.potrebko7@gmail.com</span>
                            <h3>Phone</h3><span>+375(29)-615-23-02</span>
                        </div>
                        <div className={s.conteiner}>
                            <BlockTitle title='Quick contact form'/>
                            <form className={s.form}>
                                <input className={s.formData} value={this.state.name} onChange={this.onNameChange}
                                       placeholder='Your name' required/>
                                <input className={s.formData} value={this.state.email} onChange={this.onEmailChange}
                                       placeholder='Your E-mail' required/>
                                <textarea className={s.message} value={this.state.message} onChange={this.onInfoChange}
                                          placeholder='Your message' required/>
                            </form>
                            <div className={s.button}>
                                <Button onSubmit={this.onSubmit} buttonTitle='submit'/></div>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Contacts;

import React from 'react';
import s from './Footer.module.css'
import tel from '../images/icons/Telega.png'
import git from '../images/icons/github.png'
import ldin from '../images/icons/linkedin.png'
import f from '../images/icons/facebook.png'
import Fade from "react-reveal/Fade";


function Footer() {
    let telegram = tel;
    let github = git;
    let linkedin = ldin;
    let facebook = f;
    return (
        <div className={s.footer}>
            <Fade clear>
                <div className={s.conteiner}>
                    <div className={s.name}>
                        Irina Potrebko
                    </div>
                    <div className={s.boxes}>
                        <div className={s.icon}>
                            <a href="https://web.telegram.org/#/irinapotr">
                                <img src={telegram} alt=""/>
                            </a>
                        </div>

                        <div className={s.icon}>
                            <a href="https://github.com/irininhub">
                                <img src={github} alt=""/>
                            </a>
                        </div>

                        <div className={s.icon}>
                            <a href="https://www.linkedin.com/in/%D0%B8%D1%80%D0%B8%D0%BD%D0%B0-%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%BA%D0%BE-768029120/">
                                <img src={linkedin} alt=""/>
                            </a>
                        </div>

                        <div className={s.icon}>
                            <a href="https://www.facebook.com/irina.potrebko?ref=bookmarks">
                                <img src={facebook} alt=""/>
                            </a>
                        </div>

                    </div>
                    <div className={s.copyright}>
                        © 2020 All rights reserved
                    </div>
                </div>
            </Fade>
        </div>

    );
}

export default Footer;

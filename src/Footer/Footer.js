import React from 'react';
import s from './Footer.module.css'
import tel from '../images/icons/Telega.png'
import git from '../images/icons/github.png'
import ldin from '../images/icons/linkedin.png'
import f from '../images/icons/facebook.png'



function Footer() {
    let telegram = tel;
    let github = git;
    let linkedin = ldin;
    let facebook = f;
    return (
        <div className={s.footer}>
            <div className={s.conteiner}>
                <div className={s.name}>
                    Irina Potrebko
                </div>
                <div className={s.boxes}>
                  <div className={s.box}>
                      <a href="">
                          <img src={telegram} alt=""/>
                      </a>
                  </div>

                  <div className={s.box}>
                      <a href="">
                          <img src={github} alt=""/>
                      </a>
                  </div>

                  <div className={s.box}>
                      <a href="">
                          <img src={linkedin} alt=""/>
                      </a>
                  </div>

                    <div className={s.box}>
                        <a href="">
                            <img src={facebook} alt=""/>
                        </a>
                    </div>

                </div>
                <div className={s.copyright}>
                    © 2020 All rights reserved
                </div>
            </div>

        </div>


    );
}

export default Footer;

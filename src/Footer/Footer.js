import React from 'react';
import s from './Footer.module.css'

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.conteiner}>
                <div>
                    Ирина Потребко
                </div>
                <div className={s.boxes}>
                  <div className={s.box}></div>
                  <div className={s.box}></div>
                  <div className={s.box}></div>

                </div>
                <div>
                    © 2020 Все права защищены
                </div>
            </div>

        </div>


    );
}

export default Footer;

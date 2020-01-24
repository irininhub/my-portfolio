import React from 'react';
import s from './Button.module.css'

function Button(props) {
    return (
        <div className={s.button}>
            <button>
                {props.buttonTitle}
            </button>
        </div>
    );
}

export default Button;

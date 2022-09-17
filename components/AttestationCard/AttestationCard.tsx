import { FC } from 'react';

import { AttestationCardPropsTypes } from './AttestationCard.types';

import style from './attestationCard.module.scss';

const AttestationCard:FC<AttestationCardPropsTypes> = ({ title, text, color = 'black', corner = false, bullets = false}) => {
    return (
        <div className={`${style.container}  ${style[color]} ${corner ? style.corner : ''}`}>
            <h3 className={style.title}> {title} </h3>
            <ul className={style.description}>
                {text.map(paragraph => 
                    <li className={`${style.description_paragrph} ${bullets ? style.bullets : ''}`}> 
                        {paragraph}
                    </li>)}
            </ul>
        </div>
    )
}

export default AttestationCard
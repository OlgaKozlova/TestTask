import React from 'react';
import PropTypes from 'prop-types';

import style from './DPayInfo.scss';
import {getClassList} from '../componentsHelper.js'

const iconStyle = {
    comission: style.commision,
    security: style.security,
};

const PayInfo = props => (
    <div className={style.payInfo}>
        <div className={getClassList({
            [style.icon]: true,
            [iconStyle[props.icon]]: true
        })} />
        <div className={style.text}>{props.text}</div>
    </div>
);

PayInfo.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default PayInfo;

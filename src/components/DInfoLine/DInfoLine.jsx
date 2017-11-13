import React from 'react';
import PropTypes from 'prop-types';
import style from './DInfoLine.scss';

const images = {
    crown: require('./crown.png')
};

const InfoLine = props => (
    <div className={style.infoline}>
        <img className={style.child} src={images[props.image]}/>
        <div className={`${style.child} ${style.text}`}>{props.text}</div>
    </div>
);

InfoLine.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.oneOf(['crown']).isRequired
};

export default InfoLine;

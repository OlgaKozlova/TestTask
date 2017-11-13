import React from 'react';
import PropTypes from 'prop-types';

import style from './DFooter.scss';

import DContainer from '../DContainer/DContainer.jsx';

const Footer = props => (
    <div className={style.footer}>
        <DContainer>
            <div className={style.child}>{props.copyright}</div>
            <a className={style.child} href={props.supportLink}>{props.supportText}</a>
        </DContainer>
    </div>
);

Footer.propTypes = {
    copyright: PropTypes.string.isRequired,
    supportLink: PropTypes.string.isRequired,
    supportText: PropTypes.string.isRequired
};

export default Footer;

import React from 'react';
import PropTypes from 'prop-types';

import style from './DSubHeader.scss';

const SubHeader = props => (
    <div className={style.subheader}>
        <div className={style.title}>{props.title}</div>
        <div className={style.description}>{props.description}</div>
    </div>
);

SubHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default SubHeader;

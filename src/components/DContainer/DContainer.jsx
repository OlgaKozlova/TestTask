import React from 'react';
import PropTypes from 'prop-types';

import style from './DContainer.scss';

const Container = props => (
    <div className={style.container}>
        {props.children}
    </div>
);

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Container;

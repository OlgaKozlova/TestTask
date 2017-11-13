import React from 'react';
import PropTypes from 'prop-types';
import style from './DView.scss';

const View = props => (<div
    className={style.container}
>
    {props.children}
</div>);

View.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired
};

export default View;

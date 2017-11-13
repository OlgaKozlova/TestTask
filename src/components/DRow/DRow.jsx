import React from 'react';
import PropTypes from 'prop-types';
import style from './DRow.scss';

const Row = props => (<div
    className={style.row}
>
    {props.children}
</div>);

Row.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired
};

export default Row;

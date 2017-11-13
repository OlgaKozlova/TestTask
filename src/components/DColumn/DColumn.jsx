import React from 'react';
import PropTypes from 'prop-types';
import style from './DColumn.scss';

import {getClassList} from '../componentsHelper.js';

const Column = props => (<div
    className={getClassList({
        [style.column]: true,
        [style['col-l-' + props.large]]: true,
        [style['col-m-' + props.medium]]: true,
        [style['col-s-' + props.small]]: true,
        [style['col-xs-' + props.xsmall]]: true,
    })}
>
    {props.children}
</div>);

Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    large: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']).isRequired,
    medium: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']).isRequired,
    small: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']).isRequired,
    xsmall: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']).isRequired
};

export default Column;

import React from 'react';
import PropTypes from 'prop-types';

import style from './DButton.scss';
import { getClassList } from '../componentsHelper.js';

const Button = props => (
    <button
        className={getClassList({
            [style.button]: true,
            [style.disabled]: props.isDisabled
        })}
        onClick={props.isDisabled ? () => {} : props.onClick}
    >
        {props.label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
};

export default Button;

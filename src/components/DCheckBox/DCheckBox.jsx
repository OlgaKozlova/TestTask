import React from 'react';
import PropTypes from 'prop-types';

import style from './DCheckBox.scss';

function handleChange (props) {
    props.onChange(!props.isSelected);
}

const CheckBox = props => (
    <div
        className={style.container}
    >
        <input
            type="checkbox"
            className={style.checkbox}
            checked={props.isSelected}
            id={props.id}
            onChange={() => handleChange(props)}
        />
        <div className={style.textsContainer}>
            <label
                htmlFor={props.id}
                className={style.label}
            >
                {props.label}
            </label>
            <div
                className={style.description}
            >
                {props.description}
                </div>
        </div>
    </div>
);

CheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    isSelected: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default CheckBox;

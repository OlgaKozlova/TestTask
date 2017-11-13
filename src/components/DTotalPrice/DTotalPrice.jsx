import React from 'react';
import PropTypes from 'prop-types';

import style from './DTotalPrice.scss';
import DCheckBox from '../DCheckBox/DCheckBox.jsx';
import DCalculation from '../DCalculation/DCalculation.jsx';

const DTotalPrice = props => {
    const { calculation, checkbox } = props;

    return (<div className={style.totalprice}>
        <div className={style.title}>{props.title}</div>
        <DCalculation
            {...calculation}
        />
        {
            props.note && <div className={style.note}>{props.note}</div>
        }
        {
            props.checkbox && <DCheckBox
                isSelected={checkbox.isChecked}
                id={checkbox.id}
                label={checkbox.label}
                description={checkbox.description}
                onChange={props.onCheckboxChange}
            />
        }
    </div>);
};

DTotalPrice.propTypes = {
    title: PropTypes.string.isRequired,
    note: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    calculation: PropTypes.shape({
        progress: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
        result: PropTypes.string.isRequired,
    }).isRequired,
    checkbox: PropTypes.shape({
        isChecked: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string
    }),
    onCheckboxChange: PropTypes.func.isRequired
};

DTotalPrice.defaultProps = {
    calculation: null,
    checkbox: null
};

export default DTotalPrice;

import React from 'react';
import PropTypes from 'prop-types';

import style from './DPaymentWay.scss';
import { getClassList } from '../componentsHelper.js';

const DPaymentWay = props => {
    const {text, description, icon} = props;

    return <div
        className={
            getClassList(
            {
                [style.paymentWay]: true,
                [style.selected]: props.isSelected,
                [style.disabled]: props.isDisabled,
                [style.shadowed]: props.isShadowed
            }
        )}
        onClick={
            props.isDisabled
                ? () => {}
                : () => props.onClick(props.value)
        }
    >
        {
            text && <div
                className={style.text}
            >
                {text}
            </div>
        }
        {
            description && <div
                className={style.description}
            >
                {description}
            </div>
        }
        {
            icon && <div
                className={getClassList({
                    [style.icon]: true,
                    [style[props.icon]]: true
                })}
            />
        }
    </div>;
};

DPaymentWay.propTypes = {
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isShadowed: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DPaymentWay;

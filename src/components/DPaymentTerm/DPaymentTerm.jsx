import React from 'react';
import PropTypes from 'prop-types';

import style from './DPaymentTerm.scss';
import { getClassList } from '../componentsHelper.js';

const imageStyles = {
    green: style.green,
    grey: style.grey,
    gold: style.gold
};

const DPaymentTerm = props => {
    return <div
        className={
            getClassList(
            {
                [style.paymentTerm]: true,
                [style.selected]: props.isSelected
            }
        )}
        onClick={() => props.onClick(props.value)}
    >
        <div className={style.term}>
            {props.term}
        </div>
        <div className={style.priceTotal}>
            {props.priceTotal}
        </div>
        <div>
            <span className={style.pricePerMonth}>{props.pricePerMonth}</span>
            <span className={style.measurementPerMonth}>{props.measurementPerMonth}</span>
        </div>
        <div className={getClassList({
            [style.image]: true,
            [imageStyles[props.icon]]: true,
        })} />
    </div>;
};

DPaymentTerm.propTypes = {
    priceTotal: PropTypes.string.isRequired,
    pricePerMonth: PropTypes.string.isRequired,
    measurementPerMonth: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default DPaymentTerm;

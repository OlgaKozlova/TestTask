import React from 'react';
import PropTypes from 'prop-types';

import style from './DPaymentWays.scss';
import DPaymentWay from '../DPaymentWay/DPaymentWay.jsx';
import DCheckBox from '../DCheckBox/DCheckBox.jsx';

import DRow from '../DRow/DRow.jsx';
import DColumn from '../DColumn/DColumn.jsx';

const DPaymentWays = props => (
    <div className={style.selectPaymentWay}>
        <div className={style.title}>{props.title}</div>
        <DRow>
            {
                props.paymentWays.map(paymentWay => (
                    <DColumn large='3' medium='4' small='6' xsmall='12' key={paymentWay.value}>
                        <div className={style.container}>
                            <DPaymentWay
                                value={paymentWay.value}
                                description={paymentWay.description}
                                icon={paymentWay.icon}
                                text={paymentWay.text}
                                isSelected={paymentWay.isSelected}
                                isShadowed={paymentWay.isShadowed}
                                isDisabled={paymentWay.isDisabled}
                                onClick={props.onWaySelected}
                            />
                        </div>
                    </DColumn>
                ))
            }
        </DRow>
        {
            props.checkbox && <DCheckBox
                isSelected={props.checkbox.isChecked}
                id={props.checkbox.id}
                label={props.checkbox.label}
                onChange={props.onCheckboxChange}
            />
        }

    </div>
);

DPaymentWays.propTypes = {
    title: PropTypes.string.isRequired,
    paymentWays: PropTypes.arrayOf(PropTypes.object).isRequired,
    checkbox: PropTypes.oneOfType([PropTypes.shape({
        isChecked: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string
    }), PropTypes.bool]),
    onCheckboxChange: PropTypes.func.isRequired,
    onWaySelected: PropTypes.func.isRequired,
};

export default DPaymentWays;

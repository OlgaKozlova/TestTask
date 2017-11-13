import React from 'react';
import PropTypes from 'prop-types';

import style from './DPaymentTerms.scss';
import DPaymentTerm from '../DPaymentTerm/DPaymentTerm.jsx';
import DCheckBox from '../DCheckBox/DCheckBox.jsx';

import DRow from '../DRow/DRow.jsx';
import DColumn from '../DColumn/DColumn.jsx';

const DPaymentTerms = props => (
    <div className={style.selectPaymentTerm}>
        <div className={style.title}>{props.title}</div>
        <DRow>
            {
                props.paymentTerms.map(paymentTerm => (
                    <DColumn large='3' medium='4' small='6' xsmall='12' key={paymentTerm.value}>
                        <div className={style.container}>
                            <DPaymentTerm
                                value={paymentTerm.value}
                                term={paymentTerm.term}
                                icon={paymentTerm.icon}
                                pricePerMonth={paymentTerm.pricePerMonth}
                                measurementPerMonth={props.measurementPerMonth}
                                priceTotal={paymentTerm.priceTotal + props.measurementTotal}
                                isSelected={paymentTerm.isSelected}
                                onClick={props.onTermSelected}
                            />
                        </div>
                    </DColumn>
                ))
            }
        </DRow>
        {
            props.description && <div className={style.description}>{props.description}</div>
        }
        {
            props.checkbox &&
                <DCheckBox
                    isSelected={props.checkbox.isChecked}
                    id={props.checkbox.id}
                    label={props.checkbox.label}
                    description={props.checkbox.description}
                    onChange={props.onCheckboxChange}
                />
        }
    </div>
);

DPaymentTerms.propTypes = {
    title: PropTypes.string.isRequired,
    measurementTotal: PropTypes.string.isRequired,
    measurementPerMonth: PropTypes.string.isRequired,
    paymentTerms: PropTypes.arrayOf(PropTypes.object).isRequired,
    onTermSelected: PropTypes.func.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    checkbox: PropTypes.oneOfType([PropTypes.shape({
        isChecked: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        description: PropTypes.string
    }), PropTypes.bool]),
    onCheckboxChange: PropTypes.func.isRequired
};

DPaymentTerms.defaultProps = {
    description: false,
    checkbox: false
};

export default DPaymentTerms;

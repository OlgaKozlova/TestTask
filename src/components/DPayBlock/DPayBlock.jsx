import React from 'react';
import PropTypes from 'prop-types';

import style from './DPayBlock.scss';

import DButton from '../DButton/DButton.jsx';
import DPayInfo from '../DPayInfo/DPayInfo.jsx';

const PayBlock = props => (
    <div className={style.payblock}>
        {
            props.button && <DButton
                label={props.button.label}
                onClick={props.onButtonClick}
                isDisabled={props.button.isDisabled}
            />
        }
        <div className={style.infoblock}>
            {
                props.info.map(infoItem => (
                    <DPayInfo
                        key={infoItem.id}
                        icon={infoItem.icon}
                        text={infoItem.text}
                    />
                ))
            }
        </div>
    </div>
);

PayBlock.propTypes = {
    button: PropTypes.oneOfType([PropTypes.shape({
        label: PropTypes.string.isRequired,
        isDisabled: PropTypes.bool.isRequired
    }), PropTypes.bool]),
    onButtonClick: PropTypes.func.isRequired,
    info: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PayBlock;

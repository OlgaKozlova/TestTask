import React from 'react';
import PropTypes from 'prop-types';

import style from './DCalculation.scss';

const Calculation = props => (
    <div className={style.container}>
        {
            props.progress && <span className={style.progress}>{props.progress}</span>
        }
        <span className={style.result}>{props.result}</span>
        <span className={style.measurement}>{props.measurement}</span>
    </div>
);

Calculation.propTypes = {
    progress: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    result: PropTypes.string.isRequired,
    measurement: PropTypes.string.isRequired
};

export default Calculation;

import React from 'react';
import PropTypes from 'prop-types';
import style from './DMain.scss';

import Container from '../DContainer/DContainer.jsx';

const Main = props => (
    <Container>
        <div className={style.main}>
            {props.children}
        </div>
    </Container>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Main;

import React from 'react';
import logo from './header_logo.png';

import style from './DHeader.scss';

const Header = props => (
    <div className={style.header}>
        <div className={style.line} />
        <img className={style.logo} src={logo}/>
    </div>
);

export default Header;

import React from 'react';

import './Sidedrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if (props.show) {
        drawerClasses = 'sideDrawer open';
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li><a href="/">Log In</a></li>
            <li><a href="/">Sign Up</a></li>
            <li><a href="/">Become A Seller</a></li>
        </ul>
    </nav>
    );
}

export default sideDrawer;
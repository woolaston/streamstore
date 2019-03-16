import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import styles from './Toolbar.module.css';


const toolbar = props => (
    <header className={styles.toolbar}>
        <nav className={styles.toolbar__navigation}>
            <div className={styles.toolbar_toggle_button}>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className={styles.toolbar__logo}><a href="/">THE LOGO</a></div>
            <div className={styles.spacer}>
                <form>
                    <input type="text" placeholder="Search..."/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className={styles.toolbar_navigation_items}>
                <ul>
                    <li><a href="/">Become A Seller</a></li>
                    <li><a href="/">Log In</a></li>
                    <li><a href="/">Sign Up</a></li>
                </ul>
            </div>
            
        </nav>
    </header>
);

export default toolbar;
import React from 'react';

import Styles from './Backdrop.module.css'

const backdrop = props => (
    <div className={Styles.backdrop} onClick={props.click}/>
)

export default backdrop;
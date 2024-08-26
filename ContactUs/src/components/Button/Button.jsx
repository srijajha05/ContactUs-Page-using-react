import React from 'react'
import styles from './Button.module.css';

const Button =(props) => {
    
  return (
    <button className={props.isOutline?styles.transparentButton:styles.myButton}>
        {props.icon}
        {props.text}
        
    </button>
      

    
  )
}

export default Button

import React from 'react'

import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



function ContactForm() {
  return (
    <div className={`${styles.contactFormDesign} container`}>
        <div className={`${styles.contact_form}`}>
            <div className={`${styles.buttons}`}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button text="VIA CALL" icon={<IoCall fontSize="24px"/>}/>
            </div>
            <Button 
            isOutline ={true}
            text="VIA EMAIL" icon={<MdEmail fontSize="24px"/>}/>
        </div>
        <div className={`${styles.contact_form_image}`}>

        </div>
      
    </div>
  )
}

export default ContactForm

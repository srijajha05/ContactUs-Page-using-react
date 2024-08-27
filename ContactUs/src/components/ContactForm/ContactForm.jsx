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
            <div>
            <Button 
            isOutline ={true}
            text="VIA EMAIL" icon={<MdEmail fontSize="24px"/>}/>
            </div>
        
        
        <form>
          <div className={styles.form_control}>
            <label htmlfor="Name">Name</label>
            <input type="text" name='name'/>
          </div>
          <div className={styles.form_control}>
            <label htmlfor="email">E-Mail</label>
            <input type="text" name='email'/>
          </div>
          <div className={styles.form_control}>
            <label htmlfor="text">Text</label>
            <textarea name='text' rows="8"/>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"end",
          }}>
          <Button text="SUBMIT"/>
          </div>

        </form>
        
        </div>
        <div className={styles.contactImage}>
          <img src="/images.png" alt="Contact_Us_Image"/>
        </div>
    </div>
  )
}

export default ContactForm

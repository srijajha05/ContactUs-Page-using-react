import React from 'react'

import styles from './ContactHeader.module.css';

function ContactHeader() {
  return (
    <div className={`${styles.pageInfo} container`}>
      <h1>Contact Us</h1>
      <p>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
      </p>

    </div>
  )
}

export default ContactHeader

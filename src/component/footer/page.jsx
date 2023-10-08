import React from 'react'
import styles from './page.module.css'

 const Footer = () => {
  return (

  <footer className= {styles.containerFooter} >
    <p className= {styles.contentFooter}>@2023 MyApp. All rights reserved</p>
    <div className= {styles.imageFooter}>картинки</div>
  </footer>

//<p>@2023 MyApp. All rights reserved</p>

  )
}

export default Footer 

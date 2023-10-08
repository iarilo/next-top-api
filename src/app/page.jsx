import React from 'react'
import styles from './page.module.css'

  const Admin = () => {
  return (
    <div className={styles.containerHome}>
    <main className={styles.mainHome}> 
     <h1 className={styles.tytleHome}> 
      Контент главной страницы 
      </h1>
    

    <div className={styles.containerTextImage}>
    <p className={styles.textHome}>текст</p>
    <h1 className={styles.imageHome} >
      Картинка
    </h1>
    </div>
   

    </main>
    </div>
  )
 }
 export default Admin

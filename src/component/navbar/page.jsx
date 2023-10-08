import Link from "next/link"
import styles from './page.module.css'

const linkBar = [
  {id: 1, title: 'Главная', url:'/'},
  {id: 2, title: 'Админка', url:'/admin'},
  {id: 3, title: 'Блог', url:'/blog'},
  {id: 4, title: 'Контакты', url:'/contact'},
  {id: 5, title: 'Сад и група', url:'/garden_and_group'},
  

]

const NavBar = () => {
  return (
   <nav className={styles.containerNav}>
  <Link href='/' className={styles.logo}>Логотип</Link>  

  <div className={styles.contentLinks}>
  {linkBar.map((elem,index)=>   
   <Link key={index} href={elem.url} 
   >{elem.title}</Link> )
   }
  </div>

</nav> 
 




    
  )
}
export  default NavBar

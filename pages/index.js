import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
   <div className={styles.homeContainer}>
     <Head>
       <title>Home | URCL</title>
     </Head>

     <h1>URCL</h1>

     <footer>Feito pelos comunas</footer>
   </div>
  )
}

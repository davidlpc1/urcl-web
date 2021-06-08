import Head from 'next/head';
import styles from '../styles/pages/Home.module.scss';
import { useState,useEffect } from 'react';
import InstagramOwners from '../src/components/InstagramOwners';
import Manifest from '../src/components/Manifest';

export default function Home() {
  const completeTitle = "Homem Patriota,Capitalismo a vontade";
  const [title,setTitle] = useState("")

  const awaitSeconds = ms => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    async function updateTitle(){
      for(let index = 0;index < completeTitle.length;index++){    
        if(index == 0) setTitle("")
        if(!completeTitle[index]) continue;
        setTitle(old => old + completeTitle[index])
        console.log(title)
        await awaitSeconds(600);
      }
    }

    updateTitle()
  },[]);


  return (
   <div className={styles.homeContainer}>
     <Head>
       <title>Home | URCL</title>
     </Head>

    <header>
     <h1>URCL</h1>
     <p>{title}</p>
    </header>

    <main>
      <Manifest />
      <InstagramOwners />
    </main>

    <footer>
      ISSO TUDO È UMA BRINCADEIRA ,POR FAVOR,NÂO SOMOS UM PARTIDO OU MOVIMENTO.
    </footer>

   </div>
  )
}

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
      <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="100%" height="600px"></iframe>
    </main>


    <footer>
      ISSO TUDO È UMA BRINCADEIRA ,POR FAVOR,NÂO SOMOS UM PARTIDO OU MOVIMENTO.
    </footer>

   </div>
  )
}

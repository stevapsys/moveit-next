import { ExperienceBar } from '../components/ExperienceBar'; 
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges'; 
import { Countdown } from '../components/Countdown'; 
import { ChallengeBox } from '../components/ChallengeBox'; 

import Head from 'next/head';

import style from '../style/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Início | move.it </title>
      </Head>
      <ExperienceBar />
      

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>


      
    </div>
  )
}

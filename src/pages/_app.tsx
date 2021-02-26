import '../style/global.css';
import { useState } from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {

  return ( 
      <ChallengesProvider>
        <CountdownProvider>
          <Component {...pageProps} /> 
        </CountdownProvider>
    </ChallengesProvider>
   
    )
}

export default MyApp

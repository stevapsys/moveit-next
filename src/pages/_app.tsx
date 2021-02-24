import '../style/global.css';
import { useState } from 'react';
import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

  return ( 
    <ChallengesProvider>
          <Component {...pageProps} /> 
    </ChallengesProvider>
    )
}

export default MyApp

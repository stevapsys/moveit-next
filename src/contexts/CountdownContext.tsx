import { createContext, ReactNode, useContext, useState, useEffect } from 'react'; 
import { ChallengesContext } from './ChallengesContext';

interface CountdownContextDate {
            minutes: number; 
            seconds: number; 
            hasFinished: boolean;
            isActive: boolean;
            startCountdown: () => void; 
            resetCountdown: () => void
}


interface CountdownsProviderProps {
    children: ReactNode; 
}

export const CountdownContext = createContext({} as CountdownContextDate)

let countdownTimeout: NodeJS.Timeout; 

export function CountdownProvider( {children}: CountdownsProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext); 
    const [time, setTime] = useState( 25 * 60 );
    const [isActive, setIsActive] = useState(false); 
    const [hasFinished, setHasFinished] = useState(false);

    // Math.floor arrendonda o valor para baixo 
    const minutes = Math.floor(time / 60); 
    const seconds = time % 60; 

    function startCountdown() {
        setIsActive(true); 
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false); 
        setTime(25 * 60); 
        setHasFinished(false); 
    }

    useEffect(() => {
       if (isActive && time > 0) {
                countdownTimeout = setTimeout(() => {
               setTime(time - 1); 
           }, 1000)
       } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge(); 
       }
    }, [isActive, time])


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown, 
        }} >
            {children}
        </CountdownContext.Provider>

    )
}


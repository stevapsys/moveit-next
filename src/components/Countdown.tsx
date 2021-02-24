import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../style/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout; 

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext); 
    const [time, setTime] = useState( 0.05 * 60 );
    const [isActive, setIsActive] = useState(false); 
    const [hasFinished, setHasFinished] = useState(false);

    // Math.floor arrendonda o valor para baixo 
    const minutes = Math.floor(time / 60); 
    const seconds = time % 60; 

    // padStart verifica se nossa string não tem 2 caracteres. Se não tiver, ele joga o 0 à esquerda. Assim, na hora do split, vai se divir em '0' 'X'

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); 
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); 

    function startCountdown() {
        setIsActive(true); 
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false); 
        setTime(0.05 * 60); 
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

    return(
        <div>
            <div className={style.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={style.countdownButton} 
                >
                    Ciclo Encerrado
                </button>

         
            ) : (
                <>
                { isActive ? (
                 <button 
                 type="button" 
                 className={`${style.countdownButton} ${style.countdownButtonActive}`}
                 onClick={resetCountdown}
                 >
                 Abandonar ciclo
                </button>

            ) : (
                <button 
                type="button" 
                className={style.countdownButton}
                onClick={startCountdown}

                >
                Iniciar um ciclo
                </button>
            )}
                </>
            )}

            

            
        </div>
    )
}


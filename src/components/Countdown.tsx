import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext'; 

import style from '../style/components/Countdown.module.css'


export function Countdown() {

    const { 
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown
    } = useContext(CountdownContext); 

    // padStart verifica se nossa string não tem 2 caracteres. Se não tiver, ele joga o 0 à esquerda. Assim, na hora do split, vai se divir em '0' 'X'
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split(''); 
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split(''); 

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


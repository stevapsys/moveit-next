import { ChallengesContext } from '../contexts/ChallengesContext'
import style from '../style/components/CompletedChallenges.module.css'
import { useContext } from 'react';


export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext); 

    return(
        <div className={style.completedChallengesContainer}>
            <span>Desfios completos</span>
            <span>{ challengesCompleted }</span>
        </div>
    )
}
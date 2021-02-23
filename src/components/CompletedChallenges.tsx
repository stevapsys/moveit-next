import style from '../style/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    return(
        <div className={style.completedChallengesContainer}>
            <span>Desfios completos</span>
            <span>5</span>
        </div>
    )
}
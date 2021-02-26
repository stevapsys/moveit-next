import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react'; 
import style from '../style/components/Profile.module.css';




export function Profile() {
    const { level } = useContext(ChallengesContext); 

    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/stevapsys.png" alt="Stephanie Vapsys"/>
            <div>
                <strong>Stephanie Vapsys</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
}
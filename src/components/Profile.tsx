import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react'; 
import style from '../style/components/Profile.module.css';




export function Profile() {
    const { level } = useContext(ChallengesContext); 

    const userName = typeof window !== 'undefined' ? localStorage.getItem('username') : null
    const github = typeof window !== 'undefined' ? localStorage.getItem('github') : null


    return (
        <div className={style.profileContainer}>
            <img src={github} alt={github}/>
            <div>
                <strong>{userName}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
    
}

  
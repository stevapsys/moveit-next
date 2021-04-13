import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react'; 
import style from '../style/components/Profile.module.css';




export function Profile() {
    const { level } = useContext(ChallengesContext); 

    const userName = typeof window !== 'undefined' ? localStorage.getItem('username') : null
    const gitHub = typeof window !== 'undefined' ? localStorage.getItem('github') : null

    const gitHubImage = gitHub + '.png';

    if (gitHub !== "") {

    return (
        <div className={style.profileContainer}>
            <img src={gitHubImage} alt={gitHub}/>
            <div>
                <strong>{userName}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
    } else {
        return (
            <div className={style.profileContainer}>
              <img src="icons/gatinho.png" alt="gatinho"/>
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

  

   
}
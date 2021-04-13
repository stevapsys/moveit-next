import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../style/components/LoginModal.module.css';

export function LoginModal () {
 
const {closeLoginModal, level} = useContext(ChallengesContext); 


  function handleSubmit() {
        let userInput = document.getElementsByTagName('input');
        const username = userInput[0].value; 
        const github = userInput[1].value; 
        const githubImage = 'https://github.com/' + github + '.png'; 

        localStorage.setItem('username', username);
        localStorage.setItem('github', githubImage);

        if ( github == "") {
            localStorage.setItem('github', 'icons/gatinho.png');
        }

        closeLoginModal(); 
      }

      const userLogged = typeof window !== 'undefined' ? localStorage.getItem('username') : null

      if (userLogged !== null) {
        return (
        <div className={style.overlay}>
            <div className={style.container}>
                <strong>Olá, {userLogged}</strong>
               <p>Você está no nível {level}</p>
               <button type="button" className={style.submitButton} onClick={closeLoginModal}>
                    Vamos continuar? 
                </button>
            </div> 
           
        </div> 
        ); 
      } else {
        return (
            <div className={style.overlay}>
                <div className={style.container}>
                    <strong>Bem vindo ao move.it</strong>
                    <div className={style.form}>
                        <form>
                            <div>
                                <label htmlFor="nome">Qual o seu nome?</label>
                                <input className="username" type="text" name="username" placeholder="Teka"  />
                            </div>
                            <div>
                                <label htmlFor="nome">Qual o seu GitHub?</label>
                                <input type="text" name="github" id="" placeholder="stevapsys"/>
                            </div>
                            <div>
                            <button type="submit" className={style.submitButton} onClick={handleSubmit }>Entrar</button>
    
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        )
      }
        
    
        
}
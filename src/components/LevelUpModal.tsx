import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../style/components/LevelUpModal.module.css';

export function LevelUpModal () {
    const { level , closeLevelUpModal} = useContext(ChallengesContext); 
    return (
        <div className={style.overlay}>
            <div className={style.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
        </div>
    )
}
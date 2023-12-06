import {useEffect, useState} from "react";

export const HomeWork1 = (): JSX.Element => {
    const [numb, setNewNumber] = useState(1);
    const [resNumb, setNewResNumber] = useState(0);
    const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
    const rand = (maxNumber: number) => Math.floor((Math.random() * maxNumber) + 1);

    async function longDiceRoll(): Promise<any> {
      let randomNum: number = numb;
      for (let i = 0; i < rand(10); i++){
          randomNum = rand(6);
          setNewNumber(randomNum);
          await timer(300);
      }
      setNewResNumber(randomNum);
    }

    return (
      <>
        <div className={'main'}>
            <p>Решение домашнего задания №1</p>
            <p>На кубике выпало {resNumb}</p>
            <img src={`/react-hometasks/dice/dice${numb}.png`} alt={`Сторона - ${numb}`}/>
            <button className={'buttonHomeOne'} onClick={ () => longDiceRoll()}>Крутить кубик</button>
        </div>
      </>
    )
};

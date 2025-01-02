import { useEffect, useState } from 'react';
import './App.css'
import SingleCard from './components/SingleCard';


//카드 이미지(public 폴더에 있음)
const cardImages = [
  { "src": "/img/helmet-1.png" , matched: false},
  { "src": "/img/potion-1.png" , matched: false},
  { "src": "/img/ring-1.png" , matched : false},
  { "src": "/img/scroll-1.png" , matched : false},
  { "src": "/img/shield-1.png" , matched : false},
  { "src": "/img/sword-1.png" , matched : false},
];

//리엑트 컴포넌트
function App() { 
  //useState를 이용해서 카드 상태를 관리
  const[cards, setCards] = useState([]);
  const[turns, setTurns] = useState(0); //턴 수
  const[choiceOne, setCoiceOne] = useState(null); //첫번째 선택한 카드
  const[choiceTwo, setCoiceTwo] = useState(null); //두번째 선택한 카드
  const[disabled, setDisabled] = useState(false);

  //새 게임 시작(카드 섞기)
  const suffleCards = () => {
                        //...은 카드배열의 모든 요소를 새로운 배열에 복사 (총 2번 12개 카드)
    const suffledCards = [...cardImages, ...cardImages]
                          .sort(() => Math.random() - 0.5)
                          .map((card) => ({...card, id: Math.random(), }));       
    setCoiceOne(null);
    setCoiceTwo(null);           
    setCards(suffledCards);
    setTurns(0);
  };
  console.log(cards,turns); //카드 섞기 확인

  //카드 선택(이미 첫번째 선택했으면 두번째 저장)
  function handleChoice(card){
    choiceOne ? setCoiceTwo(card) : setCoiceOne(card);
  }

  //카드 선택 후 비교하기(두 카드가 같은지확인), [카드선택이 변경시]
   //선택들을 비교하기(useEffect)
   useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
        if (choiceOne.src === choiceTwo.src && choiceOne.id != choiceTwo.id) {
            setCards((prevCards) => {
                return prevCards.map((card) => {
                    if (card.src === choiceOne.src) {
                        return { ...card, matched: true };
                    } else {
                        return card;
                    }
                });
            });
            resetTurns();
        } else {
            setTimeout(() => resetTurns(), 1000); // 1초 후 리셋
        }
    }
}, [choiceOne, choiceTwo]);

//처음 시작시 한번실행
useEffect(()=> suffleCards(), [])

  //선택한 카드들 리셋
  const resetTurns = () => {
    setCoiceOne(null);
    setCoiceTwo(null);
    setTurns(prev => prev + 1);
    setDisabled(false);
  };



  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={suffleCards}>New Game</button>
      <div className='card-grid'>
      {cards.map(card => (
           <SingleCard 
                flipped={card === choiceOne || card === choiceTwo || card.matched} 
                disabled={disabled}
                handleChoice={handleChoice} 
                key={card.id} 
                card={card} 
            />
        ))}
        </div>
        <p>턴수 : {turns}</p>
    </div>
  );
}

export default App
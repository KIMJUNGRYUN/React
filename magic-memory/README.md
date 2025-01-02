# 매직 메모리 게임 만들기

## public 폴더 정리

![public](https://github.com/user-attachments/assets/f4100dd3-4bcf-4f3c-8347-4eb30142b4a4)

```react
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
​
```

`App`

```react
const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  //카드 섞기
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={suffleCards}>New Game</button>
    </div>
  );
}
```

- 뉴게임 클릭시 카드 섞어서 콘솔에 출력
  
![card](https://github.com/user-attachments/assets/d207f777-f4c6-46bd-8c5c-e226680a4a5b)

<hr>

## 화면에 CSS 표시

![new start](https://github.com/user-attachments/assets/d4c63920-47f7-4fba-b0d0-45a43a82777c)

`App 의 buttion 아래에 추가`

```react
 <div className='card-grid'>
        {cards.map(card => (
          <div className='card' key={card.id}>
            <div>
              <img className='front' src={card.src} alt='card front'></img>
              <img className='back' src='/img/cover.png' alt='card back'></img>
            </div>
          </div>
        ))}
      </div>
```

![card](https://github.com/user-attachments/assets/aa7f4090-69c8-4755-957e-a7d9a313df77)

`App.css`

```css
.card-grid {
  margin-top: 40px;
  display: grid ;
  grid-template-columns: 1fr 1f 1f 1f;  //4개씩 배치
  grid-gap: 20px;
}
```

<hr>

## SingleCard 분리 및 CSS

![SINGLE](https://github.com/user-attachments/assets/bffce820-5ec1-4449-af38-e80517b28c36)

`SingleCard.css`

```css
.card {
  position: relative;
}
.card img {
  width: 100%;
  display: block;
  border: 2px solid #fff;
  border-radius: 6px;
}
```

![cards](https://github.com/user-attachments/assets/693ad739-5d3e-478e-80d9-20a9c06ad47c)


`SingleCard.jsx`

```react
import React from 'react';
import './SingleCard.css'; 

const SingleCard = ({card}) => {
  return (
    <div className='card'>
      <div>
        <img className='front' src={card.src} alt='card front'></img>
        <img className='back' src='/img/cover.png' alt='card back'></img>
      </div>
    </div>
  );
};
export default SingleCard;

```

<hr>

## back 이미지 클릭시 카드정보 출력

![card id](https://github.com/user-attachments/assets/adbb9a7b-bbb1-4339-8517-966d46472adb)

`SingleCard`

```react
const SingleCard = ({ card }) => {
  function handleClick() {
    console.log(card)
  }
  return (
    <div className='card'>
      <div>
        <img className='front' src={card.src} alt='card front'></img>
        <img onClick={handleClick} className='back' src='/img/cover.png' alt='card back'></img>
      </div>
    </div>
  );
};
```

<hr>

## App에서 선택 카드 비교

![card incorret](https://github.com/user-attachments/assets/18aecf5e-9613-4a5c-be43-d432dc2b2db6)

```react
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  //카드 섞기
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };
  //카드 선택시 기억하기
  function handleChoice(card) {
    //console.log(card);
    choiceOne ? setChoiceTwo(?) : setChoiceOne(?);
  }
  //선택들을 비교하기(useEffect)
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === ?) {
        console.log('카드를 맞췄어요!');
        resetTurn();
      } else {
        console.log('틀렸네요.');
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prev => prev + 1);
  };
```

<hr>

## matched 추가 매치했을때 체크

- matched: false를 처음에 다 주고 맞을때 마다 매치된 카드들의 matched: true 수정.

```react
const cardImages = [
  { "src": "/img/helmet-1.png", matched: false },
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
];
```

```react
  //선택들을 비교하기(useEffect)
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        console.log('틀렸네요.');
        resetTurn();
      }
    }
```

![i](https://github.com/user-attachments/assets/2849cab4-4a68-47e6-96c5-84be1eede4fe)

- 매치 될때마다 matched:true 가 늘어남.

<hr>

## 화면에 표시

![stock](https://github.com/user-attachments/assets/079cac09-0a0a-4faf-b817-90baf3d73427)

`3가지 경우`
- 1. 첫번째 선택
  2. 두번쨰 선택
  3. 두개가 맞을 경우 matched:true일 경우 그림을 뒤집어 표시 => flipped

`App`

```react
 <SingleCard
            handleChoice={handleChoice}
            card={card}
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
```

```SingleCard
  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img className='front' src={card.src} alt='card front'></img>
        <img onClick={handleClick} className='back' src='/img/cover.png' alt='card back'></img>
      </div>
    </div>
  );
```

`SingleCard.css`

```css
/* front of card - the picture */
.card .front {
  transform: rotateY(90deg);
  position: absolute;
}
.flipped .front {
  transform: rotateY(0deg);
}
​
```

## 틀렸을 경우 1초 뒤 원 위치

- 틀렸을 경우 콘솔에 "틀렸네요" 대신에 1초의 대기시간 후 진행 하도록 수정.

```react
setTimeout(() => resetTurn(), 1000);
```

## CSS 효과 넣기

- fliped 클래스가 들어갈때 약간의 시간 0.2s 동안에 보여지도록 하고, 다시 안보여 질때도 반대로 시간을 주어서 뒤집기.

```css
/* front of card - the picture */
.card .front {
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
}
.flipped .front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}

/* back of card - cover */
.card .back {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}
.flipped .back {
  transform: rotateY(90deg);
  transition-delay: 0s;
}
​```

## 틀렸을경우 바로 선택하지 못하게 하기

- 현재는 틀렸을 경우에도 다른 카드를 선택해서 뒤집을수 있지만, 틀렸을 경우 다시 안보이게 되돌아간 후 다른 카드를 선택할 수 있도록 변경.

`App`

```react
useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
```

```react
const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prev => prev + 1);
    setDisabled(false);
  };
```

```react
   <SingleCard
            handleChoice={handleChoice}
            card={card}
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
```

`SingleCard`

```react
 function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }
```

<hr>

## 하단에 턴수 표시하기

- 1.하단에 몇번째 선택해서 맞췄는데 턴수 보여주기

![turn](https://github.com/user-attachments/assets/a79b8fed-a3c9-491e-b52b-23156782c32f)


```react
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
export default App;
```

 - 2.페이지 시작시 새 게임을 시작하고 선택은 초기화(null)로 함.

```ract
  //처음 게임은 자동으로 시작
  useEffect(() => {
    shuffleCards();
  }, []);
```

```react
  //카드 섞기
  const shuffleCards = () => {
    ...
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };
```





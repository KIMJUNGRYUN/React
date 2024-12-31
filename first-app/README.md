## React Pratice

# First-App
`index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- 페비콘:화면탭 아이콘  -->
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>첫 리액트</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

![n](https://github.com/user-attachments/assets/8e291d0f-84eb-432f-8960-b22d1f1fabef)


```html
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// index.html id='root'에 아래의 App.jsx 를 화면표시
createRoot(document.getElementById("root")).render(<App />);
```

![first](https://github.com/user-attachments/assets/98918ec8-ca2c-419a-9712-77b06fa965b6)

<hr>

# js로 html 표시

![time](https://github.com/user-attachments/assets/aa7c24b0-851f-4443-85d7-7e12d4a70540)

```js
function App() {
  return React.createElement("div", null, [
    React.createElement("h1", null, "처음 앱"),
    React.createElement("p", null, `현재 시간 : ${new Date().toLocaleString()}.`),
    React.createElement("small", null, "Copyright Footer Text")
  ]);
}
```

`시간 업데이트`

```js
setInterval(function () {
  root.render(React.createElement(App));
}, 1000);
```

<hr>

# JSX
- JSX(JavaScript XML)는 Javascript에 XML을 추가한 확장한 문법이다. 
- JSX는 리액트로 프로젝트를 개발할 때 사용되므로 공식적인 자바스크립트 문법은 아니다. 
- 브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환된다.
- JSX는 하나의 파일에 자바스크립트와 HTML을 동시에 작성하여 편리하다.

**JSX 문법 : 반드시 부모 요소 하나가 감싸는 형태여야 한다.**


​```react
function App() {
  return (
    <>
      <h1>처음 앱</h1>
      <p>현재 시간 : {new Date().toLocaleString()}.</p>
      <small>Copyright Footer Text</small>
    </>
  );
}
```

![time](https://github.com/user-attachments/assets/6c78573f-ffdd-4010-b028-7aa76392c445)


**css추가(import로 불러오기)**

![css](https://github.com/user-attachments/assets/75a09159-0df4-434c-9491-ca93e6f792c7)

```css
import './index.css';

      <h1 className="special">처음 앱</h1>
```

![css1](https://github.com/user-attachments/assets/544bdb69-91b4-4cf3-b7f8-737cfcf5f5a1)

<hr>

# 컴포넌트
- 컴포넌트: ui를 재사용 가능한 개별적인 여러 조각

```js

function App() {
  return (
    <>
      <OurHeader />
      <TimeArea />
      <Footer />
    </>
  );
}

function OurHeader() {
  return <h1 className="special">처음 앱</h1>;
}
```

```js
setInterval(function () {
  root.render(<App/>);
}, 1000);
```

**컴포넌트를 재활용하여 여러개를 사용해 보자**
![assa](https://github.com/user-attachments/assets/73066d11-3a56-43d4-a94b-88d3b24ce45b)

<hr>

# Props 를 통해 컴포넌트에게 값 전달
- props 는 properties 의 줄임말.
 - 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props 를 사용.

​```js
 <Footer cr="부산IT교육센터" />
function Footer(props) {
  return <small>Copyright : {props.cr}</small>;
}
```
   
![copy](https://github.com/user-attachments/assets/d37b2941-236a-45ca-aa40-4d9a55a7997c)

<hr>

**Pet 컴포넌트 만들어보기**
```js
      <OurHeader />
      <TimeArea />
      <ul>
        <Pet name="라이언" species="cat" age="5" />
        <Pet name="울버린" species="dog" age="2" />
        <Pet name="토끼" species="rabbit" age="3" />
      </ul>
      <Footer cr="부산IT교육센터" />
```

```js
function Pet(props) {
  return <props> {name}은 {species}이고 {age}살 이다.</?>;
}
```

![props](https://github.com/user-attachments/assets/41686a2d-b322-427d-9179-e2abb359d059)

**eslint가 props 타입이 없다고 에러 발생**
 - ruls 맨 아래쪽에 "react/prop-types":"off" 넣기

![error](https://github.com/user-attachments/assets/9396d00e-603b-4311-ab0f-b5a948c82b75)

<hr>

# JSX 반복문 배열 데이터 입력

```html
   <ul>
        {[
          <div>헬로우</div>,
          <div>헬로우</div>,
          <div>헬로우</div>
        ]}
```

![html](https://github.com/user-attachments/assets/8af18f98-7255-4c0d-8572-96b064df0664)

- 아래 pet 데이터 배열을 사용해 화면에 list를 표시하기
  - Pet 컴포넌트를 사용하기

`index.js`

```js
const pets = [
  { name: "줄리아", species: "cat", age: "5", id: 123456789 },
  { name: "라이언", species: "dog", age: "3", id: 987654321 },
  { name: "플로피", species: "rabbit", age: "2", id: 123123123 },
  { name: "길동", species: "cat", age: "1", id: 456456456 },
  { name: "진도", species: "dog", age: "6", id: 789789789 }
];
      <ul>
        {pets.map(function (pet) {
          return <Pet name={} species={} age={} />;
        })}
      </ul>
```

**워닝 처리, 리스트 li에 유니크한 ket 값이 필요**
![eor](https://github.com/user-attachments/assets/4f51f99e-fc66-4428-9482-08371d288709)

```js
key={pet.id} 추가
```

```js
 {pets.map(pet => <Pet name={} species={} age={} />)}
```

<hr>

# useState(Hook)
- state란?
 - State는 리액트에서 앱의 유동적인 데이터를 다루기 위해 있는 객체.
 - 일반적으로 리액트에서는 유동적인 데이터는 변수에 담아서 사용하지 않고 useState() 라는 리액트 함수를 사용하여 State라는 저장공간에 담아 사용.
- state를 사용하는 이유
  - State는 변경되면 자동으로 재렌더링 된다. (변수는 변경되어도 자동 재렌더링이 안됨)

**1초에 한번씩 시간이 갱신되는 것을 useState로 만들기**

```js
function TimeArea() {
  const [time, setTime] = useState(new Date().toLocaleString());

  setTimeout(function () {
    setTime(new Date().toLocaleString());
  }, 1000);

  return <p>현재 시간: {time}</p>;
}
```

- state는 어떤 일을 할까?
  - setState()는 컴포넌트의 state 객체에 대한 업데이트를 실행. state가 변경되면, 컴포넌트는 리렌더링됨.

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
- 시간이 1초마다 갱신됨 확인!

<hr>

# useState로 이벤트 (버튼클릭 등..) 처리

![first1](https://github.com/user-attachments/assets/f9b6f5b8-8e1f-4dc8-8a10-208c419f5e1d)

```js
function LikeArea() {
  const likeCount = 0;
  return (
    <>
      <button>추천하기</button>
      <button>비추하기</button>
      <h2>이 페이지를 {likeCount} 번 추천 했습니다.</h2>
    </>
  );
}
```

```js
   <OurHeader />
      <LikeArea />
      <TimeArea />
```

![recommend](https://github.com/user-attachments/assets/ae8a4bd3-6521-4be1-a12c-597aa07a04cf)

```js
function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLike() {
    setLikeCount(prev => prev + 1);
  }
  function decreaseLike() {
    if(likeCount > 0){
    setLikeCount(likeCount -1);
  }
}
  return (
    <>
      <button onClick={increaseLike}>추천하기</button>
      <button onClick={ descreaseLike}>비추하기</button>
      <h2>이 페이지를 {likeCount} 번 추천 했습니다.</h2>
    </>
  );
}
```

<hr>

# useState로 Form 데이터 추가-1
- 폼에 Pet 추가 컴포넌트
```js
function AddPetForm() {
  return (
    <form>
      <fieldset>
        <legend>새 PET 을 추가하기</legend>
        <input placeholder="이름" />
        <input placeholder="종류" />
        <input placeholder="나이" />
        <button>펫 추가</button>
      </fieldset>
    </form>
  );
}
```

![pet](https://github.com/user-attachments/assets/fb771aab-3678-409f-9517-09184d9cd37d)

- 펫추가 버튼을 누를때(submit 이벤트) handleSubmit 함수 실행

```js
function AddPetForm() {
  function handleSubmit(e) {
    e.preventDefault();
    alert('펫추가 클릭함!');
  }
  return (
    <form onSubmit={ ? }>
      <fieldset>
        <legend>새 PET 을 추가하기</legend>
        <input placeholder="이름" />
        <input placeholder="종류" />
        <input placeholder="나이" />
        <button>펫 추가</button>
      </fieldset>
    </form>
  );
}
```

<hr>

# useState로 Form 데이터 추가-2
- pets 배열을 useState를 사용해서 업데이트  setPets를 사용가능하게 수정.

```js
function App() {
  const [pets, setPets] = useState([
    { name: "줄리아", species: "cat", age: "5", id: 123456789 },
    { name: "라이언", species: "dog", age: "3", id: 987654321 },
    { name: "플로피", species: "rabbit", age: "2", id: 123123123 },
    { name: "길동", species: "cat", age: "1", id: 456456456 },
    { name: "진도", species: "dog", age: "6", id: 789789789 }
  ]);
  return (
```

- 여기서 이 setPets (업데이트)를 AddPetForm 함수에서 사용하수 있게 props 를 이용해 넘긴다.

```js
<AddPetForm setPets={setPets}/>
```

``js
function AddPetForm(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.setPets(prev => prev.concat({ name: '펭수', species: 'dog', age: 7, id: 123456 }));
  }
```

![pets3](https://github.com/user-attachments/assets/fd5ee58d-dc61-4e0d-9c8a-554332bf9e8a)

<hr>

# useState로 Form 데이터 추가-3
- `addPetForm` 컴포넌트의 `JSX input` 의 값(value)가 변경 되었을때 이벤트 (onChage) 일때state를 이용해 값을 자동변경한다.

```JS
function AddPetForm(props) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();
    props.setPets(prev => prev.concat({ name: name, species: species, age: age, id: new Date() }));
    setName("");
    setSpecies("");
    setAge("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새 PET 을 추가하기</legend>
        <input value={name} onChange={e => setName(e.target.value)}  placeholder="이름" />
        <input value={} onChange={e => setSpecies()} placeholder="종류" />
        <input value={} onChange={e => setAge()} placeholder="나이" />
        <button>펫 추가</button>
      </fieldset>
    </form>
  );
}
```

![펭수](https://github.com/user-attachments/assets/325e899f-eceb-4911-ba1d-c4e5e6bd7ac6)
![펭수2](https://github.com/user-attachments/assets/0e0a17a8-5aa7-41db-98c9-5b7bfda98d4b)

<hr>

# 삭제 기능 추가

![삭제](https://github.com/user-attachments/assets/14691ac3-9d98-4c14-b4cf-9bb992c7289d)

```js
function Pet(props) {
  function handleDelete(){
    alert('삭제버튼클릭!');
  }
  return (
    <li>{props.name}은 {props.species}이고 {props.age}살 이다.
      <button onClick={handleDelete}>삭제</button>
    </li>
  )
}
```


- 실제 데이터를 삭제하기 위해 pets를 업데이트하는 setPets를 Pet의 props로 작성.

```js
<Pet setPets={setPets} id={pet.id}
```

```js
function Pet(props) {
  function handleDelete() {
    props.setPets(prev => prev.filter(pet => pet.id !==  props.id));
  }
  ...
}
```

![캡처](https://github.com/user-attachments/assets/c6c3c664-0c9d-4699-abee-81fa93515470)

<hr>

# useEffect를 사용해 데이터를 localStorage에 저장해서 불러오기
- 현재는 새로고침할때마다 앱이 초기화 되는데 실제 앱은 DB에 저장해 마지막 상태가 업데이트 되어야 한다.
- 데이터의 영속성 persistence 유지
 - 영속성(persistence)은 데이터를 생성한 프로그램의 실행이 종료되더라도 사라지지 않는 데이터의 특성을 의미
- 우선 웹브라이저 localstorage에 저장하여 persistence 를 유지

```js
import React, { useState, useEffect } from 'react';
```

- 우선 초기의 pet 데이터를 모두 지우고 usetEffect 를 사용해서 2가지 경우 
  - 1.처음 앱 실행시 데이터 불러오기
  - 2.pets 수정시 데이터를 로컬에 저장하기

```js
function App() {
  const [pets, setPets] = useState([]);
  // 처음 한번만 실행됨
  useEffect(() => {},[])
  // pets가 수정될때마다 실행됨
  useEffect(() => {},[pets])
  return (
```

- 1. 앱이 처음 실행될때  로컬 데이터 불러오기

```js
  useEffect(() => {
    if (localStorage.getItem("PetData")) {
      setPets(JSON.parse(localStorage.getItem("PetData")));
    }
  }, []);
```

- 2. pets 수정시 데이터를 로컬에 저장하기

```js
  // pets가 수정될때마다 실행됨
  useEffect(() => {
    localStorage.setItem("PetData", JSON.stringify(pets));
  }, [pets]);

[React Hooks:useEffect() 함수]https://xiubindev.tistory.com/100
​![ㅠㅔ추](https://github.com/user-attachments/assets/eb06e1b3-56f2-4bdd-97b0-f178084b2285)

```

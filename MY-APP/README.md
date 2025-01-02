## React Pratice

# [게임] 구구단 함수 컴포넌트

```react
import React from 'react'

const Gugufunction = () => {
  return (
    <div>
      구구단함수
    </div>
  )
}

export default Gugufunction
```

![구구단](https://github.com/user-attachments/assets/16e01692-a931-4e14-a77f-bc1c46bac5dc)

`index.js 수정`

```react
  <React.StrictMode>
    <Gugufunction />
  </React.StrictMode>
```

`state 대신 useState를 사용 (HOOK)`

```react
import { useState } from 'react';
```

```react
 const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
```

```react
 const submit = (e) => {};

  return (
    <>
      <div>
        {first} 곱하기 {second} 는?
      </div>
      <form onSubmit={submit}>
        <input type='number' value={value} onChange={(e) => setValue(e.target.value)} />
        <button>입력!</button>
      </form>
      <div>
        {result} 점수 : {score}
      </div>
    </>
  );
```
- submit 함수도 수정.

```react
 const submit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setScore((prev) => prev + 1);
    } else {
    }
  };
​```


- 초기값을 null로 inputEl 을 useRef 로 객체 생성

```react
  const inputEl = useRef(null);
```

- 태그의 속성 ref 에 변수명을 입력

```react
<input ref={inputEl}
```

- 실제 객체를 선택시 .current를 사용한다.

```react
inputEl.current.focus();
```

![곱하기](https://github.com/user-attachments/assets/84a85904-b86c-434a-8e16-10ce29374cdf)

<hr>

# 번외(Chatgpt 구구단 만들어보기)

```react
npx create-react-app gugudan
cd gugudan
npm install --save react-bootstrap
```

```react
import React, { useState } from 'react';

const Gugudan = () => {
  const [dan, setDan] = useState(2); // 기본 단을 2로 설정

  const handleDanChange = (e) => {
    setDan(Number(e.target.value));
  };

  return (
    <div>
      <h1>구구단</h1>
      <label>
        단 선택: 
        <select value={dan} onChange={handleDanChange}>
          {[...Array(9).keys()].map((num) => (
            <option key={num + 2} value={num + 2}>
              {num + 2}
            </option>
          ))}
        </select>
      </label>
      <div>
        <h2>{dan}단</h2>
        <ul>
          {[...Array(9).keys()].map((num) => (
            <li key={num}>
              {dan} x {num + 1} = {dan * (num + 1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gugudan;

// App.js

```


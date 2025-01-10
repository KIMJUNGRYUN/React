## Github finder 프로젝트

# 프로젝트 만들기
- 깃허브-파인드 프로젝트 생성

```react
$ npx create-react-app github-finder
```

![Github](https://github.com/user-attachments/assets/5f584eaa-55d7-4c08-b2c8-24792b5c6d94)

<hr>

# 테일윈드 CSS와 데이지UI 적용
[Tailwind css](https://tailwindcss.com/docs/guides/create-react-app)

- 테일윈드 CSS 설치하기 (-D 개발에만 적용)

```react
npm install -D tailwindcss
```

- 설정 파일 만들기 (명령 후 js파일 생성됨)

```react
npx tailwindcss init
```

![tailwind](https://github.com/user-attachments/assets/c59ef10c-8681-4015-b289-be04ef52d122)

- 테일윈드.config.js

```react
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- index.css 적용하기

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- 데이지 UI 적용하기
[daisyUI](https://daisyui.com/)

```react
npm i -D daisyui
```

- 테일윈드 설정파일에 데이지 UI 적용하기(tailwind.config.js)

```css
plugins: [require("daisyui")],
```

- App.js

```react
function App() {
  return (
    <div className="bg-purple-500">
      <h1 className='text-xl'>헬로우 월드!</h1>
      <button className="btn">클릭!</button>
    </div>
  );
}
```

![test](https://github.com/user-attachments/assets/5f540e32-bb07-448f-9a93-e123757de96a)

- 데이지 UI 테마 설정하기
[daisyUI themes](https://daisyui.com/docs/themes/)

- 컵케익 테마 적용해보기

```react
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
```

- index.html

```react
<html lang="ko" data-theme="cupcake">
```

![hello word](https://github.com/user-attachments/assets/35060945-35c5-4a0f-8870-c7855b0058ac)

- 리엑트 emmit 설정, json 설정 파일에 넣기

```react
"emmet.includeLanguages": { "javascript": "javascriptreact" }
```

<hr>

# 네브바
- 리액트 라우터, 아이콘 프로젝트에 추가

```react
$ npm i react-router-dom react-icons
```

![layout](https://github.com/user-attachments/assets/c49e5dbe-eb4d-431c-af7a-cf8e63691721)

- 컴포넌츠 > 레이아웃 > Navbar.jsx

```react
import React from 'react'

function Navbar() {
  return (
    <div>
      
    </div>
  )
}

export default Navbar
```

```react
function App() {
  return (
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main>Content</main>
      </div>
  );
}
```

![finder](https://github.com/user-attachments/assets/53baaab0-1183-49e1-bd36-b47454d272aa)


```react
import PropTypes from 'prop-types'
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Navbar({ title }) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
			<div className='container mx-auto'>
				<div className='flex-none px-2 mx-2'>
					<FaGithub className='inline pr-2 text-3xl' />
					<Link to='/' className='text-lg font-bold align-middle'>
						{ title }
					</Link>
				</div>

				<div className='flex-1 px-2 mx-2'>
					<div className='flex justify-end'>
						<Link to='/' className='btn btn-ghost btn-sm rounded-btn'>
							Home
						</Link>
						<Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
							About
						</Link>
					</div>
				</div>
			</div>
		</nav>
  );
}


// Navbar.defaultProps = {
//     title: 'Github Finder',
// };

Navbar.propTypes = {
    title: PropTypes.string,
};

export default Navbar
```


```react
//프랍스 타이틀을 입력 안했을때 기본 깃허브 파인드로 설정
 Navbar.defaultProps = {
//     title: 'Github Finder',
// };

// 프랍스 title 타입은 문자열이어야 한다.
Navbar.propTypes = {
    title: PropTypes.string,
};

```

# Footer

![footer](https://github.com/user-attachments/assets/6814bcbf-280a-4070-9a27-e04aa3614d43)

```react
function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <svg
          width='50'
          height='50'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
          className='inline-block fill-current'
        >
        </svg>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
```


![content](https://github.com/user-attachments/assets/eb1b07f9-b869-4305-8572-6b63c9229ee6)

<hr>

# 페이지 라우트

![pageRoute](https://github.com/user-attachments/assets/57028ec6-8f9b-4997-9d68-225ffe9d9669)

- About.jsx

```react
function About() {
	return (
		<>
			<h1 className='text-6xl mb-4'>Github Finder</h1>
			<p className='mb-4 text-2xl font-light'>
				깃허브 사용자를 찾고 프로파일을 확인할 수 있는 리엑트 앱입니다. 나의 블로그 주소는 다음과 같습니다.
				<strong>
					<a href='https://blog.naver.com/drv983'> 내 블로그</a>
				</strong>
				.
			</p>
			<p className='text-lg text-gray-400'>
				Version <span> 1.0.0</span>
			</p>
		</>
	);
}

export default About;
```

- Home.jsx

```react
function Home() {
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}

export default Home;
```

- 요청 주소가 없을경우 NotFound.

```react
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className='hero'>
			<div className='text-center hero-content'>
				<div className='max-w-lg'>
					<h1 className='text-8xl font-bold mb-8'>Oops!</h1>
					<p className='text-5xl mb-8'>404 - Page Not Found!</p>
					<Link className='btn btn-primary btn-lg' to='/'>
						<FaHome className='mr-2' />
						Back To Home
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
```

- `라우트 설정`
  - 1.BrouserRouter (Router)가 최 상단에 필요.
  - 2.<Route path='/' 를 감싸는 <Routes>가 필요.
  - 3.<Route path='/요청주소' element={표시할페이지} /> 로 라우트 설정.

```react
function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
```

<hr>

# 깃허브 API로 유저검색, 토큰인증

- Postman으로 깃허브 API 테스트

![GIT API](https://github.com/user-attachments/assets/673af8e9-a91a-44cd-9f58-86084989dab1)

![GIT ID API](https://github.com/user-attachments/assets/7ba6e9f4-8f0e-464d-a8f7-d8700eeb513d)

- 깃허브 api/search/users?q=검색어 
- 검색어에 해당하는 깃허브 유저들을 찾음.

![git search find](https://github.com/user-attachments/assets/1c9bb818-9e1f-4e13-8d78-aa87a53992cb)

- 토큰 발급받기
  - setting > developer setting > tokens
    - repo , user 선택하기

- 중요한 정보들을 따로 저장할 수 있는 .env 파일 만들기.

![git](https://github.com/user-attachments/assets/0133b690-3408-441d-aaed-4d651e722df4)

- .env 파일은 .gitignore에 추가하기(깃허브에 공개하지 않도록)

```react
REACT_APP_GITHUB_URL =https://api.github.com
REACT_APP_GITHUB_TOKEN=깃허브의 본인 토큰
```

- 변수명 앞에 REACT_APP_ 붙여준다.
- 사용시에는 `${REACT_APP_GITHUB_URL}` 으로 코드 작성.

<hr>

# 유저 리스트
- components 안에 users 폴더 > UserResult.jsx 파일 생성

![USER](https://github.com/user-attachments/assets/f95b8281-7230-4f9f-8227-1c8634dc9455)

- 검색한 유저 결과 보여주기.

```react
import { useEffect } from 'react';

function UserResults() {
	useEffect(() => {
		fetchUsers();
	}, []); //앱 시작시 실행됨

	const fetchUsers = async () => {
		//console.log(`${process.env.REACT_APP_GITHUB_URL}/users`);
		const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
			headers: {
				Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		});
		const data = await response.json();

		console.log(data);
	};
	return <div>유저결과</div>;
}

export default UserResults;
```

- Home.jsx

```react
function Home() {
	return (
		<>
			<UserResults />
		</>
	);
}
```

- 시작 home 화면에 '유저결과'글자와 콘솔에 깃허브API에서 fetch로 가져온 데이터 출력.
-
- ![api conso](https://github.com/user-attachments/assets/38d148d3-277d-4b0e-b8f4-e7c10e9452d6)

```react
function UserResults() {
	const [users, setUsers] = useState([]);
...
consol.log(data) => setUsers(data);
```
- 화면에 출력할때 map메서드로 user 의 이름 user.login을 화면에 표시.
- 이때 css로 화면이 작을때 1 등분, 조금크면 2등분 , 3등분 , 4등분.
- [tailwindscss](https://tailwindcss.com/docs/grid-template-columns)

```react
return (
		<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
			{users.map((user) => (
				<h3>{user.login}</h3>
			))}
		</div>
	);
```

![taild](https://github.com/user-attachments/assets/d16df2cb-3753-47c2-9a4a-6cab2f447820)

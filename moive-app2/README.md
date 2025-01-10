# Api 활용 영화 사이트 2

## 폰트적용
[눈누]https://noonnu.cc/index

`index.css`
```css
@font-face {
	font-family: 'Pretendard-Regular';
	src: url(./assets/fonts/Pretendard-Regular.woff2);
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	background-color: #101010;
	color: #fff;
	font-family: 'Pretendard-Regular', sans-serif;
}
```

<hr>

## 네브바 컴포넌트

![navbar](https://github.com/user-attachments/assets/cbc9721f-d743-4707-bcd6-167fc88ed078)

![배치](https://github.com/user-attachments/assets/1cffe56d-368c-44da-a3a8-75bd9f550f08)

`Navbar`
```react
import Fire from '../../assets/fire.png';
import Star from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';
import './Navbar.css';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<h1>MovieApp</h1>

			<div className='navbar_links'>
				<a href=''>
					인기순
					<img className='navbar_emoji' src={Fire} alt='fire emoji' />
				</a>
				<a href=''>
					평점순
					<img className='navbar_emoji' src={Star} alt='star emoji' />
				</a>
				<a href=''>
					최신순
					<img className='navbar_emoji' src={Party} alt='party emoji' />
				</a>
			</div>
		</nav>
	);
}
```

`Navbar.css`
.navbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	border-bottom: 1px solid #e6e6e6;
}

.navbar > h1 {
	font-size: 30px;
	color: #ffe400;
}

.navbar_links {
	display: flex;
	align-items: center;
}

.navbar_links > a {
	display: flex;
	align-items: center;
	font-size: 20px;
	font-weight: 500;
	color: #fff;
	text-decoration: none;
	padding: 0 15px;
}

.navbar_emoji {
	width: 25px;
	height: 25px;
	margin-left: 7px;
}
​```

`App`
```react
export default function App() {
	return (
		<div className='app'>
			<Navbar />

			<main>Main Content</main>
		</div>
	);
}
​```

<hr>

## MovieList 컴포넌트 만들기

![MovieList](https://github.com/user-attachments/assets/ff2dab24-e839-4edb-814b-88cf1521b9d0)

```react
import "./MovieList.css";
import Fire from '../../assets/fire.png';

export default function MovieList() {

	return (
		<section className='movie_list'>
			<header className='align_center movie_list_header'>
				<h2 className='align_center movie_list_heading'>
					인기순 <img src={Fire} alt='fire emoji' className='navbar_emoji' />
				</h2>

				<div className='align_center movie_list_fs'>
					<ul className='align_center movie_filter'>
						<li className='movie_filter_item active'>8+ Star</li>
						<li className='movie_filter_item'>7+ Star</li>
						<li className='movie_filter_item'>6+ Star</li>
					</ul>

					<select name='' id='' className='movie_sorting'>
						<option value=''>SortBy</option>
						<option value=''>Date</option>
						<option value=''>Rating</option>
					</select>
					<select name='' id='' className='movie_sorting'>
						<option value=''>Ascending</option>
						<option value=''>Descending</option>
					</select>
				</div>
			</header>

			<div className='movie_cards'>
				
			</div>
		</section>
	);
};
```

`App.jsx`

- 앱에 추가

```react
export default function App() {
	return (
		<div className='app'>
			<Navbar />

			<MovieList />
		</div>
	);
}
```

![MovieAppo](https://github.com/user-attachments/assets/449fb1b6-6477-48a2-bb79-af9ef74c0ab1)

- index.css에 공통저긍로 사용할 많이 쓰는 클래스 입력(세로 가운데 정렬)

```css
.align_center {
	display: flex;
	align-items: center;
}
```

- MovieList.css에 순서대로 하나씩 넣기

```css
.movie_list_header {
    padding: 10px 30px;
    justify-content: space-between;
    margin-bottom: 5px;
}

.movie_list_heading {
    font-size: 26px;
    color: #ffe400;
}

.movie_filter {
    list-style: none;
    font-size: 16px;
}

.movie_filter_item {
    padding: 5px 10px;
    cursor: pointer;
}

.movie_filter_item.active {
    border-bottom: 1px solid #e6e6e6;
    font-weight: 500;
}

.movie_sorting {
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    font-family: inherit;
    height: 30px;
    padding: 0 5px;
    margin: 0 10px;
}

.movie_cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
```

![csspower](https://github.com/user-attachments/assets/40e8a19a-d1eb-4f14-8f03-9e244e590308)


<hr>

## MovieCard 컴포넌트

![MovieCard](https://github.com/user-attachments/assets/6437ab6b-7935-41ac-aafe-89fdb1df735a)

```react
import './MovieCard.css';
import Star from '../../assets/star.png';

export default function MovieCard() {
	return (
		<a className='movie_card'>
			<img
				src='https://t1.daumcdn.net/movie/947a0d62f2772aa0f5c73b86b631779ef1183879'
				alt='movie poster'
				className='movie_poster'
			/>

			<div className='movie_details'>
				<h3 className='movie_details_heading'>플래쉬</h3>
				<div className='align_center movie_date_rate'>
					<p>2023-06-14</p>
					<p className='align_center'>
						평점
						<img src={Star} alt='rating icon' className='card_emoji' />
					</p>
				</div>
				<p className='movie_description'>
					빛보다 빠른 스피드, 물체 투과, 전기 방출, 자체 회복, 천재적인 두뇌까지 갓벽한 능력을
					자랑하지만 존재감은 제로, 저스티스 리그에서 궂은일을 도맡아 하는 히어로 ‘플래시’. 어느 날
				</p>
			</div>
		</a>
	);
};
```

- MovieList 아래에 MovieCard를 추가.

```react
			<div className='movie_cards'>
				<MovieCard />
			</div>
		</section>
	);
};
```

- css가 없기 때문에 크키가 크다. (css 넣기)

```css
.movie_card {
    width: 200px;
    height: 300px;
    margin: 15px;
    overflow: hidden;
    border-radius: 10px;
    color: #fff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
    position: relative;
    transition: all 0.2s ease-in-out;
}

.movie_card:hover {
    transform: scale(1.08);
}

.movie_poster {
    width: 100%;
    height: 100%;
}

.movie_details {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    display: flex;
    flex-direction: column;
    justify-content: end;
    opacity: 0;
    transition: all 0.2s ease-in-out;
}

.movie_card:hover .movie_details {
    opacity: 1;
}

.movie_details_heading {
    font-size: 16px;
    color: #ffe400;
}

.movie_date_rate {
    justify-content: space-between;
    font-size: 12px;
    font-weight: 500;
    margin: 5px 0;
    color: #ffe400;
}

.card_emoji {
    width: 20px;
    height: 20px;
    margin-left: 5px;
}

.movie_description {
    font-size: 12px;
    font-style: italic;
}
```
![flesh](https://github.com/user-attachments/assets/f0b1bdc5-6185-41ae-8f9f-486e879ca27a)

<hr>

## API 요청하기
[TMDB]https://www.themoviedb.org/?language=ko

<hr>

## API 레퍼런스
- ?api_key=본인api키값&language=ko
  - api 키와 한국어 옵션 스트링을 추가하면 아래처럼 제이슨타입의 영화 데이터를 한국어로 받을 수 있다. ( 정렬이 안되어 보이면 JSON Viewer 확장 설치 )
![MovieApi](https://github.com/user-attachments/assets/ecbbd822-f100-4dc6-9660-2cc26452836c)

<hr>

##fetch API로 인기 영화 리스트 받아오기

```react
const MovieList = () => {

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = async () => {
		const response = await fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=본인API&language=ko'
		);
		const data = await response.json();
		console.log(data.results);
	};

```![mega](https://github.com/user-attachments/assets/994b8c16-1415-4781-a3fa-8f43a40dc8ef)

- movie state로 관리하기

```react
 {movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
```

<hr>

## MovieCard를 movie 데이터로 보여주기.
- API 요청으로 받은 movie 데이터에서 필요한 것들을 골라서 사용하기.
  - 1.제목 title
  - 2.설명 디테일 overview
  - 3.post_path: 포스터
  - 4.release_date: 출시일
  - 5.vote_average: 평점

![api number](https://github.com/user-attachments/assets/6a22074d-d486-40ca-bdc4-25ab1e6e6b93)

`MovieCard`
```react
	<div className='movie_details'>
				<h3 className='movie_details_heading'>{movie.title}</h3>
				<div className='align_center movie_date_rate'>
					<p>{movie.release_date}</p>
					<p className='align_center'>
						{movie.vote_average}
						<img src={Star} alt='rating icon' className='card_emoji' />
					</p>
				</div>
				<p className='movie_description'>{movie.overview}</p>
			</div>
```

![carde](https://github.com/user-attachments/assets/22448efc-9d1d-4d3b-ba00-6111771f10f4)
- TMDB의 가이드의 image를 잘 살펴보면 주소가 변수처럼 생략되어 있음을 알 수 있음. 앞의 주소는 그대로 붙여넣기 하고 뒷부분의 이미지 파일 이름만 변수로 처리하면 됨 => 백틱 다옴표 사용.

```react
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
```
```react
src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
```

![redwin](https://github.com/user-attachments/assets/d91e5cf6-996f-497e-b417-1793fc552ed8)

- 영화 설명이 너무 길기에 100자 이내로 줄이고 맨 끝에... 문자열로 끝내기
```react
<p className='movie_description'>
					{movie.overview.slice(0, 100) + '...'}
				</p>
```

<hr>

## 영화 포스터 클릭시 영화 페이지 보여주기
[레드윈]https://www.themoviedb.org/movie/845781-red-one?language=ko

```react
href={`https://www.themoviedb.org/movie/${movie.id}?language=ko`} target='_blank'
```


![redwin](https://github.com/user-attachments/assets/f4d3a908-4fe9-4123-a986-a509eb0697e5)

![redwin1](https://github.com/user-attachments/assets/aaacb002-2bfe-4acb-9f06-1aa2405c9803)

<hr>

## filterMovie 평점 6, 7, 8점 이상 나오게 하기
- MovieList에서 평점에 따라서 movies 걸러내기 위해 filterMovies와 minRating state 추가.

```react
const[filterMovies, setFilterMovies] = useState([])
const [minRating, setMinRating] = useState(0);
```

- fetchMovies에서 처음 시작시 filterMovies에도 데이터 입력

```react

	const fetchMovies = async () => {
		...
		setMovies(data.results);
		setFilterMovies(data.results);
	};
```

- handleFilter 메서드를 만들기, rate(평점)보다 높은 영화들만 filterMovies에 담기.

```react
const handleFilter = (rate) => {
		setMinRating(rate);

		const filtered = movies.filter((movie) => movie.vote_average >= rate);
		setFilterMovies(filtered);
	};
```

- 평점에 따라 클릭시 각 함수를 실행하여 filterMovies에 담기

```react
<li className='movie_filter_item active' onClick={() => handleFilter(8)}>
							8+ Star
						</li>
						<li className='movie_filter_item' onClick={() => handleFilter(7)}>
							7+ Star
						</li>
						<li className='movie_filter_item' onClick={() => handleFilter(6)}>
```

- filterMovies로 화면 표시(수정)

```react
{filterMovies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
```

`7점이상`

![7rating](https://github.com/user-attachments/assets/887966d9-7329-4376-9782-e60918711996)

<hr>

## 똑같은 rating(평점)을 한번 더 클릭했을때 active.
- 처음의 모든 movies를 표시
  - 1.평점을 클릭시 그 평점 이상의 영화들을 보여주기
  - 2.다시 그 평점을 클릭시 처음 화면으로 모든 영화 보여주기

```react
	const handleFilter = (rate) => {
		if (minRating === rate) {
			setMinRating(0);
			setFilterMovies(movies);
		} else {
			setMinRating(rate);
			const filtered = movies.filter((movie) => movie.vote_average >= rate);
			setFilterMovies(filtered);
		}
	};
```

`MovieList 수정`

```react
 <div className='align_center movie_list fs'>
                <ul className='align_center movie_filter'>
                    <li className=
                        {minRating===8 ? "movie_filter_item active" : "movie_filter_item"} 
                        onClick={() => handleFilter(8)}>8+ Star</li>

                    <li className=
                        {minRating===7 ? "movie_filter_item active" : "movie_filter_item"}
                        onClick={() => handleFilter(7)}>7+ Star</li>

                    <li className=
                        {minRating===6 ? "movie_filter_item active" : "movie_filter_item"} 
                        onClick={() => handleFilter(6)}>6+ Star</li>
                 
                </ul>
```

<hr>

## 정렬 Sort 스테이트 관리.

`MovieList.jsx`

![asc](https://github.com/user-attachments/assets/e88e6241-e677-4c1b-8a10-1432b72b9f13)

- 현재 선택된 sort값을 객체로 관리

```react
const [sort, setSort] = useState({
		by: 'default',
		order: 'asc',
	});
```

- 1.첫번째 select 태그의 name은 by로 sort 객체의 첫번째 속성값과 같음.
- 2.두번째 select 태그의 name은 order로 두번째 속성값과 같다.
- 3.초기값은 각각 default 와 asc이다

```react
<select name='by' id='' onChange={handelSort} className='movie_sorting'>
						<option value='default'>SortBy</option>
						<option value='release_date'>Date</option>
						<option value='vote_average'>Rating</option>
					</select>
					<select name='order' id='' onChange={handelSort} className='movie_sorting'>
						<option value='asc'>Ascending</option>
						<option value='desc'>Descending</option>
					</select>
```

- select 값을 선택할 때마다. handleSort 함수 실행, sort 객체를 업데이트.

```react
const handelSort = (e) => {
		const { name, value } = e.target;
		setSort((prev) => ({ ...prev, [name]: value }));
	};
	console.log(sort);
```

- prev 사용 하지 않으면 2개를 만들어야 하기 때문에 prev 사용.

![desc](https://github.com/user-attachments/assets/7cef26f3-5f1d-4e9a-bcca-2398699eb0be)

<hr>

## Lodash 라이브러리 사용, select 선택에 따라 정렬

- `Lodash 라이브러리`
  - Lodash(로대쉬)는 JavaScript의 인기있는 라이브러리 중 하나로 제이쿼리, 리액트와 같이 전세계적으로 가장 많이 사용되는 라이브러리.
  - Jquery가 자바스크립트 DOM을 간편하게 다루기 위해 탄생했듯이, Lodash는 주로 array, collection, date 같은 데이터의 구조를 간편하게 함수형으로 다룰 수 있게 하기 위해서 탄생.

-`TIP`: 제이쿼리를 이용할때 $( ) 달러 기호로 DOM을 묶어 사용하듯이 로대쉬도 달러 기호 대신 밑줄 기호를 사용한다라고 이해하면 됨.

- 설치방법

```react
$ npm i lodash
```

[lodash]https://lodash.com/docs/4.17.15#orderBy

- sort값이 업데이트 될때마다 그 값을 정렬(useEffect사용)

```react
useEffect(() => {}, [sort]);
```

- 정렬방법이 default가 아닐경우 => 출시일 또는 평점 일 경우에 lodash의 _.orderBy 메서드를 사용해 간단하게 정렬된 데이터를 업데이트.

```react
	if (sort.by !== 'default') {
			const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
			setFilterMovies(sortedMovies);
		}
```

<hr>

## 테마 낮 밤 추가하기, SVG 이미지 플러그인

- 리액트에서 SVG 이미지를 표시하기 위해 라이브러리 설치
[vite-plugin-svgr]https://www.npmjs.com/package/vite-plugin-svgr?activeTab=readme

```react
npm i vite-plugin-svgr
```

- vite.config.js에 추가하기

```react
import svgr from "vite-plugin-svgr";
...
plugins: [react(), svgr()],
```



![darkmode](https://github.com/user-attachments/assets/341a36e6-9673-412f-b0cf-2be5f038cabc)

![darkmodepng](https://github.com/user-attachments/assets/139a9950-5c75-42fe-a54f-73da82c926df)

`DarkMode.jsx`
import React from 'react';

import Sun from '../../assets/Sun.svg?react';
import Moon from '../../assets/Moon.svg?react';

import './DarkMode.css';

const DarkMode = () => {
  const setDarkTheme = () => document.querySelector('body').setAttribute('data-theme', 'dark');
  const setLightTheme = () => document.querySelector('body').setAttribute('data-theme', 'light');
  const toggleTheme = (e) => (e.target.checked ? setDarkTheme() : setLightTheme());

  setDarkTheme(); //처음 시작시 다크테마로 시작
  return (
    <div className="dark_mode">
      <input
        onChange={toggleTheme}
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
```

- Navbar에 다크모드 추가.

```react
<div className='navbar_links'>
				<DarkMode />
				<a href=''>
					인기순
```

![darkmodebutton](https://github.com/user-attachments/assets/c6293f21-a210-442a-8cc3-5995843eb9d2)


- 색이 너무 빠르게 바뀌니 index.css에 transition 0.3을 준다.

```css
@font-face {
	font-family: 'Pretendard-Regular';
	src: url(./assets/fonts/Pretendard-Regular.woff2);
}

:root {
	--body_backgroud: #101010;
	--body_color: #fff;
	--heading_color: #ffe400;
}

[data-theme='light'] {
	--body_backgroud: #fff;
	--body_color: #000;
	--heading_color: #000;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	transition: all 0.3s ease-in-out;
}

body {
	background-color: var(--body_backgroud);
	color: var(--body_color);
	font-family: 'Pretendard-Regular', sans-serif;
}
```

- 모든 css 파일도 배경색과 글자색을 변수로 바꿈.

`Navbar.css`

```css
.navbar > h1 {
	font-size: 30px;
	color: var(--heading_color);
}
...
.navbar_links > a {
	display: flex;
	align-items: center;
	font-size: 20px;
	font-weight: 500;
	color: var(--body_color);
	text-decoration: none;
	padding: 0 15px;
}
```

`MovieList.css`

```css
.movie_list_heading {
	font-size: 26px;
	color: var(--heading_color);
}
​```

![lightmode](https://github.com/user-attachments/assets/3f13e7d8-257e-4ae1-af6e-e300367eebff)

![darkmode1](https://github.com/user-attachments/assets/1e802a65-eb35-4ed8-8e45-271c1c1f28c8)

<hr>

## MovieList 컴포넌트 재사용 하기.
- 오른쪽 상단의 메뉴는 인기작품, 최고평점, 예정작품으로 수정하고 현재 MovieList 제목은 인기작품으로 하기.
 - 우선 App에서 아래처럼 type과 title, emoji 를 props로 넘겨서 재사용 가능한  MovieList를 만듬.
    - 1.type은 우선 영화를 인기작품, 평점높은작품, 예정작들 을 검색하는 키워드.
    - 2.title은 왼쪽 상단의 제목과 emoji는 제목옆의 이미지.
    - emoji는 assets 폴더에서 import 해 와야 됨.

  
```react
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";

export default function App() {
	return (
		<div className='app'>
			<Navbar />

			<MovieList type='popular' title='인기작품' emoji={Fire} />
            <MovieList type='top_rated' title='최고평점' emoji={Star} />
            <MovieList type='upcoming' title='예정작품' emoji={Party} />
		</div>
	);
}
```

`MovieList`
- props 입력받기

```react
export default function MovieList({type, title, emoji}) {
```

- 영화 데이터 fetch 주소 벡틱 따옴표 ` ` 안에 ${변수} 넣기
```react
  const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=Api key 넣으세요~`);
            const data = await response.json();
            setMovies(data.results);
            setFilterMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    };
```

- 제품 부분의 인기작품을 => {title}
```react
    {title} <img src={emoji} alt='fire emoji' className='navbar_emoji' />
```

- 섹션에 id 넣기

```react
	<section className='movie_list' id={`${type}`}>
```

![new](https://github.com/user-attachments/assets/c38dcfbe-52a6-4b2c-991b-ec3b32037169)

<hr>

## Menu scrolling
- 오른쪽 상단의 메뉴를 누르면 해당 MovieList로 스크롤 이동하도록 Navbar에 각각의 MovieList의 id와 같게 넣기.

```react
<a href='#popular'>
					인기작품
					<img className='navbar_emoji' src={Fire} alt='fire emoji' />
				</a>
				<a href='#top_rated'>
					최고평점
					<img className='navbar_emoji' src={Star} alt='star emoji' />
				</a>
				<a href='#upcoming'>
					예정작품
					<img className='navbar_emoji' src={Party} alt='party emoji' />
				</a>
```

- `index.css의 스크롤 속도 조절(smoth 스크롤)

```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	transition: all 0.3s ease-in-out;
}

html {
	scroll-behavior: smooth;
}
```

<hr>


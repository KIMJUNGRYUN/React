# Task관리앱 

## 리액트 템플릿 살펴보기
- node_modules
  - 현재 프로젝트에 포함된 라이브러리들이 설치되어 있는 폴더로 보통 깃과 같은 저장소에 올릴 때는 이 폴더를 함께 올리지 않음.
- public
  - 정적 파일이 포함되는 곳으로 컴파일이 필요 없는 파일들이 위치하는 폴더.
- src
  - 리액트 내부에서 작성하는 거의 모든 파일들이 이 폴더 내부에서 작성되며 이 폴더에 있는 파일들은 명령어에 따라 js로 컴파일이 진행됨.
- gitignore
  - 깃에 포함하고 싶지 않은 파일의 이름 혹은 폴더등을 입력하는 파일.
- package.json
  - 프로젝트에 관련된 기본적인 내용(프로젝트의 이름, 버전 등)과 라이브러리들의 목록이 포함되어 있음.
  

## index.css 초기화, App.jsx 초기화, 헤더 섹션
- index.css
```css
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
​
```

- App.jsx
```react
import './App.css';

export default function App() {
	return (
		<div className='app'>
			<header className='app_header'>Header Section</header>
			<main className='app_main'>
				<section className='task_column'>section 1</section>
				<section className='task_column'>section 2</section>
				<section className='task_column'>section 3</section>
			</main>
		</div>
	);
}
​```

- App.css
```
.app {
	display: grid;
	grid-template-rows: 150px auto;
}

.app_main {
	display: flex;
	justify-content: space-evenly;
	padding: 20px 8%;
}
​```

![header](https://github.com/user-attachments/assets/a10d9830-5f90-4a3e-8798-0164b47647ba)

- App.css
```css
.task_column {
	width: 33.33%;
	background-color: tomato;
	margin: 20px;
}
```

![section](https://github.com/user-attachments/assets/2243bf9f-50a0-4088-b610-bb09ee64d57a)

<hr>

## TaskForm 컴포넌트

![Task](https://github.com/user-attachments/assets/835bf2cc-61ff-4883-8449-6ae67ae3a1bc)

```react
import React from 'react';

export default function TaskForm() {
	return (
		<header className='app_header'>
			<form>
				<input type='text' className='task_input' placeholder='Enter your task' />

				<div className='task_form_bottom_line'>
					<button className='tag'>HTML</button>
					<button className='tag'>CSS</button>
					<button className='tag'>JavaScript</button>
					<button className='tag'>React</button>

					<select className='task_status'>
						<option value='todo'>할일</option>
						<option value='todo'>진행중</option>
						<option value='todo'>완료</option>
					</select>
					<button type='submit' className='task_submit'>
						+ 추가
					</button>
				</div>
			</form>
		</header>
	);
}
```

- App에 TaskForm 가져오기
```react
<div className='app'>
			<TaskForm />
			<main className='app_main'>
				<section className='task_column'>section 1</section>
				<section className='task_column'>section 2</section>
				<section className='task_column'>section 3</section>
			</main>
		</div>
```

![Enter](https://github.com/user-attachments/assets/690a83a8-5e54-483b-80f8-92aebd34dd57)

<hr>

## TaskForm.css
```css
.app_header {
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #dcdcdc;
}

.app_header > form {
	width: 40%;
}

.task_input {
	font-size: 20px;
	font-weight: 500;
	background-color: #f9f9f9;
	color: #000;
	border: 1px solid #dfe3e6;
	border-radius: 5px;
	padding: 8px 12px;
	margin-bottom: 15px;
	width: 100%;
}

.task_input::placeholder {
	color: #686868;
}
```

![EnterTask](https://github.com/user-attachments/assets/9589bfc6-b0b0-43f1-85a5-b051b0859a88)

- TaskForm.css추가
```css
.task_form_bottom_line {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
```

- flex를 사용해 태그부분과 옵션 버튼으로 나누기 위해 div 태그를 사용.

```react
<div className='task_form_bottom_line'>
					<div>
						<button className='tag'>HTML</button>
						<button className='tag'>CSS</button>
						<button className='tag'>JavaScript</button>
						<button className='tag'>React</button>
					</div>
					<div>
						<select className='task_status'>
							<option value='todo'>할일</option>
							<option value='todo'>진행중</option>
							<option value='todo'>완료</option>
						</select>
						<button type='submit' className='task_submit'>
							+ 추가
						</button>
					</div>
				</div>
```

![to](https://github.com/user-attachments/assets/dd8eadae-2ffe-47a0-8483-da0ad20417fa)

- css 추가
```css
.tag {
	font-size: 14px;
	font-weight: 500;
	background-color: #f9f9f9;
	border: 1px solid #dfe3e6;
	border-radius: 5px;
	margin-right: 10px;
	cursor: pointer;
}

.task_status {
	font-size: 16px;
	font-weight: 500;
	border: 1px solid #999;
	border-radius: 5px;
	width: 120px;
	height: 40px;
	padding: 0 5px;
}

.task_submit {
	font-size: 16px;
	font-weight: 500;
	background-color: #6457f9;
	color: #fff;
	border-radius: 5px;
	height: 40px;
	padding: 3px 13px;
	margin-left: 10px;
	border: none;
	cursor: pointer;
}
```

<hr>

## Tag 컴포넌트와 수행미션
![tag](https://github.com/user-attachments/assets/ccfec1ad-44aa-47ba-8cc0-65f9c41d4bf0)
- 위의 태그 부분을 따로 컴포넌트로 만들기

![tags](https://github.com/user-attachments/assets/70b7e8b5-2edc-43d2-aa6f-d4e81445a5e3)

```ract
import './Tag.css';

export default function Tag() {
	return <button className='tag'>HTML</button>;
}
```

- Tag.css에 TaskForm.css 에 있는 .tag를 잘라내어 붙이기.

```css
.tag {
	font-size: 14px;
	font-weight: 500;
	background-color: #f9f9f9;
	border: 1px solid #dfe3e6;
	border-radius: 5px;
	padding: 2px 10px;
	margin-right: 10px;
	cursor: pointer;
}
```

![htmlsaas](https://github.com/user-attachments/assets/db5ab38f-998f-4791-9197-be5ad4ec0bb7)

<hr>

## TaskColumn 컴포넌트와 미션 
- 프로젝트에 필요한 간단한 사진들을 assets 폴더에 넣음.

![assets](https://github.com/user-attachments/assets/16abc600-bbce-49fe-9e3b-92702d06e54f)

- 첫번째 섹션을 컴포넌트로 만들기

![todo](https://github.com/user-attachments/assets/16173389-fc92-4c3c-ae4a-c8d04f93aeff)

![tagss](https://github.com/user-attachments/assets/f417fd0d-5eb8-4063-b909-5382977e4149)

```react
import Todo from '../assets/direct-hit.png';
import './TaskColumn.css';

export default function TaskColumn() {
	return (
		<section className='task_column'>
			<h2 className='task_column_heading'>
				<img className='task_column_icon' src={Todo} alt='' />
				할일
			</h2>
		</section>
	);
}
```

- css
```css
.task_column_heading {
	display: flex;
	align-items: center;
}

.task_column_icon {
	width: 30px;
	margin-right: 10px;
}
```

- App
```react
			<main className='app_main'>
				<TaskColumn title="할 일/>
				<TaskColumn title="진행중"/>
				<TaskColumn title="완 료"/>
			</main>
```

- icon 넣기

```react
import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
				<TaskColumn title='할 일' icon={todoIcon} />
				<TaskColumn title='진행중' icon={doingIcon} />
				<TaskColumn title='완 료' icon={doneIcon} />
```

![taa](https://github.com/user-attachments/assets/df02ec20-f799-422e-b242-fa5357383c5e)


<hr>

## TaskCard 컴포넌트 

![TaskCARD](https://github.com/user-attachments/assets/1de3ec74-ffbc-4e45-b92f-8ba0bcae81a8)

```react
import Tag from './Tag';
import deleteIcon from '../assets/delete.png';
import './TaskCard.css';

export default function TaskCard() {
	return (
		<article className='task_card'>
			<p className='task_text'>샘플 내용입니다.</p>

			<div className='task_card_bottom_line'>
				<div className='task_card_tags'>
					<Tag tagName='HTML' />
					<Tag tagName='CSS' />
				</div>
				<div className='task_delete'>
					<img className='delete_icon' src={deleteIcon} alt='' />
				</div>
			</div>
		</article>
	);
}
```

- TaskCard를 TaskColumn에 넣기.

```react
<section className='task_column'>
			<h2 className='task_column_heading'>
				<img className='task_column_icon' src={icon} alt='' />
				{title}
			</h2>

			<TaskCard />
		</section>
```

- css
```css
.task_card {
	width: 100%;
	min-height: 100px;
	border: 1px solid #dcdcdc;
	border-radius: 10px;
	padding: 10px;
	margin: 15px 0;
}

.task_text {
	font-size: 18px;
	font-weight: 600;
	margin-bottom: 15px;
}

.task_delete {
	width: 35px;
	height: 35px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
}

.task_delete:hover {
	background-color: #ebebeb;
}

```css
.task_card_bottom_line {
	display: flex;
	align-items: center;
	//태그와 아이콘 사이에 스페이스를 넣기
}

.task_delete {
	width: 35px;
	height: 35px;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
}
```

![Sample1](https://github.com/user-attachments/assets/d7456788-ec1b-4726-a256-b5bdfe432f03)


.delete_icon {
	width: 20px;
	opacity: 50%;
	transition: all 0.3s ease-in-out;
}

.task_delete:hover .delete_icon {
	opacity: 80%;
}
​```

![sample](https://github.com/user-attachments/assets/0be1a8c0-0281-4782-a7e3-a81f601548f4)

- 삭제 아이콘(휴지통)과 태그들이 한 라인으로 정렬할 수 있도록 하기

<hr>

## Form 사용
- 1.각각의 스테이트관리
- 2.여러개의 스테이트를 객체로 한번에 관리

*각각의 스테이트 관리*
```react
const [task, setTask] = useState('');
const [status, setStatus] = useState('');
```

*각각의 입력을 받으면 그 값을 업데이트*
```react
<input type='text' onChange={(e)=>setTask(e.target.value)}
```

*form의 버튼을 클릭시 submit 이벤트 발생
```react
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({task, staus});
	};
```

*여러개의 입력을 객체로 관리하기*
```react
	const [taskData, setTaskData] = useState({
		task: '',
		status: 'todo',
	});
```

*handleChange 하나로 모든 입력에 적용*
```react
const handleChange = (e) => {
		const { name, value } = e.target;
		setTaskData((prev) => {
			return { ...prev, [name]: value };
		});
	};
```

```react
const handleSubmit = (e) => {
		e.preventDefault();
		console.log(taskData);
	};
```

```react
	return (
		<header className='app_header'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					onChange={handleChange}
					value={taskData.task}
					name='task'
					className='task_input'
					placeholder='Enter your task'
				/>

				<div className='task_form_bottom_line'>
					<div>
						<Tag tagName='HTML' />
						<Tag tagName='CSS' />
						<Tag tagName='JavaScript' />
						<Tag tagName='REACT' />
					</div>
					<div>
						<select
							className='task_status'
							name='status'
							value={taskData.status}
							onChange={handleChange}
						>
							<option value='todo'>할일</option>
							<option value='doing'>진행중</option>
							<option value='done'>완료</option>
						</select>
						<button type='submit' className='task_submit'>
							+ 추가
						</button>
					</div>
				</div>
			</form>
		</header>
	);
}
```

![lunch](https://github.com/user-attachments/assets/83dbd829-48a0-4df1-9bf1-e3d124a6aad7)

- 추가 버튼을 누르면 form의 submit 이벤트 발생 => handleSubmit 함수실행

![submit](https://github.com/user-attachments/assets/9f843754-392b-4705-84ae-d343ec07b5b6)

<hr>

## 태그선택 처리하기
- 각각의 태그 선택시 선택한 태그들을 새로운 Task를 만들때 넣으려 함.

`TaskDate` 여러개를 선택할수도 있으니 배열로 만들기.

```react
	const [taskData, setTaskData] = useState({
		task: '',
		status: 'todo',
		tags: [],
	});
```

- 입력된 태그를 콘솔에 출력하는 태그선택 함수 만들기.

```react
const selectTag = (tag) => {
		console.log(tag);
	};
```

- 이 함수를 props로 Tag 컴포넌트에 전달하여 Tag의 버튼이 클릭시 선택한태그 이름이 콘솔에 출력되게 함.

```react
<Tag tagName='HTML' selectTag={selectTag} />
```

- Tag 컴포넌트에서 props selectTag를 입력 받음. 이때 button 타입은 button으로)(기본 submit이 됨)

```react
export default function Tag({ tagName, selectTag }) {
	return (
		<button type='button' className='tag' onClick={() =>  selectTag(tagName}>
			{tagName}
		</button>
	);
}
```

![asa](https://github.com/user-attachments/assets/063cbaac-0b90-44ff-8155-72daf4cb0f4f)

- console.log 대신 taskData에 입력하기.
  - 1.선택한 태그가 이미 있으면 선택해제(삭제).
  - 2.선택한 태그가 없으면 추가.

```react
	//선택한 태그를 tags에 추가한다. (있으면 삭제 없으면 추가)
	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filterTags = taskData.tags.filter((item) => item !== tag);
			setTaskData((prev) => {
				return { ...prev, tags: filterTags };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] };
			});
		}
	};

    console.log(taskData.tags); //태그 선택을 확인
```

![q](https://github.com/user-attachments/assets/ee376390-657d-4874-865f-b36b37664239)

<hr>

## 태그 선택시 배경색이 바뀌게

```react
//선택된 태그아이템중 tag가 있으면 true 없으면 false
	const checkTag = (tag) => {
		return taskData.tags.some((item) => item === tag);
	};
```

- 각각의 태그에 selected로 현재 태그가 선택 되었다면 true를 전달 아니면 false 전달

```react
<Tag tagName='HTML' selectTag={selectTag} selected={checkTag('HTML')} />
```

- Tag

```react
export default function Tag({ tagName, selectTag, selected }) {
	const tagStyle = {
		HTML: { backgroundColor: '#fda821' },
		CSS: { backgroundColor: '#15d4c8' },
		JavaScript: { backgroundColor: '#ffd12c' },
		REACT: { backgroundColor: '#4cdafc' },
		default: { backgroundColor: '#f9f9f9' },
	};
```

- 아래의 코드를 버튼에 추가하여 props selected 가 true이면 위의 태그색으로 벡그라운드색을 바꿔줌. 선택이 안됬을 경우 디폴트값인 '#f9f9f9' 회색으로.

```react
export default function Tag({ tagName, selectTag, selected }) {

    const tagStyle = {
		HTML: { backgroundColor: '#fda821' },
		CSS: { backgroundColor: '#15d4c8' },
		JavaScript: { backgroundColor: '#ffd12c' },
		REACT: { backgroundColor: '#4cdafc' },
		default: { backgroundColor: '#f9f9f9' },
	};

	return (
		<button 
            style={selected ? tagStyle[tagName] : tagStyle.default} 
            type='button' 
            className='tag' 
            onClick={() =>  selectTag(tagName)}>
			{tagName}
		</button>
	);
}

```

![color](https://github.com/user-attachments/assets/37618955-4512-4f50-943c-db77d78ed49f)

<hr>

## App에서 tasks 관리하여 TaskColumn에서 task 종류별로 분류해서 표시
- App에 모든 tasks 스테이트를 만들기.
- TaskForm으로 setTasks 함수를 전달해서 Form에 새 taskData를 만들면 저장

```react
export default function App() {
	const [tasks, setTasks] = useState([]);
	return (
		<div className='app'>
			<TaskForm setTasks={setTasks} />
```

- TaskForm에 props setTasks를 받음.

```react
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(taskData);
		setTasks((prev) => {
			return [...prev, taskData]; //새 task 추가
		});
	};
```

- 다시 App으로 돌아와서 TaskColumn에 할 일 todo, 진행중 doing, 완료 done 상태와 tasks를 전달.

```react
<main className='app_main'>
				<TaskColumn title='할 일' icon={todoIcon} tasks={tasks} status='todo' />
				<TaskColumn title='진행중' icon={todoIcon} tasks={tasks} status='doing' />
				<TaskColumn title='완 료' icon={todoIcon} tasks={tasks} status='done' />
			</main>
```

- TaskColumn

```react
export default function TaskColumn({ title, icon, tasks, status }) {
	return (
		<section className='task_column'>
			<h2 className='task_column_heading'>
				<img className='task_column_icon' src={icon} alt='' />
				{title}
			</h2>

			{tasks.length > 0
				&& tasks.map(
						(task, index) =>
							task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} />
				  )}
		</section>
	);
}
```

- TaskCard

```react
export default function TaskCard({ title, tags }) {
...
					{tags.map((tag, index) => (
						<Tag tagName={tag} key={index} selected={true} />
					))}
```

- 태그의 selected={true} => selected와 같음. (ex: required)

![home](https://github.com/user-attachments/assets/cbd82b9c-ec9f-4618-ab84-4d965b4aba92)

<hr>

## Task 추가 후 리셋 방법
- Task를 추가한 뒤 입력창이 처음처럼 리셋되게 하게 하기.

![homes](https://github.com/user-attachments/assets/1871204c-95cc-424d-9fd3-47cad3cdd3c9)

```react
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(taskData);
		setTasks((prev) => {
			return [...prev, taskData];
		});
        //처음처럼 TaskData를 리셋하기
		setTaskData({
			task: "",
            		status: 'todo',
            		tags: []
		});
	};
```


<hr>

## Task 삭제 방법
- App 에 삭제하는 handleDelete 함수를 만듬.
- 이 함수는 인덱스번호를 입력변수로 받아서 그 인덱스 번호에 해당하는 task를 필터로 거르고(삭제하고) 다시 업데이트 하므로 해당 인덱스의 task를 삭제.
-  handleDelete를 만든 이유는 모든 tasks의 state가 여기 있기 때문.

```react
const handleDelete = (taskIndex) => {
		const newTasks = tasks.filter((task, index) => index !== taskIndex);
		setTasks(newTasks);
	};
```

- 다음으로 삭제할 휴지통 아이콘이 있는 컨포넌트까지 props를 이용해 전달.

```react
handleDelete={handleDelete}
```

- TaskColumn

```react
export default function TaskColumn({ title, icon, tasks, status, handleDelete }) {

...
handleDelete={handleDelete}
index={index}
```

- TaskCard

```react
export default function TaskCard({ title, tags, handleDelete, index }) {
```

```react
 onClick={() => handleDelete(index)}>
```

![css2](https://github.com/user-attachments/assets/843c7b42-aece-4ec3-9fca-66ae6bb935c5)

![css3](https://github.com/user-attachments/assets/c5a06ce4-f282-4819-99e1-ab53eaed9652)

<hr>

## localStorage 에 저장하기 with useEffect

- DB를 사용하지 않기 때문에 데이터를 저장하지 않고 프로젝트 리프레쉬 하면 모든 Task가 삭제되는 문제 해결하기.

`tasks`가 업데이트 될대마다 로컬 저장소에 저장하기.

```react
export default function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);
```

![useEffect](https://github.com/user-attachments/assets/ba7b5a82-0e36-45e7-be77-116c28a6af54)

- 새로 task 만들면 브라우저의 로컬저장소에 저장됨

![photo](https://github.com/user-attachments/assets/c173b5e3-4473-4ef5-b1ad-b80fd9bb5d92)

- 처음 시작할때 tasks를 로컬저장소에서 가져오기
  - 글로별 변수로 로컬저장소의 'tasks'를 가져와 saveTasks에 저장함.
     - 1.로컬저장소는 제이슨(문자열)이므로 자바스크립트 객체로 변환함(JSON.parse ).
     - 2.만약 로컬저장소에 tasks가 아예 없다면 || [ ] => 빈 배열을 가져옴 (없으면 에러발생).

```react
const saveTasks = localStorage.getItem('tasks');

export default function App() {
	const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []);
```

- 이제 리프레쉬 해도 사라지지 않으며 로컬 저장소에서 값을 가져옴.


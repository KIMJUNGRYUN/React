import React, { useState } from 'react';
import './TaskForm.css';
import Tag from './Tag';

export default function TaskForm({setTasks}) {

    const [taskData, setTaskData] = useState({
        task: "",
        status: 'todo',
        tags: []
    });

    const handleChange = (e) => {
        const {name, value} = e.target;   //구조 분해 할당 문법
        setTaskData ({...taskData, [name]: value}); //target 객체 안의 name, value 가져옴  [name]:value란? : 게산된 속성 이름 (Computed Property Name) 문법
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prev) => [...prev, taskData]);
        setTaskData({
            task: "",
            status: 'todo',
            tags: []
        });
    };


    const selectTag = (tag) => {
        if(taskData.tags.some((item) => item === tag)){  //some()은 배열에 특정 값이 있는지 확인하는 함수.
            const filterTags = taskData.tags.filter((item) => item !== tag); //item != tag: 클릭된 태그와 같은 값은 제외
            setTaskData ({ ...taskData, tags: filterTags });
        }else{
            setTaskData ({ ...taskData, tags: [...taskData.tags, tag] }); //...은 스프레드 문법 , 기존 taskData 객체의 모든 키-값 쌍을 복사...
        }
    };

    const checkTag = (tag) => {
        //tag가 현재 선택한 태그들에 있으면 true, 없으면 false;
        return taskData.tags.some((item) => item === tag);
    };
        console.log(taskData.tags);

        
	return (
		<header className='app_header'>
			<form onSubmit={handleSubmit}>
				<input 
                    name='task'
                    value={taskData.task}
                    onChange={handleChange}
                    type='text' 
                    className='task_input' 
                    placeholder='할 일을 입력하세요' required/>

				<div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName="HTML" selectTag={selectTag} selected={checkTag('HTML') }/> 
                        <Tag tagName="CSS" selectTag={selectTag} selected={checkTag('CSS')}/>
                        <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag('JavaScript')}/>
                        <Tag tagName="REACT" selectTag={selectTag} selected={checkTag('REACT')}/>
                    </div>

                    <div>
                        <select
                            name='status'
                            value={taskData.status} 
                            onChange={handleChange} 
                            className='task_status'>
                            <option value='todo'>할일</option>
                            <option value='doing'>진행중</option>
                            <option value='done'>완료</option>
                        </select>

                        <button 
                            type='submit'
                            className='task_submit'>
                            + 추가
                        </button>
				    </div>
                </div>
			</form>
		</header>
	);
}
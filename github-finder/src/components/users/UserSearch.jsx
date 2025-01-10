import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/GithubContext';

function UserSearch({ handleAlert }) {
    const [text, setText] = useState('');
    const { searchUsers, clearUsers } = useContext(GithubContext);
	

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === "") {
            handleAlert("내용을 입력하세요.");
        } else {
            searchUsers(text);
            setText('');
        }
    };

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                value={text}
                                onChange={handleChange}
                                type="text"
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                placeholder="Search"
                            />
                            <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                검색
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={clearUsers} className="btn btn-ghost btn-lg">리셋</button>
            </div>
        </div>
    );
}

export default UserSearch;

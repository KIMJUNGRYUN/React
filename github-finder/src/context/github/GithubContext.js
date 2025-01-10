import  { createContext, useState } from 'react'

 const GithubContext = createContext();
 //깃허브주소와 토큰 변수지정
 const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
 const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

 //프로바이더가 전역으로 컨텍스트를 적용함
 export const GithubProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
  
  //유저들 클리어
    const clearUsers = () => {
        setUsers([]);
    }

    //키워드로 유저 찾기
    const searchUsers = async (text) => {
        setLoading(true);
        const params = new URLSearchParams({ q: text});
      const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });

      const data = await response.json();
      setUsers(data.items);
      setLoading(false); //로딩완료
     
    };

    const getUser = async (login) => {
      setLoading(true);
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    setUser(data);
    setLoading(false); //로딩완료
    
    // .catch((error) => window.location='/notfound');
    getUserRepos(login);
  };
     
  //유저 공개 리포지토리 리스트
  const getUserRepos = async (login) => {
    setLoading(true);

    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    })

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await response.json();
  
  setRepos(data);
  setLoading(false); //로딩완료
   if(!data){
    console.log("error");
  }
  // .catch((error) => window.location='/notfound');
};
   
       
    return (
      <GithubContext.Provider 
        value={{
            users,
            repos,
            user,
            loading,
            searchUsers,
            getUser,
            clearUsers,
         }}>
        {children}
      </GithubContext.Provider>
    );
  };



 export default GithubContext;





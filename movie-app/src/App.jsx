import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  const [movies, setMovies] = useState([]);
  // 서버에서 영화들 데이터를 가져옴
  async function getMovieRequest(searchValue){   //async awit는 쌍으로 이루어져 있음
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=61a1acd6&s=${searchValue}`;
    const response = await fetch(url); //omdb 서버에서 데이터를 제이슨으로 받음
    const jsonData = await response.json(); //제이슨 문자열을 자바스크립트 객체로 변환
    setMovies(jsonData.Search);
  }

  //앱 실행시 처음 한번만 실행
  useEffect(() => {
    getMovieRequest('star')
  }, [])
  

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App

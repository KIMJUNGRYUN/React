import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const[images, setImages] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[term, setTerm] = useState('flowers');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
    .then((res) => res.json()) //요청 결과를 jS로 변환
    .then((data) => setImages(data.hits)) //데이터 출력
    .catch((err) => console.log(err)); //에러 발생시 에러 출력

  }, [term]);   //[] 한번 실행
  return (
    <div className="container mx-auto my-7">
      <ImageSearch setTerm={setTerm} />
<<<<<<< HEAD
      {images.length === 0 && <h1 className="text-5xl text-center mt-32">이미지가 없습니다.</h1>}
=======
    {images.length === 0 && <h1 className="text-5xl text-center mt-32">이미지가 없습니다.</h1>}
>>>>>>> 5f73790a31f14e186d81ef45f8dd92bbcda78bf6
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  </div>
  );
}

export default App;

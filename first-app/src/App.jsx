import { useEffect, useState } from "react";

// 컴포넌트: UI를 재사용 가능한 개별적인 여러 조각
function App() {
  
  const [pets, setPets] = useState(
    JSON.parse(
      localStorage.getItem("PetData")? localStorage.getItem("PetData") : "[]"
    )
  );

  //pets값이 바뀔때마다 실행
  useEffect(() => {
    localStorage.setItem("PetData",JSON.stringify(pets));
  }, [pets]);

  //jsx는 리턴시 한개의 부모태그
  return (
    <>
      {/* jsx에서 클래스 className이다. */}
      <Header />
      <LikeArea />
      <TimeArea />
      <AddPetForm setPets={setPets} />

      <ul>
        {
        pets.map((pet) => (
          <Pet
          setPets={setPets}
            id={pet.id}
            key={pet.id} // JSX 반복문에서는 고유한 key 속성이 필요
            name={pet.name}
            species={pet.species}
            age={pet.age}
          />
        ))}
      </ul>

      <Footer cr="부산IT교육센터" />
    </>
  );
}




function Header() {
  return <h1 className="special">처음 앱</h1>;
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function plus() {
    setLikeCount(likeCount + 1);
  }

  function minus() {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
    }
  }

  return (
    <>
      <button onClick={plus}>추천하기</button>
      <button onClick={minus}>비추하기</button>
      <h2>이 페이지를 {likeCount}번 추천했습니다.</h2>
    </>
  );
}

function TimeArea() {
  const [time, setTime] = useState(new Date().toLocaleString());
  setTimeout(() => setTime(new Date().toLocaleString()), 1000);

  return <p>현재시간: {time}</p>;
}

function AddPetForm(props) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.setPets((prev) =>
      prev.concat({
        name: name,
        species: species,
        age: age,
        id: new Date().getTime(), // 고유한 id 생성
      })
    );
    setName("");
    setSpecies("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>새 PET 을 추가하기</legend>
        <input value={name} onChange={e => setName(e.target.value)}  placeholder="이름" />
        <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="종류" />
        <input value={age} onChange={e => setAge(e.target.value)} placeholder="나이" />
        <button>펫 추가</button>
      </fieldset>
    </form>
  );
}

function Footer(props) {
  return <small>Copyright: {props.cr}</small>;
}

function Pet(props) {
  function handleDelete(){
    //pets 배열에 같은 id를 제외하고 업데이트 => id 같으면 삭제됨
    props.setPets((pets) => pets.filter((pet) => pet.id !== props.id));

  }
  return (
    <li>
      {props.name}은 {props.species}이고 {props.age}살 입니다!
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
}

export default App;

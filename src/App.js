import './App.css';
import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const data = [
  { date: '23.01.25', uv: 100},
  { date: '23.02.08', uv: 100},
  { date: '23.02.22', uv: 110},
  { date: '23.03.08', uv: 130 },
];   /* 이 부분을 날짜로 정하기 */

const renderLineChart = (
  <LineChart width={480} height={360} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="date" />
    <YAxis />
  </LineChart>
);



function Freeweight({ onCreate }) {

  return (

    <div className="freeweight">
      <div className="freeweightBox">
        <h2>3대 중량을 입력해주세요!</h2>
        <form onSubmit={onCreate}>
          <ul>
            <li>스쿼트 <input type="text" id="squat" name="squat" maxLength="3" size="4"
            ></input> kg</li>
            <li>벤치프레스 <input type="text" id="benchpress" name="benchpress" maxLength="3" size="4"

            ></input> kg</li>
            <li>데드리프트 <input type="text" id="deadlift" name="deadlift" maxLength="3" size="4"
            ></input> kg</li>
          </ul>
          <button type="submit" id="sbd" name="sbd">확인</button>
        </form>
      </div>
    </div>
  )
}

function Home(props) {

  const sum = props.squat + props.benchpress + props.deadlift;

  return (
    <div className="home">
      <div className="homeMode">
        <h2>OOO 회원님, 반갑습니다 !</h2>
        <ul>
          <li>스쿼트 : {props.squat}</li>
          <li>벤치프레스 : {props.benchpress}</li>
          <li>데드리프트 : {props.deadlift}</li>
          <li>3대 중량 : {sum}</li>
        </ul>
      </div>
      {renderLineChart}
    </div>

  )
}


function App() {

  let [mode, setMode] = useState('Freeweight');
  let content = null;

  let [squat, setSquat] = useState();
  let [benchpress, setBenchpress] = useState();
  let [deadlift, setDeadlift] = useState();

  const onChangeMode = () => {
    setMode('Home');
  }

  const onCreate = (e) => {

    if (e.target.squat.value === '' || e.target.benchpress.value === '' || e.target.deadlift.value === '') {
      alert('빈칸을 입력해주세요!!');
      e.preventDefault();
    } else {
      setSquat(Number(e.target.squat.value));
      setBenchpress(Number(e.target.benchpress.value));
      setDeadlift(Number(e.target.deadlift.value));
      onChangeMode();
      e.preventDefault();
    }
  }

  if (mode === 'Freeweight') {
    content = <Freeweight onCreate={onCreate} />
  } else if (mode === 'Home') {
    content = <Home squat={squat} benchpress={benchpress} deadlift={deadlift} />
  }


  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;




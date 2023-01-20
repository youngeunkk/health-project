import './App.css';
import { useState } from 'react';


function Freeweight({onCreate}) {

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

function Hello(props) {

  const sum = props.squat + props.benchpress + props.deadlift;

  return (
    <div className="hello">
      <h4>스쿼트 : {props.squat}</h4>
      <h4>벤치프레스 : {props.benchpress}</h4>
      <h4>데드리프트 : {props.deadlift}</h4>
      <h3>3대 중량 : {sum}</h3>
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
    setMode('Hello');
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
  } else if (mode === 'Hello') {
    content = <Hello squat={squat} benchpress={benchpress} deadlift={deadlift} />
  }


  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;




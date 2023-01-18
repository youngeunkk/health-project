import './App.css';
import { useState } from 'react';


function Freeweight({onChangeMode, onChangeBench, onChangeDead, onChangeSquat}) {

  return (

    <div className="freeweight">
      <div className="freeweightBox">
        <h2>3대 중량을 입력해주세요!</h2>
        <ul>
          <li>스쿼트 <input type="text" id="squat" name="squat" maxLength="3" size="4"
            onChange={onChangeSquat}></input> kg</li>
          <li>벤치프레스 <input type="text" id="benchpress" name="benchpress" maxLength="3" size="4"
            onChange={onChangeBench}
          ></input> kg</li>
          <li>데드리프트 <input type="text" id="deadlift" name="deadlift" maxLength="3" size="4"
            onChange={onChangeDead}></input> kg</li>
        </ul>
        <button type="submit" id="sbd" name="sbd" onClick={onChangeMode}>확인</button>  {/* setMode 변환예정 */}
      </div>
    </div>
  )
}

function Hello(props) {

  return (
    <div className="hello">
      <h4>    스쿼트 : {props.inputSquat} </h4>
      <h4>벤치프레스 : {props.inputBenchpress} </h4>
      <h4>데드리프트 : {props.inputDeadlift} </h4>
    </div>

  )
}


function App() {

  let [inputSquat, setInputSquat] = useState('');
  let [inputBenchpress, setInputBenchpress] = useState('');
  let [inputDeadlift, setInputDeadlift] = useState('');

  let [mode, setMode] = useState('Freeweight');

  let content = null;

  const onChangeSquat = (e) => {
    if (isNaN(e.target.value) === true) {
      alert("숫자만 입력해주세요!");
      e.target.value = '';
    } else {
      setInputSquat(e.target.value);
    }
  }

  const onChangeBench = (e) => {
    if (isNaN(e.target.value) === true) {
      alert("숫자만 입력해주세요!");
      e.target.value = '';
    } else {
      setInputBenchpress(e.target.value);
    }
  }

  const onChangeDead = (e) => {
    if (isNaN(e.target.value) === true) {
      alert("숫자만 입력해주세요!");
      e.target.value = '';
    } else {
      setInputDeadlift(e.target.value);
    }
  }

  const onChangeMode = () => {
    setMode('Hello');
  }


  if (mode === 'Freeweight') {
    content = <Freeweight 
        onChangeMode={onChangeMode} 
        onChangeSquat={onChangeSquat}
        onChangeBench={onChangeBench}
        onChangeDead={onChangeDead} />
  } else if (mode === 'Hello') {
    content = <Hello 
        inputSquat={inputSquat} 
        inputBenchpress={inputBenchpress} 
        inputDeadlift={inputDeadlift}/>
      }


  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;




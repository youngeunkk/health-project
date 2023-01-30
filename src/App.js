import './App.css';
import { useState } from 'react';
import Freeweight from './Mode/freeweight';
import Home from './Mode/home';
import NewPR from './Mode/NewPR';

function App() {

  let [mode, setMode] = useState('Freeweight');
  let content = null;

  let subContent = null;

  let [squat, setSquat] = useState();
  let [benchpress, setBenchpress] = useState();
  let [deadlift, setDeadlift] = useState();

  const onChangeHomeMode = () => {
    setMode('Home');
  }

  const onChangeNewPRMode = () => {
    setMode('NewPR');
  }


  const onCreate = (e) => {

    if (e.target.squat.value === '' || e.target.benchpress.value === '' || e.target.deadlift.value === '') {
      alert('빈칸을 입력해주세요!!');
      e.preventDefault();
    } else {
      setSquat(Number(e.target.squat.value));
      setBenchpress(Number(e.target.benchpress.value));
      setDeadlift(Number(e.target.deadlift.value));
      onChangeHomeMode();
      e.preventDefault();
    }
  }

  if (mode === 'Freeweight') {
    content = <Freeweight onCreate={onCreate} />
  } else if (mode === 'Home') {
    content = <Home squat={squat} benchpress={benchpress} deadlift={deadlift}/>
    subContent= <button onClick={onChangeNewPRMode}>새로운 중량 설정하러가기!</button>
  } else if (mode === 'NewPR') {
    content = <NewPR onCreate={onCreate}/>
  }

  return (
    <div className="App">
      {content}
      {subContent}
    </div>
  );
}

export default App;




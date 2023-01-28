import './App.css';
import { useState } from 'react';
import Freeweight from './Mode/freeweight';
import Home from './Mode/home';


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




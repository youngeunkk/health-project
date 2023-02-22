import './App.css';
import { useState } from 'react';
import Freeweight from './Mode/Freeweight';
import Home from './Mode/Home';
import NewPR from './Mode/NewPR';
import Recode from './Mode/Recode';
import { useDispatch } from 'react-redux';
import { addSquat } from './Slice/squatSlice';
import { addBench } from './Slice/benchSlice';
import { addDeadlift } from './Slice/deadliftSlice';




function App() {

  const dispatch = useDispatch();

  let [mode, setMode] = useState('Freeweight');
  let content = null;

  const onChangeHomeMode = () => {
    setMode('Home');
  }

  const onChangeNewPRMode = () => {
    setMode('NewPR');
  }

  const onChangeRecodeMode = () => {
    setMode('Recode');
  }


  const onCreate = (e) => {

    if (e.target.squat.value === '' || e.target.benchpress.value === '' || e.target.deadlift.value === '') {
      alert('빈칸을 입력해주세요!!');
      e.preventDefault();
    } else {
      dispatch(addSquat(Number(e.target.squat.value)));
      dispatch(addBench(Number(e.target.benchpress.value)));
      dispatch(addDeadlift(Number(e.target.deadlift.value)));   

      alert('중량을 갱신했습니다!')
      onChangeHomeMode();
      e.preventDefault();
    }
  }

  if (mode === 'Freeweight') {
    content = <Freeweight onCreate={onCreate} />
  } else if (mode === 'Home') {
    content = <Home onChangeNewPRMode={onChangeNewPRMode} onChangeRecodeMode={onChangeRecodeMode}/>;
  } else if (mode === 'NewPR') {
    content = <NewPR onCreate={onCreate}/>
  } else if (mode === 'Recode') {
    content = <Recode onChangeHomeMode={onChangeHomeMode}/>
  } 

  return (
    <div className="App">
      {content}
      <div className="subContent">
      </div>
    </div>
  );
}

export default App;




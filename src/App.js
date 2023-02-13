import './App.css';
import { useState } from 'react';
import Freeweight from './Mode/freeweight';
import Home from './Mode/home';
import NewPR from './Mode/NewPR';
import { useDispatch, useSelector } from 'react-redux';
import { addSquat } from './Slice/squatSlice';
import { addBench } from './Slice/benchSlice';
import { addDeadlift } from './Slice/deadliftSlice';



function App() {

  const dispatch = useDispatch();

  const squatData = useSelector(state=>{
    return state.squatData;
  });
  const benchData = useSelector(state=>{
    return state.benchData;
  });
  const deadliftData = useSelector(state=>{
    return state.deadliftData;
  })

  console.log(squatData)
      console.log(benchData)
      console.log(deadliftData)

  let [mode, setMode] = useState('Freeweight');
  let content = null;
  let subContent = null;

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
    subContent = <button type="button" id="NewPR" onClick={onChangeNewPRMode}>새로운 중량 설정하러가기!</button>
    content = <Home squatData={squatData} benchData={benchData} deadliftData={deadliftData}/>
    
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




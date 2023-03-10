import './App.css';
import Freeweight from './Mode/Freeweight';
import MyPage from './Mode/MyPage';
import NewPR from './Mode/NewPR';
import Recode from './Mode/Recode';
import Update from './Mode/Update';
import { useDispatch } from 'react-redux';
import { addSquat } from './Slice/squatSlice';
import { addBench } from './Slice/benchSlice';
import { addDeadlift } from './Slice/deadliftSlice';
import { Routes, Route, useNavigate} from 'react-router-dom';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeMyPageMode = () => {
    navigate('/mypage');
  }

  const onChangeNewPRMode = () => {
    navigate('/NewPR')
  }

  const onChangeRecodeMode = () => {
    navigate('/recode');
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
      onChangeMyPageMode();
      e.preventDefault();
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/mypage" element={
          <MyPage onChangeNewPRMode={onChangeNewPRMode} 
                  onChangeRecodeMode={onChangeRecodeMode}
                />}/>
        <Route path="/" element={<Freeweight onCreate={onCreate}/>}/>
        <Route path="/NewPR" element={<NewPR onCreate={onCreate}/>}/>
        <Route path="/recode" element={<Recode onChangeMyPageMode={onChangeMyPageMode}/>}/>
        <Route path="/update/:id" element={<Update onChangeMyPageMode={onChangeMyPageMode}/>}/>
      </Routes>
    </div>
  );
}

export default App;




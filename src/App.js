import './App.css';
import MyPage from './Mode/MyPage';
import NewPR from './Mode/NewPR';
import Recode from './Mode/Recode';
import Update from './Mode/Update';
import Login from './Mode/Login'
import { useDispatch } from 'react-redux';
import { addSquat } from './Slice/squatSlice';
import { addBench } from './Slice/benchSlice';
import { addDeadlift } from './Slice/deadliftSlice';
import { Routes, Route, useNavigate} from 'react-router-dom';
import SineUp from './Mode/SignUp';


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeMyPageMode = () => {
    navigate('/');
  }

  const onChangeNewPRMode = () => {
    navigate('/NewPR')
  }

  const onChangeRecodeMode = () => {
    navigate('/recode');
  }

  const onCreatePR = (e) => {

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
        <Route path="/" element={
          <MyPage onChangeNewPRMode={onChangeNewPRMode} 
                  onChangeRecodeMode={onChangeRecodeMode}
                />}/>
        <Route path="/NewPR" element={<NewPR onCreatePR={onCreatePR}/>}/>
        <Route path="/recode" element={<Recode onChangeMyPageMode={onChangeMyPageMode}/>}/>
        <Route path="/update/:id" element={<Update onChangeMyPageMode={onChangeMyPageMode}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sineup" element={<SineUp/>}/>
      </Routes>
    </div>
  );
}

export default App;




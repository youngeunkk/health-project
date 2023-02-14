import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useSelector } from 'react-redux';


function Home(props) {

  const squatData = useSelector(state => {
    return state.squatData;
  });
  const benchData = useSelector(state => {
    return state.benchData;
  });
  const deadliftData = useSelector(state => {
    return state.deadliftData;
  });

  const newSquat = squatData[squatData.length - 1];
  const newBench = benchData[benchData.length - 1];
  const newDead = deadliftData[deadliftData.length - 1];

  const sum = newSquat.uv + newBench.uv + newDead.uv;

  const squatChart = (
    <LineChart width={480} height={360} data={squatData}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );

  const benchpressChart = (
    <LineChart width={480} height={360}  data={benchData}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );

  const deadliftChart = (
    <LineChart width={480} height={360} data={deadliftData}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
  );

  return (
    <div className="home">
      <div className="homeMode">
        <h2>OOO 회원님, 반갑습니다 !</h2>
        <ul>
          <li>스쿼트 :{newSquat.uv}</li>
          <li>벤치프레스 :{newBench.uv} </li>
          <li>데드리프트 : {newDead.uv}</li>
          <li>3대 중량 : {sum}</li>
        </ul>
      </div>
      <div>
       <button type="button" id="NewPR" onClick={props.onChangeNewPRMode}>새 중량 갱신하기 🏋️‍♀️🏋️‍♂️</button>
      </div>
      <div className="chart">
        <ul>
          <li>{squatChart}<h4>squat</h4></li>
          <li>{benchpressChart}<h4>benchpress</h4></li>
          <li>{deadliftChart}<h4>deadlift</h4></li>
        </ul>
      </div>
    </div>
  )
}

export default Home;
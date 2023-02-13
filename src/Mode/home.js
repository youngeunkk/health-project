import { squatChart, benchpressChart, deadliftChart } from '../chart'
import { useSelector } from 'react-redux';


function Home(props) {

    const squatData = useSelector(state=>{
      return state.squatData;
    });
    const benchData = useSelector(state=>{
      return state.benchData;
    });
    const deadliftData = useSelector(state=>{
      return state.deadliftData;
    });

    
  
    return (
      <div className="home">
        <div className="homeMode">
          <h2>OOO 회원님, 반갑습니다 !</h2>
          <ul> 
            <li>스쿼트 :{squatData[squatData.length -1].uv}</li>
            <li>벤치프레스 :{benchData[benchData.length -1].uv} </li>
            <li>데드리프트 : {deadliftData[deadliftData.length -1].uv}</li>
            <li>3대 중량 : </li>
          </ul>
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
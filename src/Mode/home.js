import { squatChart, benchpressChart, deadliftChart } from '../chart'

function Home(props) {

    const sum = props.squat + props.benchpress + props.deadlift;
  
    return (
      <div className="home">
        <div className="homeMode">
          <h2>OOO 회원님, 반갑습니다 !</h2>
          <ul>
            <li>스쿼트 : {props.squat}</li>
            <li>벤치프레스 : {props.benchpress}</li>
            <li>데드리프트 : {props.deadlift}</li>
            <li>3대 중량 : {sum}</li>
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
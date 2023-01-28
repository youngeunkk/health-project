import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { squatData, benchpressData, deadliftData } from './store';


const squatChart = (
    <LineChart width={480} height={360} data={squatData}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
);
  
  const benchpressChart = (
    <LineChart width={480} height={360} data={benchpressData}>
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


export { squatChart, benchpressChart, deadliftChart};
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const squatChart = (
    <LineChart width={480} height={360} data=''>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
);
  
  const benchpressChart = (
    <LineChart width={480} height={360} data=''>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
);
  
  const deadliftChart = (
    <LineChart width={480} height={360} data=''>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
    </LineChart>
);


export { squatChart, benchpressChart, deadliftChart};
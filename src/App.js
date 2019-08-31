

//line chart

import React, { PureComponent } from "react";
import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend
} from "recharts";

class App extends PureComponent {
static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
componentDidMount() {
setInterval(() => this.forceUpdate(), 1000);
}
render() {
var data = [
  {BTC:Math.floor(Math.random()*500),
   ETH:Math.floor(Math.random()*500),
   amt:8000,  
  },
  {BTC:Math.floor(Math.random()*500),
    ETH:Math.floor(Math.random()*500),
    amt:8400,  
   },
   {BTC:Math.floor(Math.random()*500),
    ETH:Math.floor(Math.random()*500),
    amt:8000,  
   },
   {BTC:Math.floor(Math.random()*500),
    ETH:Math.floor(Math.random()*500),
    amt:8000,  
   },
   {BTC:Math.floor(Math.random()*500),
    ETH:Math.floor(Math.random()*500),
    amt:8000,  
   },
   {BTC:Math.floor(Math.random()*500),
    ETH:Math.floor(Math.random()*500),
    amt:8000,  
   },
   {BTC:Math.floor(Math.random()*500),
    ETH:Math.floor(Math.random()*500),
    amt:8000,  
   },
   {BTC:Math.floor(Math.random()*500),
    ETH:Math.floor(Math.random()*500),
    amt:8000,  
   }


];
return (
<div className="App">
<LineChart
width={800}
height={400}
data={data}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5
}}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey= "BTC"
     />
<YAxis datakey="ETH" />
<Tooltip />
<Legend />
<Line
type="monotone"
dataKey="BTC"
stroke="#8884d8"
activeDot={{ r: 8 }}
/>
<Line type="monotone" dataKey="ETH" stroke="#82ca9d" />
</LineChart>
</div>
);
}
}
export default App;









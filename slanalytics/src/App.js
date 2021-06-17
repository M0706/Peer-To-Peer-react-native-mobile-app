// import Bothchart from "./bothchart/BothChart";
// import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
// import FaltuChart from "./heatchart/FaltuChart";
import Bothchart from "./Charts/BothChart";
import LineChart from "./Charts/Line-Chart";


function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Bothchart}/>
      <Route exact path="/LineChart" component={LineChart}/>

      {/* <Route exact path="/faltu" component={FaltuChart}/> */}

    </BrowserRouter>
  );
}

export default App;

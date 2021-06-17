// import Bothchart from "./bothchart/BothChart";
// import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";
// import FaltuChart from "./heatchart/FaltuChart";
import Bothchart from "./Charts/bothchart/BothChart";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Bothchart}/>
      {/* <Route exact path="/faltu" component={FaltuChart}/> */}

    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route } from "react-router-dom";
import Bothchart from "../Charts/BothChart";
import LineChart from "../Charts/Line-Chart";
import AnalyticsMain from "../containers/Analytics";

export default function routes(){
    return (
        <BrowserRouter>
        <Route exact path="/" component={AnalyticsMain}/>

          <Route exact path="/BothCharts" component={Bothchart}/>
          <Route exact path="/LineChart" component={LineChart}/>
    
          {/* <Route exact path="/faltu" component={FaltuChart}/> */}
    
        </BrowserRouter>
        )
}
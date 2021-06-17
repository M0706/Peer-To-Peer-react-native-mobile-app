import React from "react";
import "./styles.css";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Test 6", "Test 7","Test 8","Test 9", "Test 10" , "Test 11", "Test 12", "Test 13"],
  datasets: [
    {
      label: "Maths",
      data: [46,49,55,52,54,46,58,68,59,49,56,60,58],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "brown",
      tension: 0

    },
    {
      label: "Physics",
      data: [35, 25,24,28,35,41,38,36,47,48,60,57,61],
      fill: false,
      borderColor: "#742774",
      tension: 0
    },
    {
      label: "Chemistry",
      data: [44, 38, 48, 51, 49, 53,56,55,60,62,54,52,55],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "red",
      tension: 0
    },
  ]
  
};



export default function App() {
  return (

    <div className="container mt-8">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div >
            <div>
              <div>
              
              <Line data={data} />
              </div>

              <div/>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

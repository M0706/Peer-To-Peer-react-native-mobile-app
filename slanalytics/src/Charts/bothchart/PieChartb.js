import React, {useCallback, useState } from "react";
import './styles.css';
import { Pie,PieChart,Sector } from "recharts";


export default function PieChartb(props) {
  console.log(props.correct[0].QueNo);
  const TotalQuestions = props.piedata.length
  const correctAngle = (props.correct.length * 360) / TotalQuestions;
  const incorrectAngle = (props.incorrect.length * 360) / TotalQuestions;
  const leftQuesAngle = (props.leftQues.length * 360)/ TotalQuestions;

  const dataInnerPie = [
    { name: "correct", value: props.correct.length },
    { name: "incorrect", value: props.incorrect.length },
    { name: "not Atempted", value: props.leftQues.length },
  ];

  const temp = parseInt(props.piedata[0]["your-time"]);
  console.log("temp--->",temp);
  


  const data02 = [
  {  value1: temp, question: "1" },
  {  value1: temp, question: "2" },
  {  value1: temp, question: "3" },
  { value1: temp, question: "4" },
  {  value1: temp, question: "5" },
  {value1: temp, question: "6" },
  {  value1: temp, question: "7" },

];


  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );


  return(
    <div>
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        data={dataInnerPie}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
        onMouseEnter={onPieEnter}

      />
      <Pie
              data={props.correct}
              dataKey="props.correct.Queno"
              cx={200}
              cy={200}
              startAngle={0}
              endAngle={correctAngle}
              innerRadius={60}
              outerRadius={150}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              fill="red"
            />
         <Pie
              data={data02}
              dataKey="value1"
              cx={200}
              cy={200}
              startAngle={correctAngle}
              endAngle={correctAngle + incorrectAngle}
              innerRadius={60}
              outerRadius={150}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              fill="#82ca9d"
            />

            <Pie
              data={data02}
              dataKey="value1"
              cx={200}
              cy={200}
              startAngle={correctAngle + incorrectAngle}
              endAngle={correctAngle + incorrectAngle + leftQuesAngle}
              innerRadius={60}
              outerRadius={150}
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              fill="#82ca9d"
            />
    </PieChart>

    </div>
  )
}



// //import "./styles.css";
// import React, { useState, useCallback } from "react";
// import { PieChart, Pie, Tooltip, Cell, Sector } from "recharts";

// const COLORS = ["purple", "blue", "lightblue"];
// const COLOR = ["green ", "red", "orange"];

// const data01 = [
//   { question1: "Correct", value: 40, label: "Correct" },
//   { question1: "Incorrect", value: 40, label: "Incorrect" },
//   { question1: "Not Attempted", value: 20, label: "Not Attempted" },
// ];
// const data02 = [
//   { name1: "Hard", value1: 1, question: "1" },
//   { name1: "Medium", value1: 1, question: "2" },
//   { name1: "Medium", value1: 1, question: "3" },
//   { name1: "Hard", value1: 1, question: "4" },
//   { name1: "Easy", value1: 1, question: "5" },
//   { name1: "Medium", value1: 1, question: "6" },
//   { name1: "Hard", value1: 1, question: "7" },
//   { name1: "Easy", value1: 1, question: "8" },
//   { name1: "Easy", value1: 1, question: "9" },
//   { name1: "Hard", value1: 1, question: "10" },
//   { name1: "Easy", value1: 1, question: "11" },
//   { name1: "Hard", value1: 1, question: "12" },
//   { name1: "Easy", value1: 1, question: "13" },
//   { name1: "Easy", value1: 1, question: "14" },
//   { name1: "Hard", value1: 1, question: "15" },
//   { name1: "Easy", value1: 1, question: "16" },
//   { name1: "Hard", value1: 1, question: "17" },
//   { name1: "Easy", value1: 1, question: "18" },
//   { name1: "Easy", value1: 1, question: "19" },
//   { name1: "Hard", value1: 1, question: "20" },
//   { name1: "Easy", value1: 1, question: "21" },
// ];

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//     question,
//     value1,
//   } = props;

//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 5;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={240} textAnchor="middle" fill={fill}>
//         {payload.name1}
//       </text>

//       {/* <text x={cx} y={cy} dy={600} textAnchor="middle" fill={fill}>
//         {payload.question1}
//       </text> */}

//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius + 15}
//         outerRadius={outerRadius - 12}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 5}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`${question}`}</text>

//       {/* <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text> */}

//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 5}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {/* {`(Rate ${(percent * 100).toFixed(2)}%)`} */}
//       </text>
//     </g>
//   );
// };

// export default function App() {
//   const [activeIndex, setActiveIndex] = useState();
//   const onPieEnter = useCallback(
//     (_, index) => {
//       setActiveIndex(index);
//     },
//     [setActiveIndex]
//   );
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-5">
//           <PieChart width={1000} height={1000}>
//             <Pie
//               data={data01}
//               // dataKey="value"
//               cx={200}
//               cy={200}
//               outerRadius={60}
//               fill="#8884d8"
//               label
//               nameKey="label"
//             >
//               {data01.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>
//             <Pie
//               data={data02}
//               dataKey="value1"
//               cx={200}
//               cy={200}
//               innerRadius={60}
//               outerRadius={150}
//               activeIndex={activeIndex}
//               activeShape={renderActiveShape}
//               onMouseEnter={onPieEnter}
//               fill="#82ca9d"
//               //  label nameKey="name1"
//             >
//               {data02.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLOR[index % COLOR.length]}
//                 />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </div>
//       </div>
//     </div>
//   );
// }











//   console.log(props)
//   const options = {
//     legend: {
//       display: false,
//       position: "right"
//     },
//     elements: {
//       arc: {
//         borderWidth: 0
//       }
//     }
//   };
//   const pieOptions = {
//     legend: {
//       display: true,
//       position: "right",
//       legendCallback: function (chart) {
//         console.log(chart);
//         return [
//           <ul>
//             <li>z</li>
//             <li>zzzz</li>
//             <li>ppp</li>
//             <li>adasda</li>
//           </ul>
//         ];
//       }
//     },
//     elements: {
//       arc: {
//         borderWidth: 0
//       }
//     }
//   };

//   const data = {
//     maintainAspectRatio: false,
//     responsive: false,
//     labels: [],
//     datasets: [
//       {
//         data: props.doughdata,
//         backgroundColor: props.doughcolor,
//         borderColor: "black",
//         borderWidth: 1,
//         hoverBackgroundColor: "black"
//       }
//     ]
//   };




//   const pieData = {
//     maintainAspectRatio: false,
//     responsive: false,
//     labels: [],
//     datasets: [
//       {
//         data: props.piedata,
//         backgroundColor: ["lightblue", "blue", "purple"],
//         hoverBackgroundColor: ["lightblue", "blue", "purple"],
//         borderColor: "black",
//         borderWidth: 1
//       }
//     ]
//   };

//   let chartInstance = null;
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center"  >
//         <div className="col-lg-8">
//           <div className="pieanddough">
//             <div style={styles.relative}>
//               <div className="">
//               {/* <FaltuChart/> */}
//                 <Doughnut data={data} options={options} />
//               </div>
//               <div className="pie">
             
//                 <Pie
//                   data={pieData}
//                   options={pieOptions}
//                   ref={(input) => {
//                     chartInstance = input;
//                   }}
//                 />
//               </div>
//               <div id="legend" />
//             </div>
//             </div>
//           </div>
//         </div >
//       </div>
//   );
// }

// const styles = {
//   relative: {
//     position: "relative",
//   },
// };

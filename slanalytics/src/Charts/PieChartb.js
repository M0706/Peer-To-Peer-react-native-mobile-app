import React from "react";
import { Doughnut, Pie, Chart} from "react-chartjs-2";
import './styles.css';


export default function PieChartb(props) {
  const individualLength = [props.correct.length,props.incorrect.length,props.leftQues.length]
  const concatOrder = props.correct.concat(props.incorrect).concat(props.leftQues);
  const QuestionData = props.piedata;
  const [widthEachArc, colourEachArc, quesNoOrder] = [[],[],[]]

  QuestionData.map((Question)=>{
    widthEachArc.push(1);
    colourEachArc.push(concatOrder[Question.Queno-1].questionColor);
    quesNoOrder.push(concatOrder[Question.Queno-1].Queno);
  })

  const doughnutOptions = {
    legend: {
      display: false,
      position: "right"
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, concatOrder) {
          console.log("tooltipiitem===>",tooltipItem)
          //return tooltipItems[0].formattedValue;
        },
        // label: function(tooltipItem, data) {
        // },
        // afterLabel: function(tooltipItem, data) {
         
        // }
      }
    }
  };
  
  
  const doughnutData = {
    maintainAspectRatio: false,
    responsive: false,
    labels: [],
    datasets: [
      {
        //data: quesNoOrder,
        data: widthEachArc,
        backgroundColor: colourEachArc,
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "black",
      }
    ]
  };

  const pieOptions = {
    legend: {
      display: true,
      position: "right",
      legendCallback: function (chart) {
        console.log(chart);
        return ;
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };

  const dataPie = {
    maintainAspectRatio: false,
    responsive: false,
    labels: [],
    datasets: [
      {
        data: individualLength,
        backgroundColor: ["lightblue", "blue", "purple"],
        hoverBackgroundColor: ["lightblue", "blue", "purple"],
        borderColor: "black",
        borderWidth: 1
      }
    ],
    
  };




  return (
    <div className="container mt-5">
      <div className="row justify-content-center"  >
        <div className="col-lg-8">
          <div className="pieanddough">
            <div style={styles.relative}>
              <div className="">
                <Doughnut data={doughnutData} options={doughnutOptions} />
           </div>
              <div className="pie">
             
                <Pie
                  data={dataPie}
                  options={pieOptions}
                  // ref={(input) => {
                  //   chartInstance = input;
                  // }}
                />
              </div>
              <div id="legend" />
            </div>
            </div>
          </div>
        </div >
      </div>
  );
}

const styles = {
  relative: {
    position: "relative",
  },
};












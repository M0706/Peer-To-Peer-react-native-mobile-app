import React from 'react'
import data from "./data.json"
import Heatmap from "./PieChartb"
import Barchart from './BarChart';

export default function Bothchart(){

    const [correct, incorrect, leftQues] = [[],[],[]]
    const [QuesNo,studentTime, timeColor, topperTime] = [[],[],[],[]]
    const questionLevel = (Ques) =>{
       if(Ques.Quetype==="Easy"){ return "green"}
       if(Ques.Quetype==="Medium"){ return "yellow"}
       if(Ques.Quetype==="Hard"){ return "red"}
    }
    
    const mapQuestions = ()=>{
        data.map((Question)=>{
            const questionColor = questionLevel(Question);
            Question.questionColor= questionColor;
            QuesNo.push(Question.Queno); 
            studentTime.push(Question['your-time']); 
            topperTime.push(Question['topper-time']);
            timeColor.push(Question.questionColor);     
            if(Question.Correct==="yes"){correct.push(Question)}
            else if(Question.Correct==="no"){incorrect.push(Question)}
            else{leftQues.push(Question)}
        })
    }
    mapQuestions();

    return(
        <div>
            <Heatmap piedata={data} correct={correct} incorrect={incorrect} leftQues={leftQues} />
            <Barchart Queno ={QuesNo} yourTime={studentTime} yourtimeColor={timeColor} topperTime={topperTime}/>

        </div>
    )
}
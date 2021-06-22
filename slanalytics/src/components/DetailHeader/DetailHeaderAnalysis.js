import React from 'react';
import "../../Styles/DetailsHeader.css"
import {CheckCircleOutline,ThumbDown,KeyboardArrowDown,Check, Cancel,Speed, Help}  from "@material-ui/icons";
import IndividualSubjectData from '../../Data/individualSubjectData.json'
import AnswerData from '../../Data/AnswersData.json'



export default function DetailHeaderAnalysis(props) {
    let [Questions, Answered, Correct, Incorrect, notVisited, negative] = [0,0,0,0,0];

    const renderCorrectData = (subject) =>{
        if(subject==="TotalScore"){
            Questions= AnswerData.length;
            negative = AnswerData[0].TotalNegative;
            AnswerData.map((Question)=>{
                if(Question.Correct==="not attempted")
                {
                    Answered=Answered + 1;
                    if(Question.notVisited){
                        notVisited=notVisited+1}
                }
                else if(Question.Correct!=="not attempted"){
                    Answered=Answered+1;
                    if(Question.Correct===true){
                        Correct=Correct+1
                    }
                    else{
                        Incorrect=Incorrect+1;
                    }
                }
               
            })
        }
        else{
            IndividualSubjectData.map((sub)=>{
                if(sub.subject===subject){
                    //console.log(sub);
                    Questions = sub.TotalQuestion;
                    Answered  = sub.Answered;
                    Correct = sub.TotalCorrect;
                    Incorrect = sub.TotalIncorrect
                    notVisited = sub.notVisited;
                    negative =  sub.negative;
                }
            })
        }

    }

    renderCorrectData(props.subject);

  return (

    <div className="Features">
      <div className="BoxType">
      <span className="IconType"><Help/></span>
      <div className="Types">
        <span className="TotalValue">{Questions}</span>
        <div className="TypeContainer">
          <span className="TitleName">Questions</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><Check/></span>
      <div className="Types">
        <span className="TotalValue">{Answered}</span>
        <div className="TypeContainer">
          <span className="TitleName">Answered</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><CheckCircleOutline/></span>
      <div className="Types">
        <span className="TotalValue">{Correct}</span>
        <div className="TypeContainer">
          <span className="TitleName">Correct</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><Cancel/></span>
      <div className="Types">
        <span className="TotalValue">{Incorrect}</span>
        <div className="TypeContainer">
          <span className="TitleName">Incorrect</span>
        </div>
        </div>
      </div>
   
      <div className="BoxType">
      <span className="IconType"><ThumbDown/></span>
      <div className="Types">
        <span className="TotalValue">{notVisited}</span>
        <div className="TypeContainer">
          <span className="TitleName">Not visited</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><KeyboardArrowDown/></span>
      <div className="Types">
        <span className="TotalValue">{negative}</span>
        <div className="TypeContainer">
          <span className="TitleName">Negative Marks</span>
        </div>
        </div>
      </div>
    </div>
  );
}
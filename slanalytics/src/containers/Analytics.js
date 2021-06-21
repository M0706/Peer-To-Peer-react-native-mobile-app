import React from 'react';
import Header from '../components/Header'
import '../Styles/AnalyticsMain.css';
import {Link} from "react-router-dom";
import data from "../Data/individualQuestionData.json"
import SubHeaderQuesWise from '../components/SubHeader/SubHeaderQuesWise';
import SubHeaderSubjectWise from '../components/SubHeader/SubHeaderSubjectWise';
import SubHeaderTotalScore from '../components/SubHeader/SubHeaderTotalScore';
import DetailHeaderAnalysis from '../components/DetailHeader/DetailHeaderAnalysis';
import Bottom from '../components/Bottom/Bottom';

const AnalyticsMain = () =>{
    


    const getTotalMarks = () =>{
        let [MarksScoredTotal,TotalMarks,TotalQuestion] = [0,0,0];
        data.map((Question)=>{
            MarksScoredTotal=MarksScoredTotal+parseInt(Question.MarksScored);
            TotalMarks = TotalMarks + parseInt(Question.TotalMarks)
        })

        return(
            <SubHeaderTotalScore MarksScoredTotal={MarksScoredTotal} TotalMarks={TotalMarks} />
        )

    }
        
    
    return(
        <div>
            <Header />
            <SubHeaderQuesWise/>
            {getTotalMarks()}         
            {data.map((Question)=>{
                    //console.log(Question)
                    return(
                        <div>
                        <SubHeaderSubjectWise MarksScored={Question.MarksScored} TotalMarks={Question.TotalMarks} Subject={Question.subject} />
                        </div>)
            })
            }
            <DetailHeaderAnalysis/>
            {/* <Bottom/> */}
            {/* <CenteredGrid/> */}
        </div>
    )
}

export default AnalyticsMain;
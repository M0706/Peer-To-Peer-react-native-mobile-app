import React, {useState} from 'react';
import Header from '../components/Header'
import '../Styles/AnalyticsMain.css';
import QuestionWiseData from "../Data/individualSubjectData.json"
import SubHeaderQuesWise from '../components/SubHeader/SubHeaderQuesWise';
import SubHeaderSubjectWise from '../components/SubHeader/SubHeaderSubjectWise';
import SubHeaderTotalScore from '../components/SubHeader/SubHeaderTotalScore';
import DetailHeaderAnalysis from '../components/DetailHeader/DetailHeaderAnalysis';
import Bottom from '../components/Bottom/Bottom';

const AnalyticsMain = () =>{
    const [subject,setSubject] = useState("TotalScore");


    const getTotalMarks = () =>{
        let [MarksScoredTotal,TotalMarks] = [0,0];
        QuestionWiseData.map((Question)=>{
            MarksScoredTotal=MarksScoredTotal+parseInt(Question.MarksScored);
            TotalMarks = TotalMarks + parseInt(Question.TotalMarks)
        })

        return(
            <div onClick={()=>setSubject("TotalScore")}>
            <SubHeaderTotalScore MarksScoredTotal={MarksScoredTotal} TotalMarks={TotalMarks} />
            </div>
        )

    }

    //const SubjectData = 
        
    
    return(
        <div>
            <Header />
            <SubHeaderQuesWise/>
            {getTotalMarks()}         
            {QuestionWiseData.map((Question)=>{
                    //console.log(Question)
                    return(
                        <div onClick = {()=>setSubject(Question.subject)}>
                        <SubHeaderSubjectWise MarksScored={Question.MarksScored} TotalMarks={Question.TotalMarks} Subject={Question.subject} />
                        </div>)
            })
            }

            <DetailHeaderAnalysis subject = {subject}/>
            <Bottom/>

        </div>
    )
}

export default AnalyticsMain;
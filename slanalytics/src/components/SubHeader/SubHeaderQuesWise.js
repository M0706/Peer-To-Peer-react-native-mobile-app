import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AnalyticsMain.css"

const SubHeaderQuesWise = (props) =>{
    
    return(
        <div>

        <Link to="/BothCharts"> 
            <div className="QuestionWiseBackGround">
                <p className="QuestionWise">Click for Question-Level-Anaysis</p>
               
            </div>
            </Link>
        </div>

    )
}

export default SubHeaderQuesWise;


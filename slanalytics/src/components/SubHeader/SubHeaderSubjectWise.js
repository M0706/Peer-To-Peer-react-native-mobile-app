import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AnalyticsMain.css"

const SubHeaderSubjectWise = (props) =>{
    const MarksScored = props.MarksScored;
    const TotalMarks = props.TotalMarks;
    console.log("props", props)

    return(
        <div>

            <Link to="/BothCharts"> 
            <div className="Testtotal">
                <div className="Score">{props.Subject}</div>
                <div className="MarksScored"> 
                {MarksScored}/{TotalMarks}
                </div>
            </div>
            </Link>

        </div>

    )
}

export default SubHeaderSubjectWise;


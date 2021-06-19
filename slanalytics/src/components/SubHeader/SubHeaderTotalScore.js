import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/AnalyticsMain.css"

const SubHeaderTotalScore = (props) =>{
    const MarksScoredTotal = props.MarksScoredTotal;
    const TotalMarks = props.TotalMarks;

    return(
        <div>
        <Link to="/BothCharts"> 
            <div className="Testtotal">
                <div className="Score">Total Score</div>
                <div className="MarksScored"> 
                {MarksScoredTotal}/{TotalMarks}
                </div>
            </div>
            </Link>

        </div>

    )
}

export default SubHeaderTotalScore;


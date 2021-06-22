import React from 'react';
import { Link } from 'react-router-dom';
import DetailHeaderAnalysis from '../DetailHeader/DetailHeaderAnalysis';

import "../../Styles/AnalyticsMain.css"


const SubHeaderSubjectWise = (props) =>{
    const MarksScored = props.MarksScored;
    const TotalMarks = props.TotalMarks;

    return(
        <div>

            <Link to="/"> 
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
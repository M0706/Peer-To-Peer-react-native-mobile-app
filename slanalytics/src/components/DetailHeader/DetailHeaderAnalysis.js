import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../../Styles/AnalyticsMain.css"
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import incorrectIcon from '../Assets/img/incorrectIcon.jpg';
// import Image from 'react-bootstrap/Image';

import {CheckCircleOutline,ThumbDown,KeyboardArrowDown,Check, Cancel,Speed, Help}  from "@material-ui/icons";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

export default function DetailHeaderAnalysis() {
  // const classes = useStyles();

  return (

    <div className="Features">
      <div className="BoxType">
      <span className="IconType"><Help/></span>
      <div className="Types">
        <span className="TotalValue">60</span>
        <div className="TypeContainer">
          <span className="TitleName">Questions</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><Check/></span>
      <div className="Types">
        <span className="TotalValue">60</span>
        <div className="TypeContainer">
          <span className="TitleName">Questions</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><CheckCircleOutline/></span>
      <div className="Types">
        <span className="TotalValue">60</span>
        <div className="TypeContainer">
          <span className="TitleName">Correct</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><Cancel/></span>
      <div className="Types">
        <span className="TotalValue">60</span>
        <div className="TypeContainer">
          <span className="TitleName">Incorrect</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><Speed/></span>
      <div className="Types">
        <span className="TotalValue">60</span>
        <div className="TypeContainer">
          <span className="TitleName">Correct with in Time</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><ThumbDown/></span>
      <div className="Types">
        <span className="TotalValue">10</span>
        <div className="TypeContainer">
          <span className="TitleName">Not visited</span>
        </div>
        </div>
      </div>
      <div className="BoxType">
      <span className="IconType"><KeyboardArrowDown/></span>
      <div className="Types">
        <span className="TotalValue">5</span>
        <div className="TypeContainer">
          <span className="TitleName">Negative Marks</span>
        </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Bottom.css";
import IndividualSubjectData from '../../Data/individualSubjectData.json';
import AnswersData from '../../Data/AnswersData.json';

export default function Bottom(props) {

  return (
    <div className="Box">
      <div>
        <div className="Overview">Overview</div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
            Total 179 minutes spent on paper out of 180 minutes available.
          </div>
        </div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
            11 negative marks scored in Chemistry of a total of 21 negative
            marks{" "}
          </div>
        </div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
            Total of 55 minutes were spent on 23 unanswered questions
          </div>
        </div>
      </div>

      <div>
        <div className="Overview">SWITCHOVERS</div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
          Of the 22 questions answered in single attempt 12 were correct
          </div>
        </div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
          1 instance of question viewed more than once of which 1 was correct and total time spent was 5.3 minutes
          </div>
        </div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
          3 questions where answers were changed, answers were changed 6 times, 1 finally answered correctly
          </div>
        </div>
      </div>

      <div>
        <div className="Overview">SECTION/CHAPTER WISE
</div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
          Performance in different difficulty levels (Total Correct/Total Questions)
          </div>
        </div>
        <div className="Row1">

          <div className="first">
          <div className="FullTable">
          <table className="InnerTable">
  <tr>
    <th>Section/Chapter</th>
    <th>Easy</th>
    <th>Medium</th>
    <th>Difficult</th>
    <th>TotalMarks</th>
    <th>Total Negative</th>
  </tr>
  <tr>
    <td>Organic</td>
    <td>3/5</td>
    <td>1/5</td>
    <td>2/5</td>
    <td>8</td>
    <td>1</td>
  </tr>
  <tr>
  <td>Inorganic</td>
    <td>4/5</td>
    <td>1/5</td>
    <td>2/5</td>
    <td>12</td>
    <td>2</td>
  </tr>
  <tr>
  <td>Physical</td>
    <td>3/5</td>
    <td>1/5</td>
    <td>2/5</td>
    <td>10</td>
    <td>1</td>
  </tr>
  <tr>
  <td>Total</td>
    <td>3/5</td>
    <td>1/5</td>
    <td>2/5</td>
    <td>5</td>
    <td>1</td>
  </tr>
</table>
          </div>
          </div>
        </div>
      </div>

      <div>
        <div className="Overview">TIME UTILIZATION</div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
          2 out of 90 questions were answered in significantly less than budgeted time of which 2 answered correctly.
          </div>
        </div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
          14 out of 90 questions were answered in less than budgeted time of which 10 answered correctly.
          </div>
        </div>
        <div className="Row1">
        <div className="Wrong"></div>
          <div className="first">
          3 questions answered in 150% of estimated time.
          </div>
        </div>
      </div>

    </div>
  );
}

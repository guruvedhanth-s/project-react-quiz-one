import React, { Component } from 'react'
import "../App.css"

export class Result extends Component {
  render() {
    return (
      <div className='container-3'>
      <h1>Result</h1>
      <div className="seconddiv">
          <div className="quote">You need more practice!</div>
          <div className="score">Your score is 20 %</div>
          <div className='details'>
          <div className="lineflex"><span>Total number of questions</span><span>15</span></div>
          <div className="lineflex"><span>Number Of attempted questions</span><span>9</span></div>
          <div className="lineflex"><span>Number of correct answers</span><span>3</span></div>
          <div className="lineflex"><span>Number Of wrong answers</span><span>6</span></div>
          </div>
      </div>
      <div className="buttons">
          <button>Play again</button>
          <button>Back to home</button>
      </div>
    </div>
    )
  }
}

export default Result
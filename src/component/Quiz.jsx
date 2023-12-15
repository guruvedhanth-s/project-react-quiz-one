import React, { Component } from 'react'
import "../App.css"

export class Quiz extends Component {
  render() {
    return (
      <>
        <div className='boss'>
            <div className='container-2'>
            <div className='smallcontainer'>
            <h1>Question</h1>
            <span>1 of 5 </span>
            </div>
            <p className='question'>Which is the only mammal that can jump</p>
            
            <div className='options'>
                <button className='btn-1'>option-1</button>
                <button className='btn-1'>option-2</button>
                <button className='btn-1'>option-3</button>
                <button className='btn-1'>option-4</button>
            </div>
            <div className='movements'> 
                <button className='btn-2' id='previous'>Previous</button>
                <button className='btn-2' id='Next'>Next</button>
                <button className='btn-2'id='Quit'>Quit</button>
            </div>
            </div>
        </div>
      </>
    )
  }
}

export default Quiz
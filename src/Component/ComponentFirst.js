import React, { Component } from 'react'
import './CompenentFirst.css'
export default class ComponentFirst extends Component {
  constructor(props) {
    super(props)
    this.firstInput = React.createRef();
    this.secondInput = React.createRef();
    this.result = React.createRef();
  }
  addBtn = () => {
    this.result.current.value = parseFloat(this.firstInput.current.value) + parseFloat(this.secondInput.current.value)
  }
  minusBtn = () => {
    this.result.current.value = ((this.firstInput.current.value) - (this.secondInput.current.value))
  }
  substractionBtn = () => {
    this.result.current.value = ((this.firstInput.current.value) * (this.secondInput.current.value))
  }
  divideBtn = () => {
    this.result.current.value = ((this.firstInput.current.value) / (this.secondInput.current.value))
  }
  render() {
    return (
      <div>
        <div className='input-value'>
          <div className='form-value'>
            <h3>Ref React Simple Calculator</h3>
            <label>First Num</label>
            <input type="number" ref={this.firstInput} />
            <label>Second Num</label>
            <input type="number" ref={this.secondInput} />
            <div className='btn-group'>
            <button onClick={this.addBtn}>+</button>
            <button onClick={this.minusBtn}>-</button>
            <button onClick={this.substractionBtn}>*</button>
            <button onClick={this.divideBtn}>/</button>
            </div>
           
            <label>Result:</label>
            <input type="number" ref={this.result} />
          </div>
        </div>

      </div>
    )
  }
}

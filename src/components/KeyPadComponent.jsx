import React, { Component } from 'react';

class KeyPadComponent extends Component { 
  render() {
    return (
      <div className="buttons">
        <div className="button"></div>
        <div className="button"></div>
        <div className="button"></div>
        <button className="button" name="C" onClick={e => this.props.onClick(e.target.name)}>⌫</button>

        <button className="button" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
        <button className="button" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
        <button className="button" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
        <button className="button" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>

        <button className="button" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
        <button className="button" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
        <button className="button" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
        <button className="button" name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>

        <button className="button" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
        <button className="button" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
        <button className="button" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
        <button className="button" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>

        <button className="button" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
        <button className="button" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
        <button className="button" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
        <button className="button" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
      </div>
    )
  }
}

export default KeyPadComponent;

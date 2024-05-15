import { Component } from 'react'

export default class Bai1 extends Component<{}, handleClick> {
       
  render() {
    const handleClick = () => {
        console.log('Clicked');
    };
    return (
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    )
  }
}

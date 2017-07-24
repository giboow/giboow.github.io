import {Component} from 'react'

export default class ScrollNav extends Component {

  state = {
    top : 0,
    right: "200px",
    bottom: 0,
    left:0
  }

  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  updateDimensions() {

  }


  render() {

    const {state} = this

    console.log(state)
    return (
      <div style={{
        position:"fixed",
        top: state.top,
        right: state.right,
        bottom: state.bottom,
        left: state.left
      }}>
      Hello :)
      </div>
    )
  }
}
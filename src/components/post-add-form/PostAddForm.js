import React, { Component } from "react"
import "./PostAddForm.css"

export default class PostAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
    }
    this.onChangeValue = this.onChangeValue.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChangeValue(e) {
    this.setState({
      text: e.target.value,
    })
  }
  onSubmit(e) {
    e.preventDefault()
    this.props.addItem(this.state.text)
    this.setState({
      text: "",
    })
  }
  render() {
    // const { addItem } = this.props
    return (
      <form onSubmit={this.onSubmit} className="bottom-panel d-flex" action="#">
        <input
          onChange={this.onChangeValue}
          type="text"
          placeholder="Введите мысль"
          className="form-control new-post-label"
          value={this.state.text}
        />
        <button
          type="submit"
          // onClick={() => addItem(this.state.text)}
          className="btn btn-outline-secondary"
        >
          Добавить
        </button>
      </form>
    )
  }
}

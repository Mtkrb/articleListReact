import React, { Component } from "react"
import "./SearchPanel.css"

export default class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
    }
    this.onSearchPost = this.onSearchPost.bind(this)
  }
  onSearchPost(e) {
    const value = e.target.value
    this.setState({
      text: value,
    })
    this.props.onUpdateSearchPanel(value)
  }
  render() {
    return (
      <input
        className="form-control search input"
        type="text"
        placeholder="Поиск записей"
        onChange={this.onSearchPost}
      />
    )
  }
}

import React, { Component } from "react"
import { Button } from "reactstrap"
import "./PostStatus.css"

export default class PostStatus extends Component {
  constructor(props) {
    super(props)
    this.button = [
      { name: "all", label: "Все" },
      { name: "like", label: "Понравившиеся" },
    ]
  }
  render() {
    console.log(this.props.filter)
    const buttons = this.button.map(({ name, label }) => {
      const active = this.props.filter === name
      const activeClass = active ? "btn-info" : "btn-outline-secondary"
      return (
        <Button
          onClick={() => this.props.onUpdateFilter(name)}
          key={name}
          className={`${activeClass}`}
          color="info"
        >
          {label}
        </Button>
      )
    })
    return <div className="btn-group">{buttons}</div>
  }
}

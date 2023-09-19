import React, { Component } from "react"
import { BsFillTrashFill } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai"
import "./PostListItem.scss"
import "./PostListItem.css"
import style from "./app.module.css"
export default class PostListItem extends Component {
  render() {
    const { text, onDelete, important, like, onToggleImportant, onToggleLike } =
      this.props

    let classNames = "app-list-item d-flex justify-content-between"
    if (important) {
      classNames += " important"
    }
    if (like) {
      classNames += " like"
    }
    return (
      <li className={classNames}>
        <span
          className={"app-list-item__label " + style.borderBottomPink}
          onClick={onToggleLike}
        >
          {text}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={onToggleImportant}>
            <AiFillStar />
          </button>
          <button className="btn-trash btn-sm" onClick={onDelete}>
            <BsFillTrashFill />
          </button>
        </div>
      </li>
    )
  }
}

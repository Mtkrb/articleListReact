import React, { Component } from "react"
import PostListItem from "../post-list-item"

export default class PostList extends Component {
  render() {
    const { posts, onDelete, onToggleImportant, onToggleLike } = this.props

    return (
      <ul className="app-list list-group">
        {posts.map((item, id) => (
          <PostListItem
            key={id}
            {...item}
            onDelete={() => onDelete(item.id)}
            onToggleImportant={() => onToggleImportant(item.id)}
            onToggleLike={() => onToggleLike(item.id)}
          />
        ))}
      </ul>
    )
  }
}

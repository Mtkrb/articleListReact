import React, { Component } from "react"
import AppHeader from "../app-header/AppHeader"
import PostAddForm from "../post-add-form"
import PostList from "../post-list"
import PostStatus from "../post-status"
import SearchPanel from "../search-panel"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          text: "Статья номер 1",
          important: true,
          like: true,
          id: 0,
        },
        {
          text: "Статья номер 2",
          important: false,
          like: false,
          id: 1,
        },
        {
          text: "Статья номер 3",
          important: false,
          like: false,
          id: 2,
        },
      ],
      searchValue: "",
      filter: "",
    }
    this.onDelete = this.onDelete.bind(this)
    this.addItem = this.addItem.bind(this)
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLike = this.onToggleLike.bind(this)
    this.onUpdateSearchPanel = this.onUpdateSearchPanel.bind(this)
    this.onUpdateFilter = this.onUpdateFilter.bind(this)
    this.id = 3
  }
  onDelete(id) {
    this.setState(({ posts }) => {
      const index = posts.findIndex((elem) => elem.id === id)

      const before = posts.slice(0, index)
      const after = posts.slice(index + 1)
      const newData = [...before, ...after]
      return {
        posts: newData,
      }
    })
  }
  addItem(text) {
    const newItem = {
      text: text,
      important: false,
      id: this.id++,
    }
    this.setState(() => {
      let posts = this.state.posts

      const newArr = [...posts, newItem]
      console.log(newArr)
      return {
        posts: newArr,
      }
    })
  }

  onToggleImportant(id) {
    this.setState(({ posts }) => {
      const index = posts.findIndex((elem) => elem.id === id)

      const before = posts[index]
      const newImportant = { ...before, important: !before.important }
      const newData = [
        ...posts.slice(0, index),
        newImportant,
        ...posts.slice(index + 1),
      ]
      return {
        posts: newData,
      }
    })
  }
  onToggleLike(id) {
    this.setState(({ posts }) => {
      const index = posts.findIndex((elem) => elem.id === id)

      const before = posts[index]
      const newlike = { ...before, like: !before.like }
      const newData = [
        ...posts.slice(0, index),
        newlike,
        ...posts.slice(index + 1),
      ]
      return {
        posts: newData,
      }
    })
  }

  searchPost(items, searchValue) {
    if (searchValue.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.text.indexOf(searchValue) > -1
    })
  }

  onUpdateSearchPanel(value) {
    this.setState({
      searchValue: value,
    })
  }

  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like)
    } else {
      return items
    }
  }

  onUpdateFilter(value) {
    this.setState({
      filter: value,
    })
  }

  render() {
    // return <div className="blockPanel">Beka</div>
    const likes = this.state.posts.filter((item) => item.like).length
    const searchPost = this.filterPost(
      this.searchPost(this.state.posts, this.state.searchValue),
      this.state.filter
    )
    const allPosts = searchPost.length
    return (
      <div className="container">
        <AppHeader allPosts={allPosts} likes={likes} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearchPanel={this.onUpdateSearchPanel} />
          <PostStatus
            filter={this.state.filter}
            onUpdateFilter={this.onUpdateFilter}
          />
        </div>
        <PostList
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
          onDelete={this.onDelete}
          posts={searchPost}
        />
        <PostAddForm addItem={this.addItem} />
      </div>
    )
  }
}

// class getData {
//   constructor() {
//     this._baseUrl = "https://jsonplaceholder.typicode.com"
//   }
//   async fetchData(url) {
//     const res = await fetch(`${this._baseUrl}${url}`)
//     if (!res.ok) {
//       throw new Error(`Некорректная ссылка ${url}, статус ${res.status}`)
//     }
//     const json = await res.json()
//     return json
//   }
//   getAllPost() {
//     return this.fetchData("/posts")
//   }

//   getPostById(id) {
//     return this.fetchData(`/posts/${id}`)
//   }
// }

// const get = new getData()

// get.getAllPost().then((res) => {
//   res.forEach((element) => {
//     console.log(element.title)
//   })
// })
// get.getPostById(42).then((res) => console.log(res))

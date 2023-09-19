import React, { Component } from "react"
import "./AppHeaderCss.css"
import styled from "styled-components"

const Header = styled.header`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }

  h2 {
    color: grey;
    font-size: 18px;
  }
`
// const Div = styled(Header)`
//   background: red;
// `

export default class AppHeader extends Component {
  render() {
    const { allPosts, likes } = this.props

    return (
      <Header className="app-header d-flex">
        <h1>Bektemir Abilov</h1>
        <h2>
          {allPosts} записи из них {likes} понравилось
        </h2>
      </Header>
    )
  }
}

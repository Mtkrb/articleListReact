// import React, { Component } from "react"

// export class SocialMedia extends Component {
//   state = {
//     count: 1,
//   }

//   // this.Share = this.Share.bind(this)

//   Share = () => {
//     // console.log(this.params.count++)
//     this.setState((state) => ({
//       count: ++state.count,
//     }))
//   }

//   render() {
//     const { link, text, social } = this.props
//     const { count } = this.state
//     return (
//       <p>
//         <button onClick={this.Share}>+1</button>
//         <a href={link}>{text}</a>
//         <span>{social}</span>
//         <span>{count}</span>
//       </p>
//     )
//   }
// }

// export default class All extends Component {
//   // constructor(props) {
//   //   super(props)
//   // }
//   render() {
//     return (
//       <>
//         <SocialMedia link="https://react.com" text="Link" social="react" />
//         <SocialMedia
//           link="https://facebook.com"
//           text="Link"
//           social="facebook"
//         />
//         <SocialMedia link="https://twitter.com" text="Link" social="twitter" />
//       </>
//     )
//   }
// }

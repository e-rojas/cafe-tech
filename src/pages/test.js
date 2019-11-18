import React, { Component } from 'react'
import axios from 'axios'
export default class Test extends Component {
    componentDidMount() {
        axios.get(`http://localhost:8000/users`)
          .then(res => {
            const persons = res.data;
           console.log(persons)
          })
      }
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

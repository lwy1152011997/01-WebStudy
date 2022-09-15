import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  myRef = React.createRef()

  search = () => {
    let { updateState } = this.props
    // 获取输入
    let keyWord = this.myRef.current.value
    // 校验数据
    if (keyWord.trim() === '') return
    // 发生请求
    let URL = `https://api.github.com/search/users?q=${keyWord}`
    // 更新状态
    updateState({
      user: [],
      isFirst: false,
      isLoading: true,
      error: ''
    })
    axios.get(URL)
      .then((value) => {
        updateState({
          user: value.data.items,
          isFirst: false,
          isLoading: false,
          error: ''
        })
      })
      .catch((error) => {
        updateState({
          user: [],
          isFirst: false,
          isLoading: false,
          error: error.message
        })
      })
    // 清空输入
    this.myRef.current.value = ''
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="请输入关键字" ref={this.myRef} />&nbsp;
        <button onClick={this.search}>搜素</button>
      </div>
    )
  }
}
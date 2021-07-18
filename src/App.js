import React from 'react'
import Todo from './component/Todo'
import Counter from './component/Counter'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Todo/>
        <Counter/>
      </div>
    )
  }
}



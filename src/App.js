import { useState } from 'react';
import Todo from './component/Todo'
import Counter from './component/Counter'
import MyComponent from './component/MyComponent'


export default function App () {
  const [show, setShow] = useState(true);

    return (
      <div>
        <Todo/>
        <Counter/>
        <div>{show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? 'Hide post' : 'Show post'}
                </button>
            </p>
      </div>
    )
}



/* eslint-disable no-unused-vars */
import { useCallback, useMemo, useState} from 'react';
import Todo from './component/Todo'
import Counter from './component/Counter'
import Counterr from './component/useReducer/Counter'
import MyComponent from './component/MyComponent'
import Button from './component/Button';
import ShowCount from './component/ShowCount';
import Title from './component/Title';
import Form from './component/Form';
import Time from './component/Time';
import ComplexCounter from './component/useReducer/ComplexCounter';
import CounterThree from './component/useReducer/CounterThree';

//custom hook
// import LayoutCopoOne from './component/custom hook/LayoutCopo';
// import LayoutCopoTwo from './component/custom hook/LayoutCopoTwo';


export default function App () {
  // const [show, setShow] = useState(true);

  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);

  // const incrementByOne = useCallback(() =>{
  //   setCount1((prevCount) => prevCount + 1);
  // },[]) 

  // const incrementByFive = useCallback(() =>{
  //   setCount2((prevCount) => prevCount + 5);
  // },[])

  // const isEvenOrOdd = useMemo(() => {
  //     let i = 0;
  //     while (i < 1000000000) i += 1; // costly operation
  //     return count1 % 2 === 0;
  // }, [count1]);

    return (
      <div>
          {/* <Todo/>
        <Counter/>
        <div>{show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? 'Hide post' : 'Show post'}
                </button>
            </p> 

            <div >
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByOne}>Increment by one</Button>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div> 
        <Form /> 
        <Time/>  */}
             
             {/* custom hook */}
             {/* <div>
               <LayoutCopoOne />
               <LayoutCopoTwo/>
             </div> */}
          <div>
              {/* <Counterr /> */}
              {/* <ComplexCounter/> */}
              <CounterThree />
          </div>
      </div>
    )
}



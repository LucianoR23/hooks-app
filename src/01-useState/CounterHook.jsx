import {useCounter} from '../hooks/useCounter'

export const CounterHook = () => {

    const {counter, suma, resta, reset} = useCounter();


  return (
    <>
    <h1>CounterHook: {counter}</h1>

    <hr />

    <button className="btn btn-primary" onClick={suma}>+1</button>
    <button className="btn btn-primary" onClick={reset}>Reset</button>
    <button className="btn btn-primary" onClick={resta}>-1</button>
    </>
  )
}

import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    const increment = useCallback(
      (amount = 1) => {
        setCounter((value) => value + amount)
      },
      [],
    )
    
    
  return (
    <>
        <h1>useCallbackHook: {counter}</h1>
        <hr />

        <ShowIncrement increment={increment} />
    </>
  )
}

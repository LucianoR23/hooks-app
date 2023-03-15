import { useLayoutEffect, useRef, useState } from "react";
import { useCounter, useFetch } from "../hooks";

export const Quote = () => {


    const {counter} = useCounter()
    const {data} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {author, quote} = !!data && data[0];

    const pRef = useRef();

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({height, width})

  }, [quote])

  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}>
          <p ref={pRef} className="mb-3">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

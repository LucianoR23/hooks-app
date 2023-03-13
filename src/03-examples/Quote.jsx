import { useCounter, useFetch } from "../hooks";

export const Quote = () => {
    const {counter} = useCounter()
    const {data} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    const {author, quote} = !!data && data[0];

  return (
    <blockquote className="blockquote text-end">
        <p className="mb-3">{quote}</p>
        <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  )
}

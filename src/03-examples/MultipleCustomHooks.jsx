import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";


export const MultipleCustomHooks = () => {

    const {suma, counter} = useCounter();
    const {isLoading} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);


  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            isLoading
                ? (
                    <LoadingQuote></LoadingQuote>
                )
                : (
                    <Quote></Quote>
                )
        }

        <button onClick={suma} className="btn btn-primary" disabled={isLoading}>
            Next quote
        </button>

    </>
  )
}

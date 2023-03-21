import { useReducer } from "react"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la gema del Alma',
        done: false,
    }
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la gema del Poder',
        done: false,
    }
]

export const ToDoApp = () => {

    const [state, dispatch] = useReducer(reducer?, initialState)

  return (
    <>
        <h1>ToDoApp</h1>
        <hr />

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </>
  )
}

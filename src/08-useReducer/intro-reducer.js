

const initialState = [
    {
    id: 1,
    toDo: 'Recolectar la gema del Alma',
    done: false,
    }
]

const toDoReducer = (state = initialState, action = {}) => {

    if(action.type === '[ToDo] add toDo'){
        return [...state, action.payload];
    }

    return state;
}

let toDo = toDoReducer();

const newToDo = {
    id: 2,
    toDo: 'Recolectar la gema del Poder',
    done: false,
    };

const addToDoAction = {
    type: '[ToDo] add toDo',
    payload: newToDo,
}

toDo = toDoReducer(toDo, addToDoAction);

console.log({state: toDo});
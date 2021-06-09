import {combineReducers, createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todoListsReducer} from "./todolists-reducer";

const reducers = combineReducers({
    tasks: tasksReducer,
    todoLists: todoListsReducer,
})

export const store = createStore(reducers)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
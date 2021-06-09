import {v1} from "uuid";

export const ADD_TODO_LIST = 'ADD_TODO_LIST'
export const DELETE_TODO_LIST = 'DELETE_TODO_LIST'
const CHANGE_TODO_LIST_TITLE = 'CHANGE_TODO_LIST_TITLE'
const CHANGE_FILTER = 'CHANGE_FILTER'

type ActionType = ReturnType<typeof addTodoListAC> | ReturnType<typeof deleteTodoListAC> |
    ReturnType<typeof changeTodoListTitleAC> | ReturnType<typeof changeFilterAC>

export type FilterType = 'all' | 'active' | 'completed'

export type TodoListType = {
    id: string
    title: string
    filter: FilterType
}

export const TodoList1 = v1()
export const TodoList2 = v1()

const initState: TodoListType[] = [
    {id: TodoList1, title: 'Things to do', filter: 'all'},
    {id: TodoList2, title: 'Hobbies', filter: 'all'}
]

export const todoListsReducer = (state = initState, action: ActionType): TodoListType[] => {
    switch (action.type) {
        case ADD_TODO_LIST:
            return [...state, {id: action.todoListId, title: action.title, filter: 'all'}]

        case DELETE_TODO_LIST:
            return state.filter(tl => tl.id !== action.todoListId)

        case CHANGE_TODO_LIST_TITLE:
            return state.map(tl => tl.id === action.todoListId ? {...tl, title: action.title} : tl)

        case CHANGE_FILTER:
            return state.map(tl => tl.id === action.todoListId ? {...tl, filter: action.filter} : tl)

        default: return  state
    }
}

export const addTodoListAC = (title: string) => {
    return {
        type: ADD_TODO_LIST,
        title,
        todoListId: v1(),
    } as const
}
export const deleteTodoListAC = (todoListId: string) => {
    return {
        type: DELETE_TODO_LIST,
        todoListId,
    } as const
}
export const changeTodoListTitleAC = (title: string, todoListId: string) => {
    return {
        type: CHANGE_TODO_LIST_TITLE,
        title,
        todoListId,
    } as const
}
export const changeFilterAC = (filter: FilterType, todoListId: string) => {
    return {
        type: CHANGE_FILTER,
        filter,
        todoListId,
    } as const
}

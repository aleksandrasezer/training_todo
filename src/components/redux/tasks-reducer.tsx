import {v1} from "uuid";
import {ADD_TODO_LIST, addTodoListAC, DELETE_TODO_LIST, deleteTodoListAC, TodoList1, TodoList2} from "./todolists-reducer";

const ADD_NEW_TASK = 'ADD_NEW_TASK'
const DELETE_TASK = 'DELETE_TASK'
const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS'
const CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE'

type ActionType = ReturnType<typeof addNewTaskAC> | ReturnType<typeof deleteTaskAC> |
    ReturnType<typeof changeTaskStatusAC> | ReturnType<typeof changeTaskTitleAC> |
    ReturnType<typeof addTodoListAC> | ReturnType<typeof deleteTodoListAC>

const initState = {
    [TodoList1]:
        [{id: v1(), title: 'Meditate', checked: true},
            {id: v1(), title: 'Work out', checked: true},
            {id: v1(), title: 'Study', checked: false}],
    [TodoList2]:
        [{id: v1(), title: 'Solve the puzzles', checked: true},
            {id: v1(), title: 'Read', checked: false},
            {id: v1(), title: 'Sleep', checked: true}]
}

type InitStateType = typeof initState

export const tasksReducer = (state:InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {...state,
            [action.todoListId]: [{id: v1(), title: action.title, checked: false},...state[action.todoListId]]}

        case DELETE_TASK:
            return {...state, [action.todoListId]: state[action.todoListId].filter(t => t.id !== action.taskId)}

        case CHANGE_TASK_STATUS:
            return {...state,
                [action.todoListId]: state[action.todoListId].map(t => t.id === action.taskId ? {...t, checked: action.checked} : t)}

        case CHANGE_TASK_TITLE:
            return {...state,
                [action.todoListId]: state[action.todoListId].map(t => t.id === action.taskId ? {...t, title: action.title} : t)}

        case ADD_TODO_LIST:
            return {...state, [action.todoListId]: []}

        case DELETE_TODO_LIST:
            const stateCopy = {...state}
            delete stateCopy[action.todoListId]
            return stateCopy

        default: return state
    }
}

export const addNewTaskAC = (title: string, todoListId: string) => {
    return {
        type: ADD_NEW_TASK,
        title,
        todoListId,
    } as const
}
export const deleteTaskAC = (taskId: string, todoListId: string) => {
    return {
        type: DELETE_TASK,
        taskId,
        todoListId,
    } as const
}
export const changeTaskStatusAC = (checked: boolean, todoListId: string, taskId: string) => {
    return {
        type: CHANGE_TASK_STATUS,
        taskId,
        todoListId,
        checked,
    } as const
}
export const changeTaskTitleAC = (title: string, todoListId: string, taskId: string) => {
    return {
        type: CHANGE_TASK_TITLE,
        taskId,
        todoListId,
        title,
    } as const
}

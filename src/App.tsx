import React from 'react';
import './App.css';
import {FilterType,ToDoList} from "./components/ToDoList";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./components/redux/store";
import {
    addTodoListAC,
    changeFilterAC, changeTodoListTitleAC,
    deleteTodoListAC,
    TodoListType
} from "./components/redux/todolists-reducer";
import {addNewTaskAC, changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC} from "./components/redux/tasks-reducer";

function App() {

    const tasks = useSelector((state: RootState) => state.tasks)
    const todoLists = useSelector((state: RootState) => state.todoLists)
    const dispatch = useDispatch()

// dispatch for tasks:

    function addNewTask(title: string, todoListId: string) {
        dispatch(addNewTaskAC(title, todoListId))
    }

    function deleteTask(taskId: string, todoListId: string) {
        dispatch(deleteTaskAC(taskId, todoListId))
    }

    function changeTaskStatus(checked: boolean, todoListId: string, taskId: string) {
        dispatch(changeTaskStatusAC(checked, todoListId, taskId))
    }

    function changeTaskTitle(title: string, todoListId: string, taskId: string) {
        dispatch(changeTaskTitleAC(title, todoListId, taskId))
    }

//dispatch for todoLists

    function addNewTodoList(title: string) {
        const action = addTodoListAC(title)
        dispatch(action)
    }

    function deleteTodoList(todoListId: string) {
        const action = deleteTodoListAC(todoListId)
        dispatch(action)
    }

    function changeFilter(filter: FilterType, todoListId: string) {
        dispatch(changeFilterAC(filter,todoListId))
    }

    function changeTodoListTitle(title: string, todoListId: string) {
        dispatch(changeTodoListTitleAC(title, todoListId))
    }


    function filteredTasks(todoLists: TodoListType) {
        if (todoLists.filter === 'completed') {
            return tasks[todoLists.id].filter(t => t.checked)
        }
        if (todoLists.filter === 'active') {
            return tasks[todoLists.id].filter(t => !t.checked)
        } else return tasks[todoLists.id]
    }

    const todoListsComponents = todoLists.map(tl => {
        return (
            <ToDoList id={tl.id}
                      filter={tl.filter}
                      title={tl.title}
                      tasks={filteredTasks(tl)}
                      deleteLine={deleteTask}
                      changeFilter={changeFilter}
                      addNewTask={addNewTask}
                      changeTaskStatus={changeTaskStatus}
                      changeTaskTitle={changeTaskTitle}
                      changeTodoListTitle={changeTodoListTitle}
                      deleteTodoList={deleteTodoList}
            />
        )
    });
    return (
        <>
            <AddItemForm onButtonClick={addNewTodoList}/>
            {todoListsComponents}
        </>
    );
}

export default App;

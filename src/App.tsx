import React, { useState} from 'react';
import './App.css';
import {FilterType, TaskType, ToDoList} from "./components/ToDoList";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm/AddItemForm";

type ToDoListType = {
    id: string
    title: string
    filter: FilterType
}
export type TasksType = {
    [key: string]: TaskType[]
}

function App() {
    const TodoList1 = v1()
    const TodoList2 = v1()
    const [todoLists, setTodoLists] = useState<ToDoListType[]>([
        {id: TodoList1, title: 'Things to do', filter: 'all'},
        {id: TodoList2, title: 'Hobbies', filter: 'all'}
    ])
    const [tasks, setTasks] = useState<TasksType>({
        [TodoList1]:
            [{id: v1(), title: 'Meditate', checked: true},
                {id: v1(), title: 'Work out', checked: true},
                {id: v1(), title: 'Study', checked: false}],
        [TodoList2]:
            [{id: v1(), title: 'Solve the puzzles', checked: true},
                {id: v1(), title: 'Read', checked: false},
                {id: v1(), title: 'Sleep', checked: true}]
    })

    function addNewTask(title: string, TodoListId: string) {
        const newTask: TaskType = {
            id: v1(),
            title,
            checked: false
        }
        setTasks({...tasks, [TodoListId]: [newTask, ...tasks[TodoListId]]})
    }

    function addNewTodoList(title: string) {
        const newTodoList: ToDoListType = {
            id: v1(),
            title,
            filter: 'all'
        }
        setTodoLists([newTodoList,...todoLists])
        setTasks({...tasks, [newTodoList.id]: []})
    }

    function deleteLine(id: string, TodoListId: string) {
        let tasksLeft = tasks[TodoListId].filter((f) => f.id !== id)
        setTasks({...tasks, [TodoListId]: tasksLeft})
    }

    function changeFilter(filter: FilterType, ToDoListId: string) {
        setTodoLists(todoLists.map(tl => tl.id === ToDoListId ? {...tl, filter: filter} : tl))
    }

    function changeTodoListTitle(title: string, ToDoListId: string) {
        setTodoLists(todoLists.map(tl => tl.id === ToDoListId ? {...tl, title: title} : tl))
    }

    function changeTaskStatus(checked: boolean, ToDoListId: string, taskId: string) {
        let newTasks = tasks[ToDoListId].map(t => t.id === taskId ? {...t, checked: checked} : t)
        setTasks({...tasks, [ToDoListId]: newTasks})
    }

    function changeTaskTitle(title: string, ToDoListId: string, taskId: string) {
        let newTasks = tasks[ToDoListId].map(t => t.id === taskId ? {...t, title: title} : t)
        setTasks({...tasks, [ToDoListId]: newTasks})
    }

    function filteredTasks(todoLists: ToDoListType) {
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
                      deleteLine={deleteLine}
                      changeFilter={changeFilter}
                      addNewTask={addNewTask}
                      changeTaskStatus={changeTaskStatus}
                      changeTaskTitle={changeTaskTitle}
                      changeTodoListTitle={changeTodoListTitle}
            />
        )
    });
    return (
        <>
            <AddItemForm onButtonClick={addNewTodoList} />
            {todoListsComponents}
        </>
    );
}

export default App;

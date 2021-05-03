import React, {ChangeEvent, useState} from "react";

type PropsType = {
    id: string
    filter: FilterType
    title: string
    tasks: TaskType[]
    deleteLine: (id: string, TLId: string) => void
    changeFilter: (filter: FilterType, TLid: string) => void
    addNewTask: (title: string, TLId: string) => void
    changeTaskStatus: (checked: boolean, TLId: string, taskId: string) => void
}
export type TaskType = {
    id: string
    title: string
    checked: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

export function ToDoList(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState('')

    return <div>
        <h3>{props.title}</h3>

        <div>
            Add new task: <input value={newTaskTitle} onChange={(e) => {
            setNewTaskTitle(e.currentTarget.value)
        }}/>
            <button onClick={
                () => {
                    props.addNewTask(newTaskTitle, props.id)
                    setNewTaskTitle('')
                }}>
                ADD
            </button>
        </div>

        <ul>
            {props.tasks.map((t) => <li key={t.id}> {t.title}
                <input type='checkbox' checked={t.checked} onClick={e => {
                    props.changeTaskStatus(e.currentTarget.checked, props.id, t.id)
                }}/>
                <button onClick={() => props.deleteLine(t.id, props.id)}>X</button>
            </li>)}
            <div>
                <button onClick={() => props.changeFilter('completed', props.id)}>COMPLETED</button>
                <button onClick={() => props.changeFilter('active', props.id)}>ACTIVE</button>
                <button onClick={() => props.changeFilter('all', props.id)}>ALL</button>
            </div>
        </ul>
    </div>
}
import React, {MouseEvent} from "react";
import {AddItemForm} from "./AddItemForm/AddItemForm";
import {EditableSpan} from "./EditableSpan/EditableSpan";

type PropsType = {
    id: string
    filter: FilterType
    title: string
    tasks: TaskType[]
    deleteLine: (id: string, TLId: string) => void
    changeFilter: (filter: FilterType, TLid: string) => void
    addNewTask: (title: string, TLId: string) => void
    changeTaskStatus: (checked: boolean, TLId: string, taskId: string) => void
    changeTaskTitle: (title: string, TLId: string, taskId: string) => void
    changeTodoListTitle: (title: string, ToDoListId: string) => void

}
export type TaskType = {
    id: string
    title: string
    checked: boolean
}
export type FilterType = 'all' | 'active' | 'completed'

export function ToDoList(props: PropsType) {
    const addTask = (title: string) => {
        props.addNewTask(title, props.id)
    }

    const changeTodoListTitle = (title: string) => props.changeTodoListTitle(title, props.id)

    return <div className={'toDOList'}>
        <h3><EditableSpan title={props.title} changeTitle={changeTodoListTitle}/></h3>

        <div>
            Add new task: <AddItemForm onButtonClick={addTask} />
        </div>

        <ul>
            {props.tasks.map((t) => {

                const changeTaskTitle = (title: string) => props.changeTaskTitle(title, props.id,t.id)
                const changeTaskStatus = (e: MouseEvent<HTMLInputElement>) =>
                    props.changeTaskStatus(e.currentTarget.checked, props.id, t.id)

                return <li key={t.id}>

                <EditableSpan title={t.title}
                              changeTitle={changeTaskTitle}/>

                <input type='checkbox'
                       checked={t.checked}
                       onClick={changeTaskStatus}/>

                <button onClick={() => props.deleteLine(t.id, props.id)}>X</button>

            </li>})}
            <div>
                <button onClick={() => props.changeFilter('completed', props.id)}>COMPLETED</button>
                <button onClick={() => props.changeFilter('active', props.id)}>ACTIVE</button>
                <button onClick={() => props.changeFilter('all', props.id)}>ALL</button>
            </div>
        </ul>
    </div>
}
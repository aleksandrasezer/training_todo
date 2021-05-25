import React, {useState, ChangeEvent} from "react";
import s from './EditableSpan.module.css'

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.title)
    const [error, setError] = useState(false)

    const ActivateEditMode = () => setEditMode(true)

    const setNewTitle = () => {
        if (title) {
            setEditMode(false)
            props.changeTitle(title)
        } else {
            setError(true)
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        e.currentTarget.value.trim() === '' ? setError(true) : setError(false)
    }

    const errorToggle = error ? s.errorInput : s.normalInput

    return <>
            {editMode
                ? <input className={errorToggle}
                         onBlur={setNewTitle}
                         value={title}
                         onChange={onChangeHandler} autoFocus/>
                : <span onDoubleClick={ActivateEditMode}>{props.title}</span>}
    </>
}
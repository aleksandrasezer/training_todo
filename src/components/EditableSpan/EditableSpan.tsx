import React, {useState, ChangeEvent} from "react";

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(props.title)

    const ActivateEditMode = () => setEditMode(true)

    const setNewTitle = () => {
        setEditMode(false)
        props.changeTitle(title)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return <>
            {editMode
                ? <input onBlur={setNewTitle}
                         value={title}
                         onChange={onChangeHandler} autoFocus/>
                : <span onDoubleClick={ActivateEditMode}>{props.title}</span>}
    </>
}
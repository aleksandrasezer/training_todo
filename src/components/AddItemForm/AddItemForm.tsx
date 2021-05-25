import React, {ChangeEvent, useState} from "react";
import s from './AddItemForm.module.css'

type AddItemFormPropsType = {
    onButtonClick: (title: string) => void
}



export function AddItemForm(props: AddItemFormPropsType) {

    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        e.currentTarget.value.trim() === '' ? setError(true) : setError(false)
    }
    const onButtonClickHandler = () => {
        if (title) {
            props.onButtonClick(title)
            setTitle('')
        } else {
            setError(true)
        }
    }

    const inputClass  = error ? s.errorInput : s.normalInput

    return (
        <>
            <input className={inputClass}
                   value={title}
                   onChange={onChangeHandler} />
            <button onClick={onButtonClickHandler}
                    className={s.addItemFormButton}>ADD</button>
            {error ? <span className={s.errorMessage}> input is empty</span> : <span></span>}
        </>
    )
}
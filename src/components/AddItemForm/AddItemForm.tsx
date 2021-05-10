import React, {ChangeEvent, useState} from "react";
import s from './AddItemForm.module.css'

type AddItemFormPropsType = {
    onButtonClick: (title: string) => void
}



export function AddItemForm(props: AddItemFormPropsType) {

    const [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onButtonClickHandler = () => {
        props.onButtonClick(title)
        setTitle('')
    }

    return (
        <>
            <input value={title}
                   onChange={onChangeHandler} />
            <button onClick={onButtonClickHandler}
                    className={s.addItemFormButton}>ADD</button>
        </>
    )
}
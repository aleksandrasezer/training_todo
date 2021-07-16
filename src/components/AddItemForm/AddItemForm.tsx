import React, {ChangeEvent, useState} from "react";
import s from './AddItemForm.module.css'
import axios from "axios";

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

////// training promises

const printData = async () => {
    let resolvedProm = await axios.get("https://social-network.samuraijs.com/api/1.0/users")
    console.log(resolvedProm)
}
printData()

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': 'fd7ee122-ff59-4cee-b5b0-6226ee5b433c'
    }
})

const resPromises = () => {
    let p1 = instance.get('todo-lists')
    let p2 = axios.get('https://social-network.samuraijs.com/api/1.0/users')
    let p3 = instance.get('todo-lists/{9b75d081-7bec-45d1-ab11-362a5ae839ba}/tasks')

    Promise.all([p1,p2,p3]).then(data => {
        console.log(data[0].data[3].addedDate)
        console.log(data[1].data.items[3])
        console.log(data[2].data.totalCount)
    })
}
resPromises()

/// то же самое, но с promise.all и async - await

const resPromises2 = async () => {
    let promises = [
        instance.get('todo-lists'),
        axios.get('https://social-network.samuraijs.com/api/1.0/users'),
        instance.get('todo-lists/{9b75d081-7bec-45d1-ab11-362a5ae839ba}/tasks'),
    ]

    let data = await Promise.all(promises)

    console.log(data[0].data[2].addedDate)
    console.log(data[1].data.items[2])
    console.log(data[2].data.totalCount)
}
resPromises2()
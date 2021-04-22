import React, {useState} from "react";

type PropsType = {
    friends: FriendsType[]
    friendsLeft: (id: string) => void
    friendsCountry: (filter: FilterType) => void
    addNewFriend: (name: string, age: string, city: string) => void
}
export type FriendsType = {
    id: string
    name: string
    age: string
    city: string
}
export type FilterType = 'all' | 'russia' | 'slovenya'

export function ToDoList(props: PropsType) {
    const [newFriendName, setNewFriendName] = useState('')
    const [newAgeName, setNewAgeName] = useState('')
    const [newCityName, setNewCityName] = useState('')
    return <div>
        <div>
            Введите имя<input value={newFriendName} onChange={(e) => {
            setNewFriendName(e.currentTarget.value)
        }}/>
        </div>
        <div>
            Введите возраст<input value={newAgeName} onChange={(e) => {
            setNewAgeName(e.currentTarget.value)
        }}/>
        </div>
        <div>
            Введите город<input value={newCityName} onChange={(e) => {
            setNewCityName(e.currentTarget.value)
        }}/>
        </div>
        <button onClick={
            () => {
                props.addNewFriend(newFriendName, newAgeName, newCityName)
                setNewFriendName('')
                setNewAgeName('')
                setNewCityName('')
            }}>
            Добавить
        </button>
        <ul>
            {props.friends.map((f) => <li> Имя:{f.name} Возраст:{f.age} Город:{f.city}
                <span><button onClick={() => props.friendsLeft(f.id)}>X</button></span></li>)}
            <div>
                <button onClick={() => props.friendsCountry('russia')}>Россия</button>
                <button onClick={() => props.friendsCountry('slovenya')}>Словения</button>
                <button onClick={() => props.friendsCountry('all')}>Все</button>
            </div>
        </ul>
    </div>
}
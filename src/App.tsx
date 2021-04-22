import React, {useState} from 'react';
import './App.css';
import {FilterType, FriendsType, ToDoList} from "./components/ToDoList";
import {v1} from "uuid";


function App() {
    const [friends, setFriends] = useState([
        {id: v1(), name: 'Oksana', age: '29', city: 'Saint-P'},
        {id: v1(), name: 'Natasha', age: '29', city: 'Saint-P'},
        {id: v1(), name: 'Natasha', age: '28', city: 'Lyublyana'}
    ])
    const [filter, setFilter] = useState<FilterType>('all')

    function addNewFriend(name: string, age: string, city: string) {
        const newFriend = {
            id: v1(),
            name,
            age,
            city
        }
        let newFriendsArray = [newFriend,...friends]
        setFriends(newFriendsArray)
    }
    function friendsLeft(id: string) {
        let friendsLeft = friends.filter((f) => f.id !== id)
        setFriends(friendsLeft)
    }
    function friendsCountry(filter: FilterType) {
        setFilter(filter)
    }

    function filteredFriends() {
        if (filter === 'russia') {
            return friends.filter(f => f.city === 'Saint-P')
        }
        if (filter === 'slovenya') {
            return friends.filter(f => f.city === 'Lyublyana')
        }
        else return friends
    }


    return (
        <div className="App">
            <ToDoList friends={filteredFriends()}
                      friendsLeft={friendsLeft}
                      friendsCountry={friendsCountry}
                      addNewFriend={addNewFriend}
            />
        </div>
    );
}

export default App;

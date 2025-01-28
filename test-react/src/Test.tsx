import { useState } from "react";

/*
const user1 = {
    id: 0, username: 'pippo'
}
// per react, questi due oggetti sono due cose diversi
// hanno due puntatori diversi
const user2 = {
    id: 0, username: 'pippo'
}
*/

function Test() {

    const [userInputValue, setUserInputValue] = useState('');

    const [users, setUser] = useState([
        {id: 0, username: 'pippo'},
        {id:1, username: 'francesco'}
    ])

    // methods 

    const addUser = () => { // aggiunge all'array users 'paperino'
                
        // facciamo la funzione per catturare il prossimo id da dare al nuovo utente
        let maxId = 0;
        for(const user of users){
            if (user.id >= maxId) maxId = user.id;
        }

        const newUsers = [
            ...users,
            {id: maxId + 1, username: userInputValue}
        ]

        setUser(newUsers);  // aggiorno la variabile user
    }

    const removeUser = () => { // toglie l'user con l'username 'paperino'
        const newUsers = users.filter(user => {
            return user.username !== userInputValue
        })
    
        setUser(newUsers);
    }

    return (
        <div>
            {users.map(user => {
                return (
                    <div key={user.id}>
                        {/* lo spazio serve ad aggiungerlo tra le due variabili. se ne aggiungo altri, non aumentano nella loro stampa */}
                        {user.id} {user.username}
                    </div>
                )
            })

            }
            {/* value prende il valore dell'input */}
            {/* onChange si esegue quando cambia il valore dell'input */}
            {/* e sta per evento. tutto quello che il browser passa è sottoforma di eventi */}
            <input value={userInputValue} onChange={event => {
                setUserInputValue(event.target.value) // imposto il valore di userInputValue
            }}></input>

            <button onClick={addUser}>
                Add user
            </button>

            <button onClick={removeUser}>
                Remove users paperino
            </button>
        </div>
    )
}

export default Test;
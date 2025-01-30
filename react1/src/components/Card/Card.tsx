import './Card.css'                 // sempre importare lo stile!!
import {ReactNode} from 'react'     // obbligatorio per usare ReactNode

type CardProps = {
    children?: ReactNode            // metto il ? per dire che potrebbe non esserci nel tipo dell'oggetto
}

function Card(props: CardProps) {
    
    // render
    return (
        <div className="card">
            {props.children}
            {/* questo serve per far si che se metto qualcosa tra i tag
             di card, viene trasmesso qui come children */}
        </div>
    )
}

/* 
    cosa avrei messo sull'app.tsx

    import Card from './components/Card/Card';

    e poi nella return :
    
    <Card>
        <h3>Are you sure to delete?</h3>
        <p>Removing will be permanent</p>
    </Card>
    <Card>
        <h3>Create new user</h3>
        <input />
    </Card>

*/

export default Card;
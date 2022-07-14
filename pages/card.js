import * as React from 'react';
import ReactDOM  from 'react-dom';

// function App() {
//     return (
//         <div className='wrapper'>
//            <Card 
//            img='https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/98.png'
//            title='The Donkey Salad'
//            description ='Ocean, sky, snow and ice - minute greens and giant blues - dance a delicate dance in this evocative portrayal of the life cycle of an iceberg. Iceberg is a stunning, lyrical story for our times, from renowned creators Claire Saxby and Jess Racklyeft. Read by Angourie Rice.' 
//            />

//             <Card 
//            img='https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/8.png'
//            title='The Infant Salad'
//            description ='FOR the most wild, yet most homely narrative which I am about to pen, I neither expect nor solicit belief. Mad indeed would I be to expect it, in a case where my very senses reject their own evidence. Yet, mad am I not -- and very surely do I not dream. ' 
//            />

//             <Card 
//            img='https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/13.png'
//            title='The Black Cat'
//            description ='But to-morrow I die, and to-day I would unburthen my soul. My immediate purpose is to place before the world, plainly, succinctly, and without comment, a series of mere household events. In their consequences, these events have terrified -- have tortured -- have destroyed me. ' 
//            />       
//         </div>
//     )
// }

function Card1(props) {
    return (
        <div className='card'>
            <div className='card__body'>
                <img src={props.img} />
                <h2 className='card__title'> {props.title}</h2>
                <p className = 'card__description'> {props.description} </p>
            </div>
        </div>
    )
}

export default Card1;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
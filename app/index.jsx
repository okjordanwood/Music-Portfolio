import { useState } from 'react';

function Header({ title }) {
    return (<h1>{title ? title : 'Music Portfolio'}</h1>)
}

function HomePage() {
    const names = ['Zendaya', 'Sabrina Carpenter', 'Bill Burton'];
    const [likes, setLikes] = React.useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
            <div>
                <Header />
                <ul>
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                        ))}
                </ul>
                <button onClick={handleClick}>Like ({likes})</button>
            </div>
    );
}

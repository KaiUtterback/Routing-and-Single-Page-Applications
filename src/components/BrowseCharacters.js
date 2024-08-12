import React from 'react';
import { Link } from 'react-router-dom';

const mockCharacters = [
    { id: 1, name: 'Spider-Man' },
    { id: 2, name: 'Iron Man' },
    { id: 3, name: 'Thor' },
    { id: 4, name: 'Captain America' },
];

const BrowseCharacters = () => {
    return (
        <div className="container">
            <h2>Browse Characters</h2>
            <div>
                {mockCharacters.map(character => (
                    <div key={character.id} className="character-card">
                        <h3>{character.name}</h3>
                        <Link to={`/characters/${character.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseCharacters;

import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Character Details for {id}</h2>
        </div>
    );
};

export default CharacterDetails;

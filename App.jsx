import React, { useState } from 'react';
import PollOption from './PollOption';

const App = () => {
    const [pets, setPets] = useState([
        { option: 'Dog', count: 0 },
        { option: 'Cat', count: 0 },
        { option: 'Rat', count: 0 },
    ]);

    const handleVote = (index) => {
        const newPets = [...pets];
        newPets[index].count += 1;
        setPets(newPets);
    };

    const getLeader = () => {
        return pets.reduce((prev, current) => (prev.count > current.count) ? prev : current);
    };

    const leader = getLeader();

    return (
        <div>
            <h1>Vote for Your Favorite Pet!</h1>
            {pets.map((pet, index) => (
                <PollOption 
                    key={index} 
                    label={pet.option} 
                    count={pet.count} 
                    onVote={() => handleVote(index)} 
                />
            ))}
            <h2>Current Leader: {leader.option} with {leader.count} votes</h2>
        </div>
    );
};

export default App;
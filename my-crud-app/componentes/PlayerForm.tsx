import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPlayer, getPlayerById, updatePlayer } from '../src/api';
import React from 'react';

interface Player {
    name: string;
    team: string;
    number: number;
    country: string;
    origin: string
}

function PlayerForm() {

    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [player, setPlayer] = useState<Player>({

        name: '',
        team: '',
        number: 0,
        country: '',
        origin: '',
    });

    useEffect(() => {
        if (id) {
            loadPlayer();
        }
    }, [id]);

    const loadPlayer = async () => {
        try {
            const response = await getPlayerById(id as string);
            setPlayer(response.data);
        } 
        
        catch (error) {
            console.error("Error loading player data", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({
            ...player,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updatePlayer(id, player);
            } 
            
            else {
                await createPlayer(player);
            }
            navigate('/');
        } 
        
        catch (error) {
            console.error("Error saving player", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={player.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Number</label>
                <input
                    type="number"
                    name="number"
                    value={player.number}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Team</label>
                <input
                    type="string"
                    name="team"
                    value={player.team}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Origin</label>
                <input
                    type="string"
                    name="origin"
                    value={player.origin}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Country</label>
                <input
                    type="string"
                    name="country"
                    value={player.country}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

export default PlayerForm;
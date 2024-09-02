import { useEffect, useState } from 'react';
import { getPlayers, deletePlayer } from '../src/api'
import { Link } from 'react-router-dom';


interface Player {
 id: string;
 name: string;
 team: string;
 number: number;
 country: string;
 origin: string
}

function PlayersList() {

    const [players, setPlayers] = useState<Player[]>([]);
    useEffect(() => {
        loadPlayers();
    }, []);

    const loadPlayers = async () => {
        const response = await getPlayers();
        setPlayers(response.data);
    };

    const handleDelete = async (id: string) => {
        await deletePlayer(id)
        .catch((e) => alert(e));
        loadPlayers();
    };

    return (
        <div>
            <h1>Players List</h1>
            <Link to="/add">Add Player</Link>
            <ul>
                {players.map((player) => (
                <li key={player.id}>
                    {player.name} - number {player.number} from {player.origin} 
                    <Link to={`/edit/${player.id}`}>Edit</Link>
                    <button onClick={() => handleDelete(player.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </div>
    );
}
export default PlayersList;
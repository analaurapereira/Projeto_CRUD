import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const getPlayers = () => api.get('/players');
export const getPlayerById = (id: string) => api.get(`/players/${id}`);
export const createPlayer = (player: any) => api.post('/players', player);
export const updatePlayer = (id: string, player: any) => api.put(`/players/${id}`, player);
export const deletePlayer = (id: string) => api.delete(`/players/${id}`);
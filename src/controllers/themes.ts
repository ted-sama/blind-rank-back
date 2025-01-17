import { Request, Response } from 'express';
import { Theme } from '../models/theme';

export const getThemes = (req: Request, res: Response) => {
    const themes: Theme[] = [
        {
            id: 1,
            type: 'classic',
            title: '',
            description: 'A classic theme',
            elements: [
                {
                    id: 1,
                    themeId: 1,
                    title: 'Classic Element 1',
                    image: 'https://via.placeholder.com/150',
                },
                {
                    id: 2,
                    themeId: 1,
                    title: 'Classic Element 2',
                    image: 'https://via.placeholder.com/150',
                },
            ],
        },
        {
            id: 2,
            type: 'songs',
            title: 'Les meilleurs OST de jeux vidéo',
            description: 'A songs theme',
            elements: [
                {
                    id: 1,
                    themeId: 2,
                    title: 'Song Element 1',
                    description: 'Ruins - Undertale',
                    artist: 'Artist 1',
                    album: 'Album 1',
                    image: 'https://via.placeholder.com/150',
                    spotifyEmbed: '<iframe src="https://open.spotify.com/embed/track/6rqhFgbbKwnb9MLmUQDhG6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                },
                {
                    id: 2,
                    themeId: 2,
                    title: 'Song Element 2',
                    description: 'Main Theme - The Legend of Zelda: Breath of the Wild',
                    artist: 'Artist 2',
                    album: 'Album 2',
                    image: 'https://via.placeholder.com/150',
                    spotifyEmbed: '<iframe src="https://open.spotify.com/embed/track/6rqhFgbbKwnb9MLmUQDhG6" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
                },
            ]
        },
    ];

    res.json(themes);
};
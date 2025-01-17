export interface Theme {
    id: number;
    type: "classic" | "songs";
    title: string;
    description: string;
    elements: ThemeClassicElement[] | ThemeSongsElement[];
}

export interface ThemeClassicElement {
    id: number;
    themeId: number;
    title: string;
    image: string;
}

export interface ThemeSongsElement {
    id: number;
    themeId: number;
    title: string;
    description?: string;
    artist: string;
    album: string;
    image: string;
    spotifyEmbed: string;
}
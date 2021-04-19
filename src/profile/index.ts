//Represents the account profile
export interface Player {
    name: string
    positions: string[],
    picURL: string
}

export interface Video {
    title: string
    views: number,
    videoURL: string
}

export interface Album {
    name: string,
    imageURL: string
    releasedYear?: number,
    songList?: Song[]
}

export interface Song {
    title: string
    album?: Album,
    videoURL: string
}

export interface Profile {
    id: string,
    name: string,
    type?: string,
    bannerURL: string,
    profilePicURL: string,
    genres: string[],
    description: string,
    personil?: Player[],
    videos?: Video[]
    songList?: Song[]
    albums: Album[]
}

//Represents the profile as row for profile table
export interface ProfileRow {
    id: string,
    name: string,
    videoCount: number,
    audioCount: number
}
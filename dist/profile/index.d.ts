/**
 * Represents the personil model
 */
export interface Personil {
    name: string;
    positions: string[];
    picURL: string;
}
export interface Video {
    title: string;
    views: number;
    videoURL: string;
}
export interface Album {
    name: string;
    imageURL: string;
    releasedYear?: number;
    songList?: Song[];
}
export interface Song {
    title: string;
    album?: Album;
    videoURL: string;
}
export interface Profile {
    id: string;
    name: string;
    type?: string;
    bannerURL: string;
    profilePicURL: string;
    genres: string[];
    description: string;
    personils?: Personil[];
    videos?: Video[];
    songList?: Song[];
    albums: Album[];
}
export interface ProfileRow {
    id: string;
    name: string;
    videoCount: number;
    audioCount: number;
}

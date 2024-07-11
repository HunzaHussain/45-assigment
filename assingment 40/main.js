"use strict";
function make_album(artist_name, album_tittle, tracks) {
    let album = {
        artist: artist_name,
        title: album_tittle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("usman", "album tittle 1");
let album2 = make_album("zafar", "album tittle 2");
let album3 = make_album("ali", "album tittle 3", 20);
console.log(album1);
console.log(album2);
console.log(album3);

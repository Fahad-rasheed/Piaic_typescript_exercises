"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Object.defineProperty(exports, "__esModule", { value: true });
//  Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title, track) {
    const album = {
        artist,
        title,
        track
    };
    if (track !== undefined) {
        album.track;
    }
    return album;
}
const album1 = make_album('atif aslam', "kaho na pyar hy");
const album2 = make_album("lata", "jb tk hy jan", 12);
const album3 = make_album("abhijeet", "dil", 34);
console.log(album1);
console.log(album2);
console.log(album3);

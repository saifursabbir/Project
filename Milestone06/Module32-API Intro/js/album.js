function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}
loadAlbums();
function displayAlbums(Albums) {
    console.log(Albums)
    const albumsContainer = document.getElementById('albums')
    for (const album of Albums) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumsContainer.appendChild(p)
    }
}
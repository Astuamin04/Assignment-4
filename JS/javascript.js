document.getElementById('search-btn').addEventListener('click', function() {
    let songName = document.getElementById('song-input').value;
    fetchMusicData(songName);
});

function fetchMusicData(songName) {
    let apiKey = '4490104b2b5f5b6c0b7964c2178238da'; // Replace with your Musixmatch API key
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // CORS Proxy
    let apiUrl = `https://api.musixmatch.com/ws/1.1/track.search?q_track=${songName}&apikey=${apiKey}`;
    let url = proxyUrl + apiUrl;

    fetch(url)
        .then(response => response.json())
        .then(data => displayResults(data))
        .catch(error => console.error('Error:', error));
}

function displayResults(data) {
    let results = document.getElementById('results');
    results.innerHTML = ''; // Clear previous results

    if (!data.message || !data.message.body.track_list || data.message.body.track_list.length === 0) {
        results.innerHTML = '<p>No results found.</p>';
        return;
    }

    data.message.body.track_list.forEach(track => {
        let trackInfo = track.track;
        results.innerHTML += `<p><strong>${trackInfo.artist_name}</strong>: ${trackInfo.track_name}</p>`;
    });
}








//  VIDEO LINK https://youtu.be/wjgiPFWvwBI?si=7aT84cZCcqhFhw22,




document.addEventListener('DOMContentLoaded', function() {
    // Get channel name from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const channelName = urlParams.get('channel');

    // Fetch the stream URL from the server
    fetch(`/getStream?channel=${encodeURIComponent(channelName)}`)
        .then(response => response.json())
        .then(data => {
            if (data.streamURL) {
                // Set the stream URL in the video player
                const videoPlayer = document.getElementById('videoPlayer');
                if (videoPlayer) {
                    const streamSource = document.createElement('source');
                    streamSource.id = 'streamSource';
                    streamSource.src = data.streamURL;
                    streamSource.type = 'application/x-mpegURL';
                    videoPlayer.appendChild(streamSource);

                    // Initialize the video player
                    var player = videojs('videoPlayer');
                    player.ready(function() {
                        player.play(); // Start playback when player is ready
                    });
                }
            } else {
                alert('Stream URL not found');
            }
        })
        .catch(error => {
            console.error('Error fetching stream URL:', error);
        });

    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable certain key combinations
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a' || e.key === 'p') ||
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
            e.preventDefault();
        }
    });
});
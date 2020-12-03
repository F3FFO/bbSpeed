var playback = ["playback_025", "playback_050", "playback_075", "playback_100", "playback_125", "playback_150", "playback_175", "playback_200"];

chrome.runtime.onMessage.addListener(function(message) {
    var speed = message.playbackSpeed;
    var video = document.querySelectorAll("video")[0];
    if (video != null) {
        switch (speed) {
            case playback[0]:
                video.playbackRate = "0.25";
                break;
            case playback[1]:
                video.playbackRate = "0.50";
                break;
            case playback[2]:
                video.playbackRate = "0.75";
                break;
            case playback[3]:
                video.playbackRate = "1";
                break;
            case playback[4]:
                video.playbackRate = "1.25";
                break;
            case playback[5]:
                video.playbackRate = "1.50";
                break;
            case playback[6]:
                video.playbackRate = "1.75";
                break;
            case playback[7]:
                video.playbackRate = "2";
                break;
        }
        video.play();
    }
});
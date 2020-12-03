var contextMenus = {};
var playback = ["playback_025", "playback_050", "playback_075", "playback_100", "playback_125", "playback_150", "playback_175", "playback_200"];

contextMenus.createPlayback =
    chrome.contextMenus.create({
            type: "checkbox",
            id: playback[0],
            title: "0.25",
            checked: false,
            documentUrlPatterns: ["*://eu.bbcollab.com/collab/ui/session/playback/*"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    ),
    chrome.contextMenus.create({
            type: "checkbox",
            id: playback[1],
            title: "0.50",
            checked: false,
            documentUrlPatterns: ["*://eu.bbcollab.com/collab/ui/session/playback/*"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    ),
    chrome.contextMenus.create({
            type: "checkbox",
            id: playback[2],
            title: "0.75",
            checked: false,
            documentUrlPatterns: ["*://eu.bbcollab.com/collab/ui/session/playback/*"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    ),
    chrome.contextMenus.create({
            type: "checkbox",
            id: playback[3],
            title: "Normal",
            checked: true,
            documentUrlPatterns: ["*://eu.bbcollab.com/collab/ui/session/playback/*"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    ),
    chrome.contextMenus.create({
            type: "checkbox",
            id: playback[4],
            title: "1.25",
            checked: false,
            documentUrlPatterns: ["*://eu.bbcollab.com/collab/ui/session/playback/*"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    ),
    chrome.contextMenus.create({
            type: "checkbox",
            id: playback[5],
            title: "1.50",
            checked: false,
            documentUrlPatterns: ["*://eu.bbcollab.com/collab/ui/session/playback/*"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    ),
    chrome.contextMenus.create({
            type: "checkbox",
            id: playback[6],
            title: "1.75",
            checked: false,
            documentUrlPatterns: ["*://eu.bbcollab.com/collab/ui/session/playback/*"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    ),
    chrome.contextMenus.create({
            type: "checkbox",
            id: playback[7],
            title: "2",
            checked: false,
            documentUrlPatterns: ["*://eu.bbcollab.com/collab/ui/session/playback/*"]
        },
        function() {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

chrome.contextMenus.onClicked.addListener(
    function contextMenuHandler(info, tab) {
        switch (info.menuItemId) {
            case playback[0]:
                reset(playback[0]);
                chrome.tabs.executeScript({
                    file: "js/content.js"
                }, function() {
                    chrome.tabs.sendMessage(tab.id, { playbackSpeed: playback[0] });
                });
                break;
            case playback[1]:
                reset(playback[1]);
                chrome.tabs.executeScript({
                    file: "js/content.js"
                }, function() {
                    chrome.tabs.sendMessage(tab.id, { playbackSpeed: playback[1] });
                });
                break;
            case playback[2]:
                reset(playback[2]);
                chrome.tabs.executeScript({
                    file: "js/content.js"
                }, function() {
                    chrome.tabs.sendMessage(tab.id, { playbackSpeed: playback[2] });
                });
                break;
            case playback[3]:
                reset(playback[3]);
                chrome.tabs.executeScript({
                    file: "js/content.js"
                }, function() {
                    chrome.tabs.sendMessage(tab.id, { playbackSpeed: playback[3] });
                });
                break;
            case playback[4]:
                reset(playback[4]);
                chrome.tabs.executeScript({
                    file: "js/content.js"
                }, function() {
                    chrome.tabs.sendMessage(tab.id, { playbackSpeed: playback[4] });
                });
                break;
            case playback[5]:
                reset(playback[5]);
                chrome.tabs.executeScript({
                    file: "js/content.js"
                }, function() {
                    chrome.tabs.sendMessage(tab.id, { playbackSpeed: playback[5] });
                });
                break;
            case playback[6]:
                reset(playback[6]);
                chrome.tabs.executeScript({
                    file: "js/content.js"
                }, function() {
                    chrome.tabs.sendMessage(tab.id, { playbackSpeed: playback[6] });
                });
                break;
            case playback[7]:
                reset(playback[7]);
                chrome.tabs.executeScript({
                    file: "js/content.js"
                }, function() {
                    chrome.tabs.sendMessage(tab.id, { playbackSpeed: playback[7] });
                });
                break;
        }

    }
);

//set "checked" property to false
function reset(playback_in) {
    for (var i = 0; i < playback.length; i++) {
        if (playback[i] !== playback_in) {
            chrome.contextMenus.update(playback[i], {
                checked: false
            }, function() {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError.message);
                }
            })
        }
    }
}
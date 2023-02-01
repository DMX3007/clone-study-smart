function displayTranslated(word, translated) {
  chrome.runtime.sendMessage("", {
    type: "basic",
    title: `${word}`,
    message: `${translated}`,
    iconUrl: "./icon.png",
    priority: 0,
  });
}

function displayRepeat(word) {
  chrome.runtime.sendMessage("", {
    type: "progress",
    title: `${word}`,
    message: "hello",
    iconUrl: "./repeat.png",
    priority: 0,
    requireInteraction: true,
    buttons: [
      { title: "yes", iconUrl: "./icon.png" },
      { title: "no", iconUrl: "./repeat.png" },
    ],
  });
}

export { displayTranslated, displayRepeat };

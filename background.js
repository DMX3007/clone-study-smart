chrome.runtime.onMessage.addListener((data) => {
  if (data.type === "basic") {
    console.log(data.options);
    chrome.notifications.create("", data);
  } else if (data.type === "progress") {
    console.log(data.options);
    chrome.notifications.create("", data);
  }
});

chrome.notifications.onButtonClicked.addListener(function (id, btnIdx) {
  if (id) {
    if (btnIdx === 0) {
      chrome.storage.local.set(["asking"]).then((result) => {
        console.log("Value currently is " + result.key);
      });
    } else if (btnIdx === 1) {
      console.log("pressed no");
    }
  }
});

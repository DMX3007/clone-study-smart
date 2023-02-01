async function getWordsToRepeat() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, function (items) {
      const allWords = Object.keys(items);
      if (allWords.length) resolve(allWords);
      reject("empty");
    });
  });
}

async function debugStore() {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, function (items) {
      const allWords = Object.keys(items);
      resolve(allWords);
    });
  });
}

// Storage logic

const readStorage = async (key) => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get([key], function (result) {
      if (result[key] === undefined) {
        reject(new Error("error no keyword found"));
      } else {
        resolve(result[key]);
      }
    });
  });
};

const saveStorage = (word, translate, timeToRepeat, repeatLevel) => {
  chrome.storage.local.set({
    [`${word}`]: [translate, timeToRepeat, repeatLevel],
  });
};

export { saveStorage, readStorage, getWordsToRepeat, debugStore };

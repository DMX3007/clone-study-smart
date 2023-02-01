import { getWordsToRepeat, readStorage } from "./scripts/storage";
import { checkDate } from "./scripts/checkDate";
import { displayRepeat } from "./scripts/sendNotify";

export async function logic() {
  try {
    const wordsToRepeat = await getWordsToRepeat();
    setInterval(() => {
      wordsToRepeat.forEach(async (word) => {
        const time = await readStorage(word).then((r) => {
          return r[1]; // index from storage [ translated , => time, repeatLevel ]
        });
        if (checkDate(time)) {
          displayRepeat(word);
        }
      });
    }, 2000);
  } catch (error) {
    if (error === "empty") {
      chrome.storage.onChanged.addListener(function doStuff() {
        chrome.storage.onChanged.removeListener(doStuff);
        logic();
      });
    }
  }
}

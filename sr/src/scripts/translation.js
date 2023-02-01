import { translate } from "@vitalets/google-translate-api";
import createHttpProxyAgent from "http-proxy-agent";
import { saveStorage } from "./storage";
import { displayTranslated } from "./sendNotify";
import { getTime } from "./checkDate";

let agent = createHttpProxyAgent("http://185.147.35.240:80");

async function makeTranslate() {
  const selectedWord = document.getSelection().toString().trim();
  if (selectedWord && selectedWord.length) {
    (async () => {
      try {
        const { text } = await translate(selectedWord, {
          to: "ru",
          fetchOptions: { agent },
        });
        saveStorage(selectedWord, text, getTime() + DEFAULT_REPEAT, 0);
        displayTranslated(selectedWord, text);
      } catch (error) {
        if (error.name === "TooManyRequestsError") {
          // retry with another proxy agent
          agent = createHttpProxyAgent("http://103.118.40.119:80");
          const { text } = await translate(selectedWord, {
            to: "ru",
            fetchOptions: { agent },
          });
          saveStorage(selectedWord, text, getTime() + DEFAULT_REPEAT, 0);
          displayTranslated(selectedWord, text);
        }
      }
    })();
  }
}

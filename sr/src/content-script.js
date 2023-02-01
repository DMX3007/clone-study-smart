import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import debounce from "lodash.debounce";
import { readStorage, debugStore } from "./scripts/storage";
import { logic } from "./main.js";

const DEFAULT_REPEAT = 10000; // 1 min
const FIRST_REPEAT_LEVEL = 0; // amount of repeating;

createApp(App).mount("#app");

const debouncedTranslate = debounce(makeTranslate, 2000);
document.addEventListener("selectionchange", debouncedTranslate);

logic();

console.log("hi");

const showStore = document.createElement("button");
const h = document.querySelector("h1");
showStore.textContent = "show Storage";
document.querySelector("div").insertBefore(showStore, h);
showStore.addEventListener("click", async () => {
  const data = await debugStore(); // data => array
  const readed = await readStorage(data[0]);
});

import { createApp, ref, reactive } from "vue";
import App from "./App.vue";
import router from "@/router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faClock,
  faStopwatch,
  faHourglassStart,
  faPlay,
  faRotateLeft,
  faPause,
  faEllipsisVertical,
  faSun,
  faMoon,
  faSquareXmark,
  faXmark,
  faPlus,
  faFlag,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faClock,
  faStopwatch,
  faHourglassStart,
  faPlay,
  faRotateLeft,
  faPause,
  faEllipsisVertical,
  faSun,
  faMoon,
  faSquareXmark,
  faXmark,
  faPlus,
  faFlag,
  faQuestion,
);

import "ant-design-vue/dist/antd.css";
import "./assets/styles.css";

import { getTheme } from "@/utilities/getTheme.js";
import { createPinia } from "pinia";

const scheme = ref(getTheme());
const theme = reactive(scheme);

const app = createApp(App);
app
  .component("font-awesome-icon", FontAwesomeIcon)
  .provide("theme", theme)
  .use(router)
  .use(createPinia())
  .mount("#app");

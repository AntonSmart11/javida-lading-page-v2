import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faToolbox,
  faGaugeHigh,
  faWrench,
  faArrowRight,
  faPaperPlane,
  faLocationDot,
  faEnvelope,
  faClock,
  faXmark,
  faBars,
  faShieldHalved,
  faArrowUpRightFromSquare,
  faCompass,
  faBullseye,
  faEye,
  faAward,
  faLeaf,
  faUsers,
  faMicrochip,
  faCheckDouble,
  faHandshake,
  faClockRotateLeft,
  faFileCircleCheck,
  faRotate,
  faPhone,
  faCircleCheck,
  faCircleXmark,
  faArrowDown,
  faMapLocationDot,
  faWarehouse,
  faBuilding,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faToolbox,
  faGaugeHigh,
  faWrench,
  faArrowRight,
  faPaperPlane,
  faLocationDot,
  faEnvelope,
  faClock,
  faXmark,
  faBars,
  faShieldHalved,
  faArrowUpRightFromSquare,
  faCompass,
  faBullseye,
  faEye,
  faAward,
  faLeaf,
  faUsers,
  faMicrochip,
  faCheckDouble,
  faHandshake,
  faClockRotateLeft,
  faFileCircleCheck,
  faRotate,
  faPhone,
  faCircleCheck,
  faCircleXmark,
  faArrowUpRightFromSquare,
  faArrowDown,
  faMapLocationDot,
  faWarehouse,
  faBuilding,
  faDiagramProject,
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");

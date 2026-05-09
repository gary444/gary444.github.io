import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowDown,
  faLink,
  faExternalLinkAlt,
  faGraduationCap,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faOrcid } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add(faArrowDown, faLink, faExternalLinkAlt, faGraduationCap, faEnvelope, faLinkedin, faGithub, faOrcid);

createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");

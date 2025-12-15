import './assets/main.css'
import checkCapabilities from "../skip.js";
import { createApp } from 'vue'
import main from './main.vue'
checkCapabilities('#')
createApp(main).mount('#main')

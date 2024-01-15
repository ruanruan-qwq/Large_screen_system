import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import "./mock/Mock.cjs";

const app = createApp(App);

app.use(Antd).mount("#app");
